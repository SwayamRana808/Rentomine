import React from 'react';

const CancellationAndRefundPolicy = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <section id="cancellation-refund-policy" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#222' }}>
          Cancellation & Refund Policy
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          <strong>Last updated on Dec 18th 2024</strong>
        </p>

        <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
          No cancellations & refunds are entertained.
        </p>
      </section>
    </div>
  );
};

export default CancellationAndRefundPolicy;
