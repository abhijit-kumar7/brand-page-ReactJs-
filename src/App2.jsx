import React, { useEffect, useState } from 'react';

const App2 = () => {
  const [data, setData] = useState({ results: [] }); // Initialize with the expected structure

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await fetch('https://nekos.best/api/v2/hug?amount=10');
        const result = await response.json();
        setData(result); // Update state with API response
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getImage();
  }, []);

  return (
    <>
      <div>
        <div>
          {/* Safely access results and check its length */}
          {data.results.length > 0 ? (
            <img src={data.results[0].url} alt="Biryani" />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
        <button onClick={() => console.log('Button clicked')}>Click me</button>
      </div>
    </>
  );
};

export default App2;
