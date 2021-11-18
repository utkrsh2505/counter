import React from "react";

function Button(props) {
  return (
    <button onClick={props.onSelect} onDoubleClick={props.double}>
      {props.btn_name}{" "}
    </button>
  );
}

export default Button;
