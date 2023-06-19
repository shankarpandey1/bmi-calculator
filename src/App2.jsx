import {useState} from 'react';
import Header from './components/Header';
import './app.scss';
import Result2 from './components/Result2';
import BmiForm2 from './components/BmiForm2';


function App2() {
  
const [state, setState] = useState({
    height: "",
    weight: "",
    result: "",
});


  return (
    <div class="container">
     
      <Header />
      <BmiForm2 
     
      state = {state}
      setState = {setState}
      
      />

       <Result2
       state = {state}
       />
      
    </div>
  );
}

export default App2;
