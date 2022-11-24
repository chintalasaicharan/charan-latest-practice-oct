import React, { useState } from 'react'

export const DolorToIndiaRupee = () => {

    const [state, setState] = useState(
    //     {
    //     currency: '',
    // }
    '');
    const [state1, setState1] = useState();

    // let { currency } = state;

    const changeValue = (e) => {
        // setState((state) => ({
        //     currency: {
        //         ...state.currency,
        //         [e.target.name]: e.target.value,
        //     }
        // }))
        setState( e.target.value );
        console.log(state);


    }

    const valueSub = (e) => {
        e.preventDefault();
        console.log(state);
        let sum = parseInt(state) * 80;
        setState1(sum);
        console.log(sum);

        // if(state.currency !== "^[1-9]\d*$"){
        //     console.log("not a number")
        // }
        // else{
        //     console.log('nu,ber')
        // }
    }
    const clearChange = () => {
        setState('');
        setState1('');
    }

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5">

                        <div className='mb-3'>
                            <div className='mb-3'>
                                <div>
                                    <label htmlFor="dolor">Rupees $</label>
                                </div>


                                <input type="text" value={state} onChange={changeValue} />
                            </div>
                            {state1}

                            <div>
                                <input type="submit" onClick={valueSub} />
                                &nbsp;
                                <button onClick={clearChange}>clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
