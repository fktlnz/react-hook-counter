import { useEffect, useState } from "react";

//10秒⇒0秒のカウントダウンがデフォルト
const UPLIMIT = 10;
const DOWNLIMIT = 0;
const DIRECTION = "down";

const useCounter = () => {
    const [timeEnd, setTimeEnd] = useState(0);
    const [direction, setDirection] = useState("down");
    const [count, setCount] = useState(0);
    const [timerFlag, setTimerFlag] = useState(false);
    const [isTimerEnd, setIsTimerEnd] = useState(false);

    useEffect(() => {
      if (timerFlag) {
        const id = setTimeout(() => {
          setCount((beforecount) => {
            console.log('timer・・・')
            if(direction==="up"){
              if(beforecount===timeEnd-1) {
                setTimerFlag(false);
                setIsTimerEnd(true);
                return (beforecount + 1);
              }
              if(beforecount<timeEnd){
                return (beforecount + 1);
              }
              return beforecount;
            }else{
              if(beforecount===timeEnd+1) {
                setTimerFlag(false);
                setIsTimerEnd(true);
                return (beforecount - 1);
              }
              if(beforecount>timeEnd){
                return (beforecount - 1);
              }
              return beforecount;
            }
          });
        }, 1000);
        return () => clearTimeout(id);
      }
      return;
    },[count, timerFlag]);

    //開始時間セット
    const setStart = (upLimit:number, downLimit:number, direction:string) => {
      const start = (direction==="up") ? downLimit : upLimit;
      setCount(start);
    }

    //終了時間セット
    const setEnd = (upLimit:number, downLimit:number, direction:string) => {
      const end = (direction==="up") ? upLimit : downLimit;
      setTimeEnd(end);
    }

    //タイマースタート
    const startCount = (upLimit:number=UPLIMIT, downLimit:number=DOWNLIMIT, direction:string=DIRECTION) => {
      console.log('start count');
      setStart(upLimit, downLimit, direction);//開始時間セット
      setEnd(upLimit, downLimit, direction);//終了時間セット
      setDirection(direction);//カウントアップ("up") or カウントダウン("down")をセット
      setIsTimerEnd(false);//カウント終了フラグをfalse
      setTimerFlag(true);//タイマー開始
    };

    const initCount = () => {
      console.log('init count!');
      setIsTimerEnd(false);
      setCount(0);
    }

    return { count, isTimerEnd , initCount, startCount };
};

export default useCounter;