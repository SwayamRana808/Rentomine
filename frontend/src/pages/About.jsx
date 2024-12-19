import React from 'react';

const About = () => {
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
      <section id="about-us" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#222' }}>
          About Us
        </h1>
        <p style={{ fontSize: '1.2rem' }}>
          Welcome to <strong>Rentomine</strong>, your go-to platform for renting and selling stylish clothing. We are revolutionizing the way people access fashion by making it more sustainable, affordable, and accessible. Whether you’re looking to rent a glamorous outfit for a special occasion or sell pre-loved clothing, Rentomine connects you with a vibrant community of fashion enthusiasts.
        </p>
        <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
          At <strong>Rentomine</strong>, our mission is to redefine fashion consumption and promote sustainability by extending the lifecycle of garments. By choosing Rentomine, you’re not just upgrading your wardrobe—you’re also making a positive impact on the environment by reducing waste and encouraging reuse.
        </p>
      </section>
    </div>
  );
};

export default About;
