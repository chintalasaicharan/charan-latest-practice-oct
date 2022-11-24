import React, { useState } from "react";

export const TrimValue = () => {
    const [state, setState] = useState("");

    const handleTrimChange = (e) => {
        console.log(e.target.value);
        setState(e.target.value.trim());
    };
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-5">
                        <div className="mb-3">
                            <input type="text" name="Textbox" placeholder="Password" value={state} onChange={handleTrimChange} />
                            <div className="text-success">You entered trim the string value is:{state}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


