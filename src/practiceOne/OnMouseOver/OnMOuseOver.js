import { bgcolor } from '@mui/system';
import React, { useState } from 'react'

export const OnMouseOver = () => {
    // const [show, SetShow] = useState(false);
    const [state, SetState] = useState({
        colorCh: {
            color1: '',
            color2: '',
        }
    });

    const fieldColorHandle = (e) => {
        SetState({ ...state, color2: e.target.style.background='red' });
    }
    const clearColor=(event)=>{
        {
            SetState({...state,color2:event.target.style.background=''});

        }
    }
    const handleColorChange=(e)=>{
        {
            SetState({...state,color1:e.target.style.background='orange'})
        }
    }


    return (
        <div>
            <form>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-5">

                            <div className='mb-3'>
                                <label htmlFor="sss">Field 1 : </label>
                                <input type="text" onMouseOver={handleColorChange} onMouseLeave={clearColor}/>
                            </div>

                            <div>
                                <label htmlFor="sss">Field 2 : </label>
                                <input type="text" onMouseOver={fieldColorHandle} onMouseLeave={clearColor} name="color2"  />

                            </div>
                            {/* <button onMouseEnter={() => SetShow(true)}
                                onMouseLeave={() => SetShow(false)}>
                                hover

                            </button>
                            {
                                show && (
                                    <div>
                                        helloooooooooooooooo..........
                                    </div>
                                )

                            } */}

                        </div>
                    </div>
                </div>

            </form>

        </div>
    )
}
