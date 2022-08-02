import React from "react";
import "./styles.scss";

function Button( {buttonClass,title,style,onClick,type}) 
{
  return(
    <div
    className={`buttonClass ${buttonClass}`}
    style={style}
    onClick={onClick}
    type={type}
    >
      <Button className="btn">{title}</Button>
    </div>
  )
}

export default Button;

// import React from 'react';
// import PropTypes from 'prop-types';

// InputText.propTypes = {
    
// };

// function InputText({inputClass,label,placeholder,name,value,onChange}) {
//     return (
//         <div className={`inputText ${inputClass}`}>
//             <label htmlFor={name} > {label} </label>
//             <input
//                 name={name}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onChange}
//             />
//         </div>
//     );
// }

// export default InputText;