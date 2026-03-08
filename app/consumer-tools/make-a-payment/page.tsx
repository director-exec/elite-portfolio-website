'use client'

import { useEffect } from 'react'

export default function MakePaymentPage() {
  useEffect(() => {
    // Redirect to the external payment portal
    window.location.href = 'https://pay.eliteportmgmt.com/'
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f6f2'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#1c2a3f',
          marginBottom: '1rem'
        }}>
          Redirecting to Payment Portal...
        </h1>
        <p style={{
          color: '#666',
          marginBottom: '1rem'
        }}>
          You are being redirected to our secure payment portal.
        </p>
        <p style={{
          fontSize: '0.875rem',
          color: '#666'
        }}>
          If you are not redirected automatically,{' '}
          <a
            href="https://pay.eliteportmgmt.com/"
            style={{
              color: '#1c2a3f',
              textDecoration: 'underline'
            }}
          >
            click here
          </a>
        </p>
      </div>
    </div>
  )
} 