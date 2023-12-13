import React from "react";

type Props = {
    changeColours: (str: string) => void
}

export default function InputContainer({ changeColours }: Props) {
  const [val, setVal] = React.useState("");
  const [err, setErr] = React.useState("");

  function handleSubmit(){
    // validate regex
    if(!val.match(/^[GRY]*$/)){
        setErr("Input can only contain uppercase letters 'G', 'R', or 'Y'");
        return;
    } 

    // validate string length
    if(val.length !== 9) {
        setErr("Input must be exactly 9 characters long")
        return;
    }

    changeColours(val);
    setErr('');
  }

  return (
    <div className="input-con">
        <div>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="err-con">
          <p>{err}</p>
        </div>
    </div>
  );
}
