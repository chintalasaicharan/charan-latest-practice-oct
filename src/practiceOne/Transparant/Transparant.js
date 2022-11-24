import React, { useState } from 'react'

export const Transperant = () => {
    const [state, setState] = useState();
    const [transparant, setTransparant] = useState();

    const handleTransperant = (e) => {
        console.log(e.target.value);
        setState(e.target.value);
        console.log("statezssssss",state)
    }

 const handleNumbers = (evt) => {
        var charCode = (evt.which) ? evt.which : evt.keycode;
        // console.log(charCode)
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            evt.preventDefault();

        }
    }

    const handleShowTransperant = (e) => {
        e.preventDefault();
     
        let divs = state % 100;
        console.log("first",divs);
        let div1 = Math.floor(state / 100);
        console.log("second",div1);
        let add = divs + div1;
        console.log("adding",add);
        let mult = add * add;
        console.log("mul value", mult);
        setTransparant(mult);
        console.log("transper", transparant);
        // if(state==mul){
        //     console.log('transperant number');
        // }
        // else{
        //     console.log('not a transperant number');
        // }
        // setState('');
    }
    return (
        <div className='container'>
            <div className="row">
                    <p className='h3 text-danger'>Transperant Number </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <label htmlFor="num">Enter a Number :</label>
                        <input type="text" value={state} onChange={handleTransperant}  onKeyPress={handleNumbers}/> &nbsp;
                        <input type="submit" onClick={handleShowTransperant} />
                    </div>
                </div>
            </div>
            <p>{state}</p>
            <p>{transparant}</p>
            <p>
                {
                    state == transparant ? <p>transparant number</p> : <p>not trans</p>
                }
            </p>
        </div>
    );
}
