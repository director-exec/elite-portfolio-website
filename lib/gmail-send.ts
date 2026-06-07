/**
 * Gmail OAuth2 send — Elite Portfolio consumer-tools forms.
 *
 * Sends via the Gmail API using the same OAuth2 refresh token the CRM uses
 * (GMAIL_CLIENT_ID / GMAIL_CLIENT_SECRET / GMAIL_REFRESH_TOKEN / GMAIL_SENDER_EMAIL).
 * No SDK dependency — exchanges the refresh token for an access token and POSTs
 * the MIME message directly. Replaces the dead app-password SMTP path.
 */

const SENDER = () => process.env.GMAIL_SENDER_EMAIL || "documents@elite-portfolio.com";

async function getAccessToken(): Promise<string> {
  const body = new URLSearchParams({
    client_id: process.env.GMAIL_CLIENT_ID || "",
    client_secret: process.env.GMAIL_CLIENT_SECRET || "",
    refresh_token: process.env.GMAIL_REFRESH_TOKEN || "",
    grant_type: "refresh_token",
  });
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) {
    throw new Error(`Gmail token exchange failed: ${j.error_description || j.error || r.status}`);
  }
  return j.access_token as string;
}

export async function sendGmail(opts: {
  to: string;
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}): Promise<string | null> {
  const token = await getAccessToken();
  const sender = opts.from || SENDER();

  // RFC 2047-encode the subject if it contains non-ASCII (em dashes, etc.)
  const encodedSubject = /[^\x00-\x7F]/.test(opts.subject)
    ? `=?UTF-8?B?${Buffer.from(opts.subject, "utf-8").toString("base64")}?=`
    : opts.subject;

  const mime = [
    `From: Elite Portfolio Management <${sender}>`,
    `To: ${opts.to}`,
    ...(opts.replyTo ? [`Reply-To: ${opts.replyTo}`] : []),
    `Subject: ${encodedSubject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset="UTF-8"`,
    `Date: ${new Date().toUTCString()}`,
    ``,
    opts.html,
  ].join("\r\n");

  const raw = Buffer.from(mime)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const r = await fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ raw }),
    cache: "no-store",
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) {
    throw new Error(`Gmail send failed: ${j.error?.message || r.status}`);
  }
  return j.id || null;
}
