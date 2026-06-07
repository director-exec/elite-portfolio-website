'use client'

import { useState, useEffect } from 'react'

const US_STATES = [
  ['AL','Alabama'],['AK','Alaska'],['AZ','Arizona'],['AR','Arkansas'],['CA','California'],
  ['CO','Colorado'],['CT','Connecticut'],['DE','Delaware'],['FL','Florida'],['GA','Georgia'],
  ['HI','Hawaii'],['ID','Idaho'],['IL','Illinois'],['IN','Indiana'],['IA','Iowa'],['KS','Kansas'],
  ['KY','Kentucky'],['LA','Louisiana'],['ME','Maine'],['MD','Maryland'],['MA','Massachusetts'],
  ['MI','Michigan'],['MN','Minnesota'],['MS','Mississippi'],['MO','Missouri'],['MT','Montana'],
  ['NE','Nebraska'],['NV','Nevada'],['NH','New Hampshire'],['NJ','New Jersey'],['NM','New Mexico'],
  ['NY','New York'],['NC','North Carolina'],['ND','North Dakota'],['OH','Ohio'],['OK','Oklahoma'],
  ['OR','Oregon'],['PA','Pennsylvania'],['RI','Rhode Island'],['SC','South Carolina'],['SD','South Dakota'],
  ['TN','Tennessee'],['TX','Texas'],['UT','Utah'],['VT','Vermont'],['VA','Virginia'],['WA','Washington'],
  ['WV','West Virginia'],['WI','Wisconsin'],['WY','Wyoming'],
]

export default function RespondToYourNoticePage() {
  const [showModal, setShowModal] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitOk, setSubmitOk] = useState(false)

  const [formData, setFormData] = useState({
    accountNumber: '',
    creditor: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    deliveryEmail: '',
    // response selections
    wantValidation: false,
    wantDispute: false,
    wantOriginalCreditor: false,
    disputeReason: '',
    disputeDetails: '',
    // consents
    attestation: false,
    contactConsent: false,
    electronicDeliveryConsent: false,
  })

  const closeModal = () => setShowModal(false)

  // Pre-fill the account number from the VOD notice link ({{dispute_link}} -> /respond?ref=E-21187)
  useEffect(() => {
    try {
      const ref = new URLSearchParams(window.location.search).get('ref')
      if (ref) setFormData(prev => ({ ...prev, accountNumber: ref }))
    } catch {
      /* no-op */
    }
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage('')

    // At least one response type must be selected
    if (!formData.wantValidation && !formData.wantDispute && !formData.wantOriginalCreditor) {
      setSubmitOk(false)
      setSubmitMessage('Please choose at least one option under "How would you like to respond?"')
      return
    }

    setIsSubmitting(true)
    const responseTypes: string[] = []
    if (formData.wantValidation) responseTypes.push('validation')
    if (formData.wantDispute) responseTypes.push('dispute')
    if (formData.wantOriginalCreditor) responseTypes.push('original_creditor')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
        body: JSON.stringify({
          formType: 'vod-response',
          formData: {
            accountNumber: formData.accountNumber,
            creditor: formData.creditor,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zipCode,
            contactEmail: formData.email,
            phone: formData.phoneNumber,
            responseTypes,
            disputeReason: formData.wantDispute ? formData.disputeReason : '',
            disputeDetails: formData.wantDispute ? formData.disputeDetails : '',
            requestOriginalCreditor: formData.wantOriginalCreditor,
            deliveryEmail: formData.deliveryEmail || formData.email,
            contactConsent: formData.contactConsent,
            electronicDeliveryConsent: formData.electronicDeliveryConsent,
          },
        }),
      })

      if (response.ok) {
        setSubmitOk(true)
        setSubmitMessage(
          'Your response has been received and recorded. If you requested validation, we will send your documentation to the email address you provided. You may also receive a follow-up from a member of our team.'
        )
        setFormData({
          accountNumber: '', creditor: '', firstName: '', lastName: '', address: '', city: '',
          state: '', zipCode: '', phoneNumber: '', email: '', deliveryEmail: '',
          wantValidation: false, wantDispute: false, wantOriginalCreditor: false,
          disputeReason: '', disputeDetails: '',
          attestation: false, contactConsent: false, electronicDeliveryConsent: false,
        })
      } else {
        setSubmitOk(false)
        setSubmitMessage('There was an error submitting your response. Please try again, or contact us directly at (833) 381-4416.')
      }
    } catch {
      setSubmitOk(false)
      setSubmitMessage('There was an error submitting your response. Please try again, or contact us directly at (833) 381-4416.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="subpage-hero">
        <div className="subpage-hero-bg" style={{ backgroundImage: 'url(/Pages/Calculator_Writing_Pro.jpeg)' }}></div>
        <div className="subpage-hero-overlay"></div>
        <div className="subpage-hero-content">
          <h1>Respond to Your Notice</h1>
          <p>Request validation of your debt, dispute your account, or request your original creditor &mdash; in one place.</p>
        </div>
      </section>

      {/* Your federal rights */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <h2>Your Rights</h2>
          <div style={{ maxWidth: 820, lineHeight: 1.7 }}>
            <p>
              Under federal law, you have <strong>30 days</strong> from the date you receive our notice to dispute the
              validity of this debt or any portion of it. You may also request the name and address of the original
              creditor. You can respond using the form below, or in writing by mail.
            </p>
            <ul style={{ marginTop: 12, paddingLeft: 20 }}>
              <li style={{ marginBottom: 8 }}><strong>Request validation</strong> &mdash; ask us to send you documentation verifying this debt.</li>
              <li style={{ marginBottom: 8 }}><strong>Dispute the debt</strong> &mdash; tell us you believe the debt is not yours, the amount is wrong, or it was already paid.</li>
              <li style={{ marginBottom: 8 }}><strong>Request the original creditor</strong> &mdash; ask for the name and address of the original creditor, if different from the current creditor.</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              You are not required to consent to phone or text contact in order to respond. To learn more about your
              rights under federal law, visit{' '}
              <a href="https://www.cfpb.gov/debt-collection" target="_blank" rel="noopener noreferrer">www.cfpb.gov/debt-collection</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery notice */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <h2>How We&rsquo;ll Send Your Documents</h2>
          <div style={{ maxWidth: 820, lineHeight: 1.7 }}>
            <p>
              If you request validation, we will send your documentation to the email address you choose below. You
              may enter a different delivery address than your contact email. Documents are sent by standard
              (unencrypted) email, which may not offer the same level of security as postal mail &mdash; by providing an
              email address, you accept delivery in this format. To avoid delivery issues, add{' '}
              <strong>info@eliteportmgmt.com</strong> to your safe-sender list. You may also request delivery
              by mail using the contact information at the bottom of this page.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <div className="text-center mb-8">
            <h2>Respond to Your Notice</h2>
            <p>Please include Elite PortfolioElite Portfolio&rsquo;srsquo;s account number from your notice (shown as your File No.).</p>
          </div>

          <form onSubmit={handleSubmit} className="subpage-form">
            <div className="form-row">
              {/* Left column */}
              <div>
                <div>
                  <label>Account Number <span className="text-blue-900">*</span></label>
                  <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} placeholder="Account number from your notice" required />
                </div>
                <div>
                  <label>First Name <span className="text-blue-900">*</span></label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter your first name" required />
                </div>
                <div>
                  <label>Mailing Address <span className="text-blue-900">*</span></label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Enter your mailing address" required />
                </div>
                <div>
                  <label>City <span className="text-blue-900">*</span></label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="Enter your city" required />
                </div>
                <div className="form-row">
                  <div>
                    <label>State <span className="text-blue-900">*</span></label>
                    <select name="state" value={formData.state} onChange={handleInputChange} required>
                      <option value="">Select State</option>
                      {US_STATES.map(([abbr, name]) => (<option key={abbr} value={abbr}>{name}</option>))}
                    </select>
                  </div>
                  <div>
                    <label>ZIP Code <span className="text-blue-900">*</span></label>
                    <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="Enter ZIP code" required />
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div>
                <div>
                  <label>Creditor <span className="text-blue-900">*</span></label>
                  <input type="text" name="creditor" value={formData.creditor} onChange={handleInputChange} placeholder="Enter creditor name" required />
                </div>
                <div>
                  <label>Last Name <span className="text-blue-900">*</span></label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" required />
                </div>
                <div>
                  <label>Phone Number (optional)</label>
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Optional" />
                </div>
                <div>
                  <label>Contact Email <span className="text-blue-900">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email address" required />
                </div>
                <div>
                  <label>Send my validation documents to <span className="text-blue-900">*</span></label>
                  <input type="email" name="deliveryEmail" value={formData.deliveryEmail} onChange={handleInputChange} placeholder="Defaults to your contact email" />
                </div>
              </div>
            </div>

            {/* Response selection */}
            <div style={{ marginTop: 8, padding: '20px', border: '1px solid #d8dee9', borderRadius: 8, background: '#fafbfc' }}>
              <p style={{ fontWeight: 700, marginBottom: 12 }}>How would you like to respond? (check all that apply) <span className="text-blue-900">*</span></p>

              <div className="form-checkbox">
                <input type="checkbox" name="wantValidation" checked={formData.wantValidation} onChange={handleInputChange} />
                <label>Request validation/verification of this debt.</label>
              </div>

              <div className="form-checkbox">
                <input type="checkbox" name="wantDispute" checked={formData.wantDispute} onChange={handleInputChange} />
                <label>Dispute this debt.</label>
              </div>

              {formData.wantDispute && (
                <div style={{ margin: '4px 0 12px 28px' }}>
                  <p style={{ marginBottom: 6 }}>I am disputing because:</p>
                  {[
                    ['not_my_debt', 'This is not my debt.'],
                    ['wrong_amount', 'The amount is wrong.'],
                    ['already_paid', 'This debt was already paid.'],
                    ['other', 'Other (please describe below).'],
                  ].map(([val, label]) => (
                    <div className="form-checkbox" key={val}>
                      <input type="radio" name="disputeReason" value={val} checked={formData.disputeReason === val} onChange={handleInputChange} />
                      <label>{label}</label>
                    </div>
                  ))}
                  <textarea
                    name="disputeDetails"
                    value={formData.disputeDetails}
                    onChange={handleInputChange}
                    placeholder="Add any details about your dispute (optional)."
                    rows={3}
                    style={{ width: '100%', marginTop: 8, padding: 10, borderRadius: 6, border: '1px solid #d8dee9' }}
                  />
                </div>
              )}

              <div className="form-checkbox">
                <input type="checkbox" name="wantOriginalCreditor" checked={formData.wantOriginalCreditor} onChange={handleInputChange} />
                <label>Request the name and address of the original creditor (if different from the current creditor).</label>
              </div>
            </div>

            {/* Consents */}
            <div style={{ marginTop: 16 }}>
              <div className="form-checkbox">
                <input type="checkbox" name="attestation" checked={formData.attestation} onChange={handleInputChange} required />
                <label>I am the account holder (or an authorized representative), and the information I have provided is accurate. <span className="text-blue-900">*</span></label>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" name="electronicDeliveryConsent" checked={formData.electronicDeliveryConsent} onChange={handleInputChange} />
                <label>I request electronic delivery of my documents and understand I may revoke this consent at any time through reasonable means. (Optional)</label>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" name="contactConsent" checked={formData.contactConsent} onChange={handleInputChange} />
                <label>You may contact me by phone or text at the number I provided. (Optional &mdash; not required to submit this response.)</label>
              </div>
            </div>

            <div className="form-submit-wrap">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Response'}
              </button>
              {submitMessage && (
                <div className={submitOk ? 'form-success' : 'form-error'}>{submitMessage}</div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Mini-Miranda / legal disclosure (prominent) */}
      <section className="subpage-section subpage-section-cream">
        <div className="subpage-container">
          <div style={{ maxWidth: 820, border: '2px solid #0b1f3a', borderRadius: 8, padding: '18px 22px', background: '#ffffff' }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: '#0b1f3a', lineHeight: 1.6, margin: 0 }}>
              This is an attempt to collect a debt, and any information obtained will be used for that purpose. This
              communication is from a debt collector.
            </p>
            <p style={{ fontSize: 14, color: '#1a1a1a', lineHeight: 1.6, marginTop: 10, marginBottom: 0 }}>
              If you have received a discharge in bankruptcy for this debt, this communication is for informational
              purposes only and is not an attempt to collect the debt against you personally.
            </p>
          </div>
        </div>
      </section>

      {/* Contact information */}
      <section className="subpage-section subpage-section-white">
        <div className="subpage-container">
          <h2>Contact Information</h2>
          <div style={{ lineHeight: 1.7 }}>
            <p><strong>Elite Portfolio Management, LLC</strong></p>
            <p>2200 N Frazier St. STE 120 Box 142, Conroe, TX 77301</p>
            <p>Phone: (833) 381-4416</p>
            <p><strong>Validation / Dispute Email:</strong> info@eliteportmgmt.com</p>
          </div>
        </div>
      </section>

      {/* Disclosure modal */}
      {showModal && (
        <div className="disclosure-overlay" onClick={closeModal}>
          <div className="disclosure-modal" onClick={(e) => e.stopPropagation()}>
            <h2>IMPORTANT</h2>
            <p>This is an attempt to collect a debt. Any information will be used for that purpose. This communication is from a debt collector.</p>
            <p>Calls to and from this company may be monitored and/or recorded.</p>
            <button className="disclosure-modal-btn" onClick={closeModal}>I Accept</button>
          </div>
        </div>
      )}
    </>
  )
}
