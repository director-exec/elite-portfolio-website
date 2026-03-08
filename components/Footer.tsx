import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Legal Disclosure Banner */}
        <div className="footer-legal-banner">
          <p>
            This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-main">
          {/* Column 1: Mailing Address */}
          <div className="footer-section">
            <h3>Mailing Address</h3>
            <p>
              Elite Portfolio Management<br />
              2200 N Frazier St.<br />
              STE 120 Box 142<br />
              Conroe TX, 77301<br />
              833-381-4416<br />
              info@eliteportmgmt.com
            </p>
          </div>

          {/* Column 2: Site Resources */}
          <div className="footer-section">
            <h3>Site Resources</h3>
            <div className="resources-grid">
              <div className="resources-column">
                <ul>
                  <li><a href="https://pay.eliteportmgmt.com/" target="_blank" rel="noopener noreferrer">Make a Payment</a></li>
                  <li><Link href="/consumer-tools">Consumer Tools</Link></li>
                  <li><a href="https://pay.eliteportmgmt.com/" target="_blank" rel="noopener noreferrer">Client Login</a></li>
                  <li><Link href="/solutions">Solutions</Link></li>
                  <li><Link href="/text-message-opt-in">Text Message Opt-in</Link></li>
                </ul>
              </div>
              <div className="resources-column">
                <ul>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/terms">Terms and Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Social + Badges */}
          <div className="footer-social-badges">
            <div className="social-links">
              <a href="#linkedin" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#instagram" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="footer-badges">
              <img
                src="/LOGO/BBBLogo.png"
                alt="Better Business Bureau"
              />
              <img
                src="/LOGO/EC_BADGE.png"
                alt="EverChain Certified Network Member"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>NMLS # 2724917</span>
            <span>CA License # 11645-99</span>
          </div>
          <p>&copy; 2026 Elite Portfolio Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
