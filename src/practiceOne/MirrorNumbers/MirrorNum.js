import React, { useState } from 'react'
export const MirrorsNum = () => {
    const [state, setState] = useState({
        input: '',
    });
    const [mirror, setMirror] = useState('');
    const [mirror1, setMirror1] = useState('');
    const handleChangeMirror = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleNumber = (evt) => {
        var charCode = (evt.which) ? evt.which : evt.keycode;
        // console.log(charCode)
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            evt.preventDefault();
        }
    }
    console.log(state.input);
    const { input } = state;
    const handleMirrors = (e) => {
        e.preventDefault();
        console.log(state.input);
        let num = input;
        console.log("123", num);
        let sum = 0, sum2 = 0;
        for (let i = 1; i < num; i++) {
            // console.log(num);
            if (num % i == 0) {
                sum = sum + i;
            }
        }
        console.log("sum123", sum)
        setMirror({ sum });
        console.log("mirr", mirror)

        for (let j = 1; j < sum; j++) {
            if (sum % j == 0) {
                sum2 = sum2 + j;
            }
        } console.log("sum2..", sum2);
        setMirror1({ sum2 })
        console.log("mirr1", mirror1)
        console.log("inp", input);
        // if (sum2 == num) {
        //     console.log("its mirror nums")
        // } else {
        //     console.log("not mirrors")
        // }
        // // state = num;
        // setState('');
    }
    return (
        <div>
            <div className='container'>
                <p>enter 28 its mirror</p>
                <div className="row">
                    <div className="col">
                        <p className='h3 text-success'>Mirror Number </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <label htmlFor="num">Mirror Number :</label>
                            <input type="text" name='input' value={state.input} onKeyPress={handleNumber} onChange={handleChangeMirror} /> &nbsp;
                            <input type="submit" onClick={handleMirrors} />
                        </div>
                    </div>
                    {/* {state.input} */}
                    <p>{mirror.sum}</p>
                    <p>{mirror1.sum2}</p>
                    <p>
                        {
                            mirror1.sum2 == state.input ? <p>mirror numbers</p> : <p>not mirrors</p>
                        }
                    </p>

                </div>
            </div>
        </div>
    );
}
