import React, { useState } from 'react';
import Taps from './components/Taps';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
    
    
function App() {
  const [taps, setTaps] = useState([
    {lable: "Tab 1", content: "Tap 1 content is showing here"},
    {lable: "Tab 2", content: "Tap 2 content is showing here"},
    {lable: "Tab 3", content: "Tap 3 content is showing here"}]);
  const [index, setIndex] = useState();
  
  return (
      <div>
        <Taps taps={taps} setTaps={setTaps} index={index} setIndex={setIndex}/>
        <Display msg={index} />
      </div>
  );
}
    
export default App;
