import React from 'react';
import './App.css';
import { useState } from 'react';
import useCounter from './useCounter'

const EndDom:React.VFC<{isShow:boolean}>= (props) => {
  if(props.isShow) { return <p className="color-red">カウント終了！</p> }
  return <></>
}

function App() {
  const {count, isTimerEnd, initCount, startCount} = useCounter();
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);

  const start = (startTime:number, endTime:number) => {
    const direction = (startTime>endTime) ? "down" : "up";
    const upLimit = (direction==="down") ? startTime : endTime;
    const downLimit = (direction==="down") ? endTime : startTime;

    startCount(upLimit, downLimit, direction)
  }

  const reset = () => {
    initCount();
  }

  const handleChangeStartTime = (e:React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(parseInt(e.target.value));
  }

  const handleChangeEndTime = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEndTime(parseInt(e.target.value));
  }

  return (
    <div className="App">
      <main>
        <section className='counter-input mb10'>
          <input onChange={(e)=>handleChangeStartTime(e)} type="text" placeholder='開始時間(sec)'/>
          <input onChange={(e)=>handleChangeEndTime(e)} type="text" placeholder='終了時間(sec)'/>
        </section>
        <section className='counter-button'>
          <button onClick={()=>start(startTime, endTime)} className='button mb10'>START</button>
          <button onClick={()=>reset()} className='button mb10' disabled={(isTimerEnd===true) ? false : true}>RESET</button>
        </section>
        <section className={(isTimerEnd===true) ? 'counter-value color-red' : 'counter-value'}>
          {count}
        </section>
        <EndDom isShow={isTimerEnd===true}/>
      </main>
    </div>
  );
}

export default App;
