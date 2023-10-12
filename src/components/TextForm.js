//Shortcut of template - rfc
import React, { useState } from "react"; //react Hooks added during Tut07
import copy from "copy-to-clipboard";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const[wordCount, setWordCount]=useState(0); //Added to solve word Count...
  const[charCount, setCharCount]=useState(0);

  const handleOnChange = (event) => {
    //This will be fired when something will be written inside text-area as we have set onChange in it
    // console.log("On Change");
    setText(event.target.value); //This will set text whatever we will make changes without refresh..

    //for word count
    let a=event.target.value.split(/[ ]+/);
    let b=a.join(" ");
    let c=b.split(/\s+/);
    if(event.target.value === ""){
      setWordCount(0);
    }
    else if (event.target.value !== "" && event.target.value[event.target.value.length-1]===" "){
    setWordCount((c.length)-1);
    }
    else{
      setWordCount(c.length);
    }

    //for char count
    setCharCount(event.target.value.replaceAll(" ", '').length);
  }
  const handleUpClick = () => {
    //This will be fired when Convert to uppercase button will be clicked as we have written this function in onClick  of button
    // console.log("UpperCase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handleLowClick = () => {
    //This will be fired when Convert to uppercase button will be clicked as we have written this function in onClick  of button
    // console.log("UpperCase was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleClearClick = (event) => {
    let newText = ('');
      props.showAlert("Text Cleared", "warning")
    setText(newText);
    // props.showAlert("Cleared Text-Box","warning")
  };
  const handleCopyClick = (event) => {
    copy(text.toString());
    props.showAlert("Copied to Clipboard", "success")
  };
  const extraSpace = (event) => {  // Picked via Code With Harry Tut Comment 
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success")
  };
  const SentenceCaseClick = (event) => {
    let newText = text.toLowerCase().charAt(0).toUpperCase() + text.toLowerCase().slice(1);
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success")
  };
  const CapitaliseCaseClick = (event) => {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    let newText = words.join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalise Case", "success");
  };
  return (
    <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <div className="form-group">
        <h3>{props.textHeading}</h3>
        <textarea className="form-control" value={text} placeholder="Enter Your Text" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(67 68 71)', color: props.mode === 'light' ? '#757b82' : 'white' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${ props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={handleUpClick}>
        Convert to UpperCase 
      </button>
      <button disabled={text.length===0} className={`btn btn-${ props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button disabled={text.length===0} className={`btn btn-${ props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={handleClearClick}>
        Clear Text
      </button>
      <button disabled={text.length===0} className={`btn btn-${ props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={handleCopyClick}>
        Copy Text
      </button>
      <button disabled={text.length===0} className={`btn btn-${ props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={SentenceCaseClick}>
        Sentence Case
      </button>
      <button disabled={text.length===0} className={`btn btn-${ props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={CapitaliseCaseClick}>
        Capitalise Case
      </button>
      <button disabled={text.length===0} className={`btn btn-${ props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={extraSpace}>
        Remove Extra Spaces
      </button>


      <div className="my3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h3>Your Input Summary:</h3>
        <p>
          {/* Words: {text.split(" ").length} & Characters: {text.length} */}
          Words: {wordCount} <br/> Characters with space: {charCount} <br /> Characters without space: {text.length}
        </p>
        <p>Average Time to Read: {text.length > 0? 0.008 * text.split(" ").length: 0} Minutes</p>
        <h3>Preview:</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = { textHeading: PropTypes.string };
