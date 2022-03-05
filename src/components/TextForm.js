//  used rfc to get default function
import React, { useState } from 'react'

export default function TextForm(props) {
    const handlerUpClick = () => {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted to uppercase", "success")
    }

    const handlerLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text is converted to lowercase", "success")
    }

    const handlerOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Space", "success")
    }
    const [text, setText] = useState("");
    // setText("right way to change the text");
    return (
        <>
            <div className={`m-5 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"> {props.label}</label>
                    <textarea className="form-control" id="myBox" value={text} onChange={handlerOnChange} rows="8" placeholder="Enter your text here"></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-primary' : 'primary'} m-3`} onClick={handlerUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-primary' : 'primary'} m-3`} onClick={handlerLowClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-primary' : 'primary'} m-3`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'outline-primary' : 'primary'} m-3`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>


            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'black' : 'white'}`}>
                <h1> Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Your Text In Box Above To Preview Here"}</p>
            </div>
        </>
    )
}
