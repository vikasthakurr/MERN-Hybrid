import React, { useState, useEffect } from 'react';
import Card from './Card';
import Skelton from './Skelton';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? <Skelton /> : <Card />}
    </div>
  );
};

export default App;
