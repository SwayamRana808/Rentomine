import React from 'react';

const ContactUs = () => {
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
      <section id="contact-us" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#222' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          If you have any questions, feedback, or need assistance, feel free to reach out to us. We are here to help!
        </p>
        <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
          You can reach us at: 
          <a href="mailto:swayamrana808@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>
            swayamrana808@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
