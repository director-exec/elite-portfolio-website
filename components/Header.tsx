'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <Link href="/">
                <Image 
                  src="/LOGO/Borderless.png" 
                  alt="Diversified Adjustment Service, Inc." 
                  width={350} 
                  height={75}
                  priority
                />
              </Link>
            </div>
            
            {/* Right Side Container */}
            <div className="header-right">
              {/* Top Right: Contact Info + Payment Button */}
              <div className="header-top-right">
                <div className="contact-info">
                  Need Help? Call us at 1.800.279.3733
                </div>
                <Link href="/consumer-tools/payment" className="payment-button">
                  <i className="fas fa-dollar-sign"></i>
                  Make A Payment
                </Link>
              </div>
              
              {/* Bottom Right: Navigation */}
              <div className="header-bottom-right">
                <nav className="hidden lg:flex">
                  <ul className="nav-menu">
                    <li className="nav-item">
                      <Link href="/about">About</Link>
                      <div className="dropdown-menu">
                        <Link href="/about">About Main Page</Link>
                        <Link href="/about/security">Security</Link>
                        <Link href="/about/compliance">Compliance</Link>
                        <Link href="/about/industries">Industries We Serve</Link>
                        <Link href="/about/community">Community Involvement</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/consumer-tools">Consumer Tools</Link>
                      <div className="dropdown-menu">
                        <Link href="/consumer-tools">Consumer Tools</Link>
                        <Link href="/consumer-tools/payment">Make a Payment</Link>
                        <Link href="/consumer-tools/dispute">Dispute My Account</Link>
                        <Link href="/consumer-tools/validation">Request Account Validation</Link>
                        <Link href="/consumer-tools/bankruptcy">Bankruptcy Notification</Link>
                        <Link href="/consumer-tools/fraud">Fraud & Identity Theft</Link>
                        <Link href="/consumer-tools/remove-number">Remove My Number</Link>
                        <Link href="/consumer-tools/feedback">Submit a Compliment or Complaint</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/solutions">Solutions</Link>
                      <div className="dropdown-menu">
                        <Link href="/solutions">Solutions Main Page</Link>
                        <Link href="/solutions/pre-charge-off">Pre-Charge Off Collections</Link>
                        <Link href="/solutions/post-charge-off">Post Charge-Off Collections</Link>
                        <Link href="/solutions/secondary-tertiary">Secondary & Tertiary Collections</Link>
                        <Link href="/solutions/credit-reporting">Credit Bureau Reporting</Link>
                        <Link href="/solutions/skip-tracing">Skip Tracing</Link>
                        <Link href="/solutions/attorneys">Network of Attorneys</Link>
                        <Link href="/solutions/warehousing">Warehousing Management</Link>
                      </div>
                    </li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn lg:hidden" onClick={toggleMobileMenu}>
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`} id="mobileMenu">
        <div className="mobile-menu-section">
          <h4>About</h4>
          <div className="mobile-menu-links">
            <Link href="/about" onClick={closeMobileMenu}>About Main Page</Link>
            <Link href="/about/security" onClick={closeMobileMenu}>Security</Link>
            <Link href="/about/compliance" onClick={closeMobileMenu}>Compliance</Link>
            <Link href="/about/industries" onClick={closeMobileMenu}>Industries We Serve</Link>
            <Link href="/about/community" onClick={closeMobileMenu}>Community Involvement</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Consumer Tools</h4>
          <div className="mobile-menu-links">
            <Link href="/consumer-tools" onClick={closeMobileMenu}>Consumer Tools</Link>
            <Link href="/consumer-tools/payment" onClick={closeMobileMenu}>Make a Payment</Link>
            <Link href="/consumer-tools/dispute" onClick={closeMobileMenu}>Dispute My Account</Link>
            <Link href="/consumer-tools/validation" onClick={closeMobileMenu}>Request Account Validation</Link>
            <Link href="/consumer-tools/bankruptcy" onClick={closeMobileMenu}>Bankruptcy Notification</Link>
            <Link href="/consumer-tools/fraud" onClick={closeMobileMenu}>Fraud & Identity Theft</Link>
            <Link href="/consumer-tools/remove-number" onClick={closeMobileMenu}>Remove My Number</Link>
            <Link href="/consumer-tools/feedback" onClick={closeMobileMenu}>Submit a Compliment or Complaint</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Solutions</h4>
          <div className="mobile-menu-links">
            <Link href="/solutions" onClick={closeMobileMenu}>Solutions Main Page</Link>
            <Link href="/solutions/pre-charge-off" onClick={closeMobileMenu}>Pre-Charge Off Collections</Link>
            <Link href="/solutions/post-charge-off" onClick={closeMobileMenu}>Post Charge-Off Collections</Link>
            <Link href="/solutions/secondary-tertiary" onClick={closeMobileMenu}>Secondary & Tertiary Collections</Link>
            <Link href="/solutions/credit-reporting" onClick={closeMobileMenu}>Credit Bureau Reporting</Link>
            <Link href="/solutions/skip-tracing" onClick={closeMobileMenu}>Skip Tracing</Link>
            <Link href="/solutions/attorneys" onClick={closeMobileMenu}>Network of Attorneys</Link>
            <Link href="/solutions/warehousing" onClick={closeMobileMenu}>Warehousing Management</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Contact</h4>
          <div className="mobile-menu-links">
            <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
} 