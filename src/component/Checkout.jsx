import { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [paymentId, setPaymentId] = useState('');
  const [payerId, setPayerId] = useState('');
  const [createUrl, setcreateUrl] = useState(''); // Thêm state để lưu URL

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://localhost:5050/api/payment/create', {
        total: 100.00,
        currency: 'USD',
        method: 'paypal',
        intent: 'sale',
        description: 'Test payment',
        redirectUrls: {
          returnUrl: "http://localhost:5050/api/payment/execute",
          cancelUrl: "http://localhost:5050/api/payment/cancel"
        }
      });

      // Lưu URL vào state
      const url = response.data;
      setcreateUrl(url);

      // Hiển thị URL
      console.log('Approval URL:', url);
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

//   const handleExecutePayment = async () => {
//     if (!paymentId || !payerId) {
//       console.error('Payment ID or Payer ID is missing');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5050/api/payment/execute', null, {
//         params: {
//           paymentId,
//           payerId
//         }
//       });
//       console.log('Payment executed:', response.data);
//       window.location.href = '/success'; // Redirect to success page
//     } catch (error) {
//       console.error('Error executing payment:', error);
//     }
//   };

  return (
    <div>
      <button onClick={handleCreate}>Pay with PayPal</button>
      {createUrl && (
        <div>
          <p>Click the link to complete your payment:</p>
          <a href={createUrl} target="_blank" rel="noopener noreferrer">{createUrl}</a>
        </div>
      )}
    </div>
  );
};

export default Checkout;
