import { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [createUrl, setCreateUrl] = useState('');
  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#33FFFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    linkContainer: {
      marginTop: '10px',
    },
    link: {
      color: '#33CCFF',
      textDecoration: 'none',
    },
    h1: {
      color:'#33CCFF'
    }
  };
  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:5050/api/payment/create', {
        total: 100.00,
        currency: 'USD',
        method: 'paypal',
        intent: 'sale',
        description: 'Test payment',
        redirectUrls: {
          // The configuration path is automatically returned  
          returnUrl: "http://localhost:3000", 
          cancelUrl: "http://localhost:3000" 
        }
      });

      //Save url at State
      const url = response.data; 
      setCreateUrl(url);

      // Redirect to PayPal
      window.location.href = url; 

    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  return (
    <div style={styles.container}>
        <h1 style={styles.h1}>Vu Trung Nghia</h1>
      <button style={styles.button} onClick={handleCreate}>Buy with PayPal</button>
      {/* Show link */}
      {createUrl && ( 
        <div style={styles.linkContainer}> <p>Click the link to complete payment:</p>
          <a href={createUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>{createUrl}</a>
        </div>
      )}
    </div>
  );
};



export default Checkout;
