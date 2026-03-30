import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* TOP: All License Numbers — bold white, prominent */}
        <div className="footer-licenses">
          <span>NMLS # 2724917</span>
          <span className="license-separator">|</span>
          <span>CA License # 11645-99</span>
          <span className="license-separator">|</span>
          <span>FL License # CCA9905045</span>
          <span className="license-separator">|</span>
          <span>WA UBI # 605-954-627</span>
          <span className="license-separator">|</span>
          <span>LA License # WEB 46689190I</span>
          <span className="license-separator">|</span>
          <span>TN License # 2709</span>
        </div>

        {/* Legal Disclosure — bold white, clearly readable */}
        <div className="footer-legal-banner">
          <p>
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>

        {/* Compact Footer Content — single row layout */}
        <div className="footer-compact">
          {/* Left: Address + Contact */}
          <div className="footer-info">
            <p>
              Elite Portfolio Management &nbsp;|&nbsp; 2200 N Frazier St. STE 120 Box 142, Conroe TX 77301
              &nbsp;|&nbsp; <a href="tel:833-381-4416">833-381-4416</a>
              &nbsp;|&nbsp; <a href="mailto:info@eliteportmgmt.com">info@eliteportmgmt.com</a>
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="footer-links">
            <a href="https://secure.eliteportmgmt.com" target="_blank" rel="noopener noreferrer">Make a Payment</a>
            <Link href="/consumer-tools">Consumer Tools</Link>
            <Link href="/solutions">Solutions</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          {/* Right: Badges + Social — prominent */}
          <div className="footer-badges-social">
            <div className="footer-badges">
              <img
                src="/LOGO/BBBLogo.png"
                alt="Better Business Bureau A-Rated"
                className="badge-bbb"
              />
              <img
                src="/LOGO/EC_BADGE.png"
                alt="EverChain Certified Network Member"
                className="badge-ec"
              />
              <img
                src="/LOGO/ACA_Member.svg"
                alt="ACA International Member"
                className="badge-aca"
              />
              <img
                src="/LOGO/RMAI_Member.svg"
                alt="RMAI Member"
                className="badge-rmai"
              />
            </div>
            <div className="social-links">
              <a href="#linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar — copyright only */}
        <div className="footer-bottom">
          <p>&copy; 2026 Elite Portfolio Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
