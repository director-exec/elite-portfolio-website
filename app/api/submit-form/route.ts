import { NextRequest, NextResponse } from 'next/server'
import { sendGmail } from '@/lib/gmail-send'

// Email templates for different form types
const emailTemplates = {
  'account-validation': {
    subject: 'Account Validation Request - Elite Portfolio Management',
    to: 'validation@eliteportmgmt.com',
    template: (data: any) => `
      <h2>Account Validation Request</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Electronic Delivery Requested:</strong> ${data.electronicDelivery ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'bankruptcy-notification': {
    subject: 'Bankruptcy Notification - Elite Portfolio Management',
    to: 'info@eliteportmgmt.com',
    template: (data: any) => `
      <h2>Bankruptcy Notification</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Bankruptcy Case Number:</strong> ${data.bankruptcyCaseNumber}</p>
      <p><strong>Bankruptcy Chapter:</strong> ${data.bankruptcyChapter}</p>
      <p><strong>Filing Court:</strong> ${data.filingCourt}</p>
      <p><strong>Filing Date:</strong> ${data.filingDate}</p>
      <p><strong>Comments:</strong> ${data.comments || 'None provided'}</p>
      <p><strong>Files Uploaded:</strong> ${data.uploadedFiles ? data.uploadedFiles.length + ' file(s)' : 'No files uploaded'}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
      ${data.uploadedFiles ? `<p><strong>Note:</strong> Files were uploaded with this submission. Please check the file upload system or contact the user for document delivery.</p>` : ''}
    `
  },
  'remove-number': {
    subject: 'Remove My Number Request - Elite Portfolio Management',
    to: 'compliance@eliteportmgmt.com',
    template: (data: any) => `
      <h2>Remove My Number Request</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone Number to Remove:</strong> ${data.phoneNumberToRemove}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Reason:</strong> ${data.reason}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'compliment-complaint': {
    subject: 'Feedback Submission - Elite Portfolio Management',
    to: 'info@eliteportmgmt.com',
    template: (data: any) => `
      <h2>Feedback Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Feedback Type:</strong> ${data.feedbackType}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'dispute-account': {
    subject: 'Account Dispute - Elite Portfolio Management',
    to: 'compliance@eliteportmgmt.com',
    template: (data: any) => `
      <h2>Account Dispute</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zipCode}</p>
      <p><strong>Phone:</strong> ${data.phoneNumber}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Dispute Reason:</strong> ${data.disputeReason}</p>
      <p><strong>Dispute Details:</strong></p>
      <p>${data.disputeDetails}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'text-message-opt-in': {
    subject: 'Text Message Opt-In Submission',
    to: 'compliance@eliteportmgmt.com',
    template: (data: any) => `
      <h2>Text Message Opt-In Submission</h2>
      <p><strong>Phone Number:</strong> ${data.phone}</p>
      <p><strong>Full Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
      <p><strong>Consent Given:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  },
  'vod-response': {
    subject: 'VOD Response (Validation / Dispute) - Elite Portfolio Management',
    to: 'compliance@eliteportmgmt.com',
    template: (data: any) => `
      <h2>Consumer Response to Validation of Debt Notice</h2>
      <p><strong>Account Number:</strong> ${data.accountNumber}</p>
      <p><strong>Creditor:</strong> ${data.creditor}</p>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Address:</strong> ${data.address}, ${data.city}, ${data.state} ${data.zip}</p>
      <p><strong>Contact Email:</strong> ${data.contactEmail}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Response Type(s):</strong> ${(data.responseTypes || []).join(', ') || 'None'}</p>
      <p><strong>Dispute Reason:</strong> ${data.disputeReason || 'N/A'}</p>
      <p><strong>Dispute Details:</strong> ${data.disputeDetails || 'N/A'}</p>
      <p><strong>Requested Original Creditor:</strong> ${data.requestOriginalCreditor ? 'Yes' : 'No'}</p>
      <p><strong>Deliver Validation Documents To:</strong> ${data.deliveryEmail}</p>
      <p><strong>Phone/Text Contact Consent:</strong> ${data.contactConsent ? 'Yes' : 'No'}</p>
      <p><strong>Electronic Delivery Consent:</strong> ${data.electronicDeliveryConsent ? 'Yes' : 'No'}</p>
      <p><strong>CRM Record:</strong> ${data._crmStatus || 'not recorded'}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('API route called')
    console.log('Environment variables:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? '***' : 'NOT SET'
    })

    const body = await request.json()
    const { formType, formData } = body

    console.log('Form type:', formType)
    console.log('Form data:', formData)

    // Validate form type
    if (!emailTemplates[formType as keyof typeof emailTemplates]) {
      console.log('Invalid form type:', formType)
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      )
    }

    // VOD response -> record a durable, date-stamped dispute in the CRM (the source of truth).
    let crmRecorded = false
    if (formType === 'vod-response') {
      try {
        const crmUrl = process.env.ELITE_CRM_URL || 'https://crm.eliteportmgmt.com'
        const secret = process.env.PUBLIC_INTAKE_SECRET || ''
        const r = await fetch(`${crmUrl}/api/public/dispute-intake`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-intake-secret': secret },
          cache: 'no-store',
          body: JSON.stringify(formData),
        })
        const j = await r.json().catch(() => ({}))
        crmRecorded = r.ok
        formData._crmStatus = r.ok
          ? `recorded (dispute_id ${j.dispute_id || '?'}${j.matched ? '' : ' — NEEDS MANUAL MATCH'})`
          : `FAILED (HTTP ${r.status}) — handle this dispute from this email`
      } catch (e) {
        formData._crmStatus = 'FAILED (network) — handle this dispute from this email'
        console.error('[submit-form] CRM intake call failed:', e)
      }
    }

    const template = emailTemplates[formType as keyof typeof emailTemplates]
    
    // Check if there are uploaded files
    const hasFiles = formData.uploadedFiles && formData.uploadedFiles.length > 0
    let htmlContent = template.template(formData)
    
         // Add file information to email if files were uploaded
     if (hasFiles) {
       const fileList = formData.uploadedFiles.map((file: any) => {
         if (file.url) {
           return `<li><a href="${file.url}" target="_blank" style="color: #007bff; text-decoration: underline;">${file.name}</a> (${file.size} bytes) - <strong>Download Available</strong></li>`
         } else {
           return `<li>${file.name} (${file.size} bytes) - <em>Upload in progress</em></li>`
         }
       }).join('')
       
       htmlContent += `
         <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #007bff;">
           <h3 style="color: #007bff; margin-top: 0;">📎 Files Uploaded (${formData.uploadedFiles.length})</h3>
           <ul style="margin: 10px 0;">
             ${fileList}
           </ul>
                                               <p style="margin: 10px 0; color: #6c757d; font-size: 14px;">
               <strong>Note:</strong> Files are stored securely in Vercel Blob Storage and can be downloaded using the links above.
             </p>
         </div>
       `
     }

    console.log('Email template generated')
    console.log('Files uploaded:', hasFiles ? formData.uploadedFiles.length : 0)

    // Send team notification via Gmail OAuth (best-effort)
    let teamEmailOk = false
    try {
      await sendGmail({ to: template.to, subject: template.subject, html: htmlContent })
      teamEmailOk = true
    } catch (e) {
      console.error('[submit-form] team notification email failed:', e)
    }

    // Consumer confirmation for VOD responses (best-effort)
    if (formType === 'vod-response') {
      const deliver = formData.deliveryEmail || formData.contactEmail
      if (deliver) {
        try {
          await sendGmail({
            to: deliver,
            subject: 'We received your response — Elite Portfolio Management',
            html: `
              <div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;line-height:1.6;max-width:600px;">
                <p>Dear ${formData.firstName || 'Consumer'},</p>
                <p>This confirms that Elite Portfolio Management, LLC received your response on ${new Date().toLocaleString()}.</p>
                <p>If you requested validation of your debt, we will send the documentation to: <strong>${deliver}</strong>. If you disputed the debt, we will cease collection of the disputed amount until verification is provided. If you requested the original creditor's information, we will provide it.</p>
                <p style="font-weight:bold;font-size:15px;color:#1B2A4A;">This is an attempt to collect a debt, and any information obtained will be used for that purpose. This communication is from a debt collector.</p>
                <p style="font-size:13px;color:#444;">
                  Elite Portfolio Management, LLC<br>
                  2200 N Frazier St. STE 120 Box 142, Conroe, TX 77301<br>
                  (833) 381-4416 &middot; info@eliteportmgmt.com
                </p>
              </div>
            `,
          })
        } catch (e) {
          console.error('[submit-form] consumer confirmation failed:', e)
        }
      }
    }

    // VOD responses are durable in the CRM, so email failure must not fail the request.
    // Other forms rely on email — surface a failure so the consumer can retry.
    if (formType === 'vod-response') {
      if (crmRecorded || teamEmailOk) {
        return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 })
      }
      return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
    }
    if (!teamEmailOk) {
      return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
    }
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error submitting form:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: errorMessage,
      stack: error instanceof Error ? error.stack : 'No stack trace'
    })
    return NextResponse.json(
      { error: 'Failed to submit form', details: errorMessage },
      { status: 500 }
    )
  }
}
