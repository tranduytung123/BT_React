import React, { useState } from "react";
import PropTypes from "prop-types";

Form.propTypes = {};

function Form(props) {
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: "new",
  });

  const handleChangeFile = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeForm = (e) => {
    // prevent page reload
    e.preventDefault();

    // Valid felds

    localStorage.setItem("data", JSON.stringify(formValue));

    // navigate to "/taskList" (Home page)
  };


    return (
        <form onSubmit={handleChangeForm}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={formValue.title}
          onChange={handleChangeFile}
        ></input>
        <label>Author: </label>
        <input
          type="text"
          name="author"
          value={formValue.author}
          onChange={handleChangeFile}
        ></input>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={formValue.description}
          onChange={handleChangeFile}
        ></input>
        <button type="submit">Save</button>
      </form>
    );
}

// function Form({formClass, handeSubmit}) {
//     const [title, setTitle] = useState('');
//     const [creator , setCreator] = useState('');
//     const [description,setDescription] = useState ('');
//     return (
//         <form onSubmit={handeSubmit} className={`formClassContainer ${formClass}`}>
//             <InputText
//                 label={'Title'}
//                 placeholder={'Type title'}
//                 name={'title'}
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//             />

//             <InputText
//                 label={'Creator'}
//                 placeholder={'Name of Creator'}
//                 name={'creator'}
//                 value={creator}
//                 onChange={(e) => setCreator(e.target.value)}
//             />

//             <InputText
//                 label={'Description'}
//                 placeholder={'Description Details'}
//                 name={'description'}
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//             />

//             <div>
//                 <Button title={'Save'} type={'submit'} />
//             </div>
//         </form>
//     );
// }



export default Form;