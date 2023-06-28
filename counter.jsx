import { useState } from "react";

const Counter = () => {
    const[count, setCount] =useState(0)

    

     const countHander =  () => {
         setCount(conut + 1)
     };
     
     const countHander2 =  () => {
        setCount(conut-count)
    };
      const countHander3 =  () => {
        setCount(conut - 1)
    };

    return(
        <div>
            <button onClick={countHandler}> Add </button>
         <button onClick={countHandler3}>Subtract</button>
         <button onClick={countHandler2}>Reset</button>
        </div>
    )
};

export default Counter;