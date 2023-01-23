import React from 'react';
import "./styles.css";

interface IInputTextProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string,
  showError?: boolean,
  errorMsg?: string,
}

function InputText(props: IInputTextProps) {
  return (
    <div className='InputTextContainer'>
      {props.showError && <span>{props.errorMsg}</span>}
      <input
        type="text"
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default InputText;