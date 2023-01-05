import { dividerClasses } from '@mui/material';
import React, { useState } from 'react'

const Increment = () => {

const[data,setData]=useState(0);

   const incremet=()=>{

    setData(data+1)
   }

  return (
    <div>

<button onClick={incremet}> click button</button>
{data}
    </div>
  )
};

export default Increment;