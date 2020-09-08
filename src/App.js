import React, { useState, useEffect } from 'react';

import Test from './test';

function App() {
  const [isShowed, setIsShowed] = useState(true)
  const [dataState, setDataState] = useState(null)
  useEffect(() => {
    const data = localStorage.getItem('adri')
    const parsedData = JSON.parse(data)
    setDataState(parsedData)
  }, [])
  return (
    <div className="App">
      {isShowed && <Test data={dataState} />}
      <div onClick={() => setIsShowed(!isShowed)}>Abre</div>
    </div>
  );
}

export default App;
