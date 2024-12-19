import React from 'react';

const PrivacyPolicy = () => {
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
      <section id="privacy-policy" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#222' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          <strong>Last updated on Dec 18th 2024</strong>
        </p>

        <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
          At express07, we are committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or engage with us in other ways.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '30px', color: '#222' }}>
          1. Information We Collect
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          We may collect the following types of information:
          <ul style={{ fontSize: '1.2rem', marginTop: '10px', paddingLeft: '20px' }}>
            <li>Personal information such as your name, email address, phone number, etc.</li>
            <li>Usage data such as IP address, browser type, device information, and pages visited.</li>
            <li>Transaction data when you make a purchase or request services from us.</li>
          </ul>
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '30px', color: '#222' }}>
          2. How We Use Your Information
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          We use the information we collect to:
          <ul style={{ fontSize: '1.2rem', marginTop: '10px', paddingLeft: '20px' }}>
            <li>Provide and improve our services.</li>
            <li>Process transactions and send related information.</li>
            <li>Respond to your inquiries and communicate with you.</li>
            <li>Analyze website usage to improve user experience.</li>
            <li>Comply with legal obligations and protect our rights.</li>
          </ul>
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '30px', color: '#222' }}>
          3. Data Security
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '30px', color: '#222' }}>
          4. Sharing Your Information
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with trusted third parties to facilitate services, such as payment processors and shipping partners, as necessary to fulfill your orders.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '30px', color: '#222' }}>
          5. Your Rights
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          You have the right to access, correct, or delete your personal information. You may also withdraw your consent to processing your data at any time. For any requests regarding your personal data, please contact us at the details below.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '30px', color: '#222' }}>
          6. Contact Us
        </h2>
        <p style={{ fontSize: '1.2rem' }}>
          If you have any questions or concerns regarding this Privacy Policy, please reach out to us at:
        </p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Email: <a href="mailto:swayamrana808@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>swayamrana808@gmail.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
