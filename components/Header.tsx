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
                        <Link href="/About/security.html">Security</Link>
                        <Link href="/About/compliance.html">Compliance</Link>
                        <Link href="/About/industries-we-serve.html">Industries We Serve</Link>
                        <Link href="/About/community-involvement.html">Community Involvement</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/consumer-tools">Consumer Tools</Link>
                      <div className="dropdown-menu">
                        <Link href="/Consumer Tools/make-a-payment.html">Make a Payment</Link>
                        <Link href="/Consumer Tools/dispute-my-account.html">Dispute My Account</Link>
                        <Link href="/Consumer Tools/request-account-validation.html">Request Account Validation</Link>
                        <Link href="/Consumer Tools/bankruptcy-notification.html">Bankruptcy Notification</Link>
                        <Link href="/Consumer Tools/fraud-identity-theft.html">Fraud & Identity Theft</Link>
                        <Link href="/Consumer Tools/remove-my-number.html">Remove My Number</Link>
                        <Link href="/Consumer Tools/submit-compliment-complaint.html">Submit a Compliment or Complaint</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link href="/solutions">Solutions</Link>
                      <div className="dropdown-menu">
                        <Link href="/Solutions/pre-charge-off-collections.html">Pre-Charge Off Collections</Link>
                        <Link href="/Solutions/post-charge-off-collections.html">Post Charge-Off Collections</Link>
                        <Link href="/Solutions/secondary-tertiary-collections.html">Secondary & Tertiary Collections</Link>
                        <Link href="/Solutions/credit-bureau-reporting.html">Credit Bureau Reporting</Link>
                        <Link href="/Solutions/skip-tracing.html">Skip Tracing</Link>
                        <Link href="/Solutions/network-of-attorneys.html">Network of Attorneys</Link>
                        <Link href="/Solutions/warehousing-management.html">Warehousing Management</Link>
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
            <Link href="/About/security.html" onClick={closeMobileMenu}>Security</Link>
            <Link href="/About/compliance.html" onClick={closeMobileMenu}>Compliance</Link>
            <Link href="/About/industries-we-serve.html" onClick={closeMobileMenu}>Industries We Serve</Link>
            <Link href="/About/community-involvement.html" onClick={closeMobileMenu}>Community Involvement</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Consumer Tools</h4>
          <div className="mobile-menu-links">
            <Link href="/Consumer Tools/make-a-payment.html" onClick={closeMobileMenu}>Make a Payment</Link>
            <Link href="/Consumer Tools/dispute-my-account.html" onClick={closeMobileMenu}>Dispute My Account</Link>
            <Link href="/Consumer Tools/request-account-validation.html" onClick={closeMobileMenu}>Request Account Validation</Link>
            <Link href="/Consumer Tools/bankruptcy-notification.html" onClick={closeMobileMenu}>Bankruptcy Notification</Link>
            <Link href="/Consumer Tools/fraud-identity-theft.html" onClick={closeMobileMenu}>Fraud & Identity Theft</Link>
            <Link href="/Consumer Tools/remove-my-number.html" onClick={closeMobileMenu}>Remove My Number</Link>
            <Link href="/Consumer Tools/submit-compliment-complaint.html" onClick={closeMobileMenu}>Submit a Compliment or Complaint</Link>
          </div>
        </div>
        <div className="mobile-menu-section">
          <h4>Solutions</h4>
          <div className="mobile-menu-links">
            <Link href="/Solutions/pre-charge-off-collections.html" onClick={closeMobileMenu}>Pre-Charge Off Collections</Link>
            <Link href="/Solutions/post-charge-off-collections.html" onClick={closeMobileMenu}>Post Charge-Off Collections</Link>
            <Link href="/Solutions/secondary-tertiary-collections.html" onClick={closeMobileMenu}>Secondary & Tertiary Collections</Link>
            <Link href="/Solutions/credit-bureau-reporting.html" onClick={closeMobileMenu}>Credit Bureau Reporting</Link>
            <Link href="/Solutions/skip-tracing.html" onClick={closeMobileMenu}>Skip Tracing</Link>
            <Link href="/Solutions/network-of-attorneys.html" onClick={closeMobileMenu}>Network of Attorneys</Link>
            <Link href="/Solutions/warehousing-management.html" onClick={closeMobileMenu}>Warehousing Management</Link>
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