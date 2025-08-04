import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Legal Disclosure</h3>
            <p>
              This is an attempt to collect a debt. Any information obtained will be used for that purpose. This communication is from a debt collector.
            </p>
          </div>

          <div className="footer-section">
            <h3>Mailing Address</h3>
            <p>
              Elite Portfolio Management<br />
              PO Box [Insert Address]<br />
              [City, State ZIP]<br />
              📞 1-800-XXX-XXXX<br />
              📧 info@eliteportfoliomgmt.com
            </p>
          </div>

          <div className="footer-section">
            <h3>Site Resources</h3>
            <ul>
              <li><Link href="/consumer-tools/payment">Make a Payment</Link></li>
              <li><Link href="/consumer-tools">Consumer Tools</Link></li>
              <li><Link href="/client-login">Client Login</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/solutions">Solutions</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy & Disclaimers</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
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

        <div className="footer-bottom">
          <p>&copy; 2024 Elite Portfolio Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 