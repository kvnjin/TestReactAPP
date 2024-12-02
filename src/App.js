import './App.css';
import Title from './Title';
import Counter from './components/Counter';
import CounterContainer from './components/CounterContainer';
import { useState } from 'react';
import InputComponent from './components/InputComponent';

function App() {

  const [limitValue, setLimitValue] = useState(5)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(10)

  

  const appInfo = {
    appName: 'mon app',
    message: 'Mon Compteur'
  }
  
  const countConstant = {
    limitValue: limitValue,
    minValue: minValue,
    maxValue: maxValue
  }

  // const onChangeLimiteValueInput = (e) => {
  //   setLimitValue(e.target.value)
  // }
  // const onChangeMinValueInput = (e) => {
  //   setMinValue(e.target.value)
  // }
  // const onChangeMaxValueInput = (e) => {
  //   setMaxValue(e.target.value)
  // }


  return (
    <div className="App">

      <Title myMessage = {appInfo.message}></Title>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className='inputComponentContainer'>
      <InputComponent title='Limite Value' onChangeHandler={setLimitValue}></InputComponent>
      <InputComponent title='Max Value' onChangeHandler={setMaxValue}></InputComponent>
      <InputComponent title='Min Value' onChangeHandler={setMinValue}></InputComponent>
      </div>
      <CounterContainer>
        <Counter {...countConstant}></Counter>
      </CounterContainer>
      
      
      
    </div>
  );
}

export default App;
