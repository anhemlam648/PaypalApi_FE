import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
    },
    icon: {
      fontSize: '100px',
      color: 'green',
    },
    heading: {
      fontSize: '24px',
      margin: '20px 0',
    },
    message: {
      fontSize: '16px',
      margin: '10px 0',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/checkout')
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>✔️</div>
      <h1 style={styles.heading}>Payment Successful!</h1>
      <p style={styles.message}>
        Your payment has been processed successfully. Thank you for your purchase!
      </p>
      <button style={styles.button} onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
};

export default Success;
