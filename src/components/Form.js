import Button from './Button.js';

const Form = (props) => {
  const emailRef = React.useRef(null);

  const HandleSubmit = (event) => {
    event.preventDefault();
    const RegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const target = emailRef.current;
    target.parentElement.querySelectorAll(".error, .success").forEach(item => { item.remove() });
    if (target.value === "") {
      target.parentElement.insertAdjacentHTML("beforeend", `<span class="message error"><i class="fa fa-exclamation-circle error"></i> Email address cannot be empty.</span>`);
      target.classList.contains("valid") ? (target.classList.remove("valid"), target.classList.add("invalid")) : target.classList.add("invalid");
    } else if (!target.value.match(RegEx)) {
      target.parentElement.insertAdjacentHTML("beforeend", `<span class="message error"><i class="fa fa-exclamation-circle error"></i> Please enter a valid email adress.</span>`);
      target.classList.contains("valid") ? (target.classList.remove("valid"), target.classList.add("invalid")) : target.classList.add("invalid");
    } else {
      target.parentElement.insertAdjacentHTML("beforeend", `<span class="message success"><i class="fa fa-check-circle success"></i> Accepted.</span>`);
      target.classList.contains("invalid") ? (target.classList.remove("invalid"), target.classList.add("valid")) : target.classList.add("valid");
    }
  }

  return (
    <form id={props.form} className='form-action flex' action='#' method='POST' noValidate onSubmit={HandleSubmit} >
      <label htmlFor={emailRef.current} className='label' form={props.form}></label>
      <input ref={emailRef} type='email' className='input' form={props.form} autoComplete='off' placeholder={props.placeholder} required />
      <Button type='submit' className='primary button selectable' form={props.form} content={props.button} />
    </form>
  )
};

export default Form;