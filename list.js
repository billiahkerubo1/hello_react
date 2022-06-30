import React from 'react';
import ReactDOM from 'react-dom';
  
const numbers = [2,4,6,8,10];
  
const updatedNums = numbers.map((number)=>{
    return <li>{number}</li>;
});
  
ReactDOM.render(
    <ul>
        {updatedNums}
    </ul>, 
    document.getElementById('root')
);
