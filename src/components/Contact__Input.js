import Button from "./Button";

const Contact__Input = () => {
  const emailRef = React.useRef(null);
  const emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const [isValidated, setIsValidated] = React.useState();

  const handleSubmit = () => {
    emailRef.current.value.match(emailRegEx) ? setIsValidated(true) : setIsValidated(false);
  };

  React.useEffect(() => {
    document.querySelector('.error') && (
      document.querySelector('.error').parentElement.classList.remove('validated'),
      document.querySelector('.error').parentElement.classList.add('not__validated'),
      document.querySelector('.error').parentElement.querySelector('input').classList.remove('validated'),
      document.querySelector('.error').parentElement.querySelector('input').classList.add('not__validated')
    );

    document.querySelector('.success') && (
      document.querySelector('.success').parentElement.classList.remove('not__validated'),
      document.querySelector('.success').parentElement.classList.add('validated'),
      document.querySelector('.success').parentElement.querySelector('input').classList.remove('not__validated'),
      document.querySelector('.success').parentElement.querySelector('input').classList.add('validated')
    );
  }, );

  return (
    <div className='col-12 d-flex flex-column flex-sm-row justify-content-sm-center'>
      <div className='contact__group position-relative rounded-1'>
        <input ref={emailRef} type='email' className='w-100 px-3 p-2 rounded-1' name='email' placeholder='Enter your email adress' autoComplete='off' />
        <br />
        { isValidated && <em className='success ms-1'>Thank you!</em> }
        { emailRef.current != null && !isValidated && <em className='error ms-1'> Whoops, make sure it’s an email</em> }
        { emailRef.current != null && !isValidated && <ReactBootstrap.Image className='error icon position-absolute' alt='error icon' src='./src/images/icon-error.svg' /> }
      </div>
      <Button variant='danger' className='link px-3 py-2 my-3 mb-sm-0 ms-sm-3' content='Contact Us' onClick={() => handleSubmit()} />
    </div>
  )
};

export default Contact__Input;