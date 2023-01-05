import React, { useState } from 'react'

export const NotRepeatString = () => {
    const [state, setState] = useState();
    const [state1, setState1] = useState();
    const handleRemoveString = (e) => {
        setState(e.target.value);
        // console.log(state);
    }
    const handleShowRemove = (e) => {
        e.preventDefault();
        let count = 0;
        let str = state;
        // console.log(str);
        let str1 = str.split(" ");
        console.log("11", str1);
        for (let i = 0; i < str1.length; i++) {
            // console.log(str1[i]);
            for (let j = 0; j < str1.length; j++) {
                if (str1[i] == str1[j]) {
                    count++;
                }
            }
            console.log(count);

            if (count == 1) {
                console.log('22', str1[i]);
                setState1(str1[i]);
            }
            count = 0;
        }
        setState('');
    }
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <p className='h3 text-success'>Remove Repeated String </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <label htmlFor="num">Enter String :</label>
                            <input type="text" value={state} onChange={handleRemoveString} /> &nbsp;
                            <input type="submit" onClick={handleShowRemove} />
                        </div>
                    </div>
                    {state1}
                </div>
            </div>
        </div>
    )
}
