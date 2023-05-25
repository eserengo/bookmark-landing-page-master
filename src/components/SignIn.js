import Button from './Button.js';

const SignIn = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const [isEmailValidated, setIsEmailValidated] = React.useState();
  const [isPasswordValidated, setIsPasswordValidated] = React.useState();

  const emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const passwordRegEx = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;

  React.useEffect(() => {
    
    document.querySelector('.email-group').querySelector('.error') ?
      (
        emailRef.current.classList.contains('validated') && emailRef.current.classList.remove('validated'),
        emailRef.current.classList.add('not__validated')
      )
      : document.querySelector('.email-group').querySelector('.success') ?
        (
          emailRef.current.classList.contains('not__validated') && emailRef.current.classList.remove('not__validated'),
          emailRef.current.classList.add('validated')
        )
        :
        null;
    
    document.querySelector('.password-group').querySelector('.error') ?
      (
        passwordRef.current.classList.contains('validated') && passwordRef.current.classList.remove('validated'),
        passwordRef.current.classList.add('not__validated')
      )
      : document.querySelector('.password-group').querySelector('.success') ?
        (
          passwordRef.current.classList.contains('not__validated') && passwordRef.current.classList.remove('not__validated'),
          passwordRef.current.classList.add('validated')
        )
        :
        null;

  }, );

  const handleSubmit = (event) => {
    event.preventDefault();
    emailRef.current.value.match(emailRegEx) ? setIsEmailValidated(true) : setIsEmailValidated(false);
    passwordRef.current.value.match(passwordRegEx) ? setIsPasswordValidated(true) : setIsPasswordValidated(false);
  };


  const proceedHome = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', '/Frontendmentor.io/bookmark-landing-page-master/');
    window.location.pathname = '/Frontendmentor.io/bookmark-landing-page-master/';
  };

  return (
    <div className='signin vw-100 vh-100 d-flex justify-content-center align-items-center'>
      <ReactBootstrap.Card className=''>
        <ReactBootstrap.Card.Body className=''>
          <ReactBootstrap.Card.Title className='text-uppercase'>sign in</ReactBootstrap.Card.Title>
          <ReactBootstrap.Form className='d-flex flex-column justify-content-center align-items-center'>
            <ReactBootstrap.Form.Group className='email-group'>
              <ReactBootstrap.Form.Label htmlFor={emailRef.current} className=''>Email</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control ref={emailRef} type='email' className='px-3 py-2' autoComplete='off' />
              {isEmailValidated && <ReactBootstrap.Form.Text className='success ms-1'>Accepted</ReactBootstrap.Form.Text>}
              {(!isEmailValidated && emailRef.current != null) && <ReactBootstrap.Form.Text className='error ms-1'>Please enter a valid email</ReactBootstrap.Form.Text>}
            </ReactBootstrap.Form.Group>
            <ReactBootstrap.Form.Group className='password-group mt-3'>
              <ReactBootstrap.Form.Label htmlFor={passwordRef.current} className=''>Password</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control ref={passwordRef} type='password' className='px-3 py-2' autoComplete='off' />
              {isPasswordValidated && <ReactBootstrap.Form.Text className='success ms-1'>Accepted</ReactBootstrap.Form.Text>}
              {(!isPasswordValidated && passwordRef.current != null) && <ReactBootstrap.Form.Text className='error ms-1'>Please enter a valid password</ReactBootstrap.Form.Text>}
            </ReactBootstrap.Form.Group>
            {
              (isEmailValidated && isPasswordValidated) ?
                <Button variant='primary' className='text-uppercase px-5 py-2 mt-4 mb-2' content='proceed' onClick={(event) => proceedHome(event)} />
                :
                <Button variant='primary' className='text-uppercase px-5 py-2 mt-4 mb-2' content='sign in' onClick={(event) => handleSubmit(event)} />
            }
          </ReactBootstrap.Form>
        </ReactBootstrap.Card.Body>
      </ReactBootstrap.Card>
    </div>
  );
}

export default SignIn;