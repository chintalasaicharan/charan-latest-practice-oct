import React,{useState} from 'react';
import ButtonPropChild from './ButtonPropChild';

const ButtonPropParent = () => {
    const [state,setState]=useState(0);
    const handleClick=(e)=>{
        e.preventDefault();
        let add=state+1;
        setState(add);
        console.log("HH",state);
    }
  return (
    <div>ButtonPropParent
        <ButtonPropChild handleButton={handleClick} />
        {state}
    </div>
  )
}

export default ButtonPropParent;