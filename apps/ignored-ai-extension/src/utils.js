export const sendDataToBackend = async (data) => {
    try {
      const response = await fetch('https://your-backend-api.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send data');
      }
  
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };
  