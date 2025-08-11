'use client'

import { useEffect } from 'react'

export default function MakePaymentPage() {
  useEffect(() => {
    // Redirect to the external payment portal
    window.location.href = 'https://portal.eliteportfoliomgmt.com/'
  }, [])

  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px'
      }}>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '1rem'
        }}>
          Redirecting to Payment Portal...
        </h1>
        <p style={{
          color: '#64748b',
          marginBottom: '1rem'
        }}>
          You are being redirected to our secure payment portal.
        </p>
        <p style={{
          fontSize: '0.875rem',
          color: '#64748b'
        }}>
          If you are not redirected automatically,{' '}
          <a 
            href="https://portal.eliteportfoliomgmt.com/"
            style={{
              color: '#1e3a8a',
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