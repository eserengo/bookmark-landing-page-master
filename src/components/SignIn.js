import Button from './Button.js';

const SignIn = () => {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const checkboxRef = React.useRef(null);

  const reducer = (state, action) => {
    switch (action.type) {
      case 'validateEmail': {
        return {
          ...state,
          isEmailValidated: true,
        };
      }
        break;

      case 'validatePassword': {
        return {
          ...state,
          isPasswordValidated: true,
        };
      }
        break;
      
      case 'checkboxChecked': {
        return {
          ...state,
          isCheckboxChecked: true,
        };
      }
      
      default:
        return {
          ...state,
        };
        break;
    }
  }

  const initialState = {
    isEmailValidated: false,
    isPasswordValidated: false,
    isCheckboxChecked: false,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const passwordRegEx = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;

  React.useEffect(() => {
    document.querySelectorAll('.error').forEach(item => {
      item.parentElement.querySelector('input').classList.contains('validated') && item.parentElement.querySelector('input').classList.remove('validated');
      item.parentElement.querySelector('input').classList.add('not__validated');
    });

    document.querySelectorAll('.success').forEach(item => {
      item.parentElement.querySelector('input').classList.contains('not__validated') && item.parentElement.querySelector('input').classList.remove('not__validated');
      item.parentElement.querySelector('input').classList.add('validated');
    });
  }, );

  const handleSubmit = (event) => {
    event.preventDefault();
    emailRef.current.value.match(emailRegEx) ? dispatch({ type: 'validateEmail' }) : dispatch({});
    passwordRef.current.value.match(passwordRegEx) ? dispatch({ type: 'validatePassword' }) : dispatch({});
    checkboxRef.current.checked ? dispatch({ type: 'checkboxChecked' }) : dispatch({});
  };

  const goHome = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', '/Frontendmentor.io/bookmark-landing-page-master/');
    window.location.pathname = '/Frontendmentor.io/bookmark-landing-page-master/';
  };

  return (
    <div className='signin__page vw-100 vh-100 d-flex justify-content-center align-items-center'>
      <ReactBootstrap.Card>
        <ReactBootstrap.Card.Body>
          <ReactBootstrap.Image className='icon float-end mt-1' alt='close icon' src='./src/images/icon-close.svg' onClick={(event) => goHome(event)} />
          <ReactBootstrap.Card.Title className='text-uppercase'>sign in</ReactBootstrap.Card.Title>
          <ReactBootstrap.Form className='d-flex flex-column justify-content-center align-items-center'>
            <ReactBootstrap.Form.Group className='email__group w-100 position-relative'>
              <ReactBootstrap.Form.Label htmlFor={emailRef.current}>Email</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control ref={emailRef} type='email' className='px-3 py-2' name='email' autoComplete='off' />
              { state.isEmailValidated && <ReactBootstrap.Form.Text className='success ms-1'>Accepted</ReactBootstrap.Form.Text> }
              { !state.isEmailValidated && emailRef.current != null && <ReactBootstrap.Form.Text className='error ms-1'>Please enter a valid email</ReactBootstrap.Form.Text> }
              { !state.isEmailValidated && emailRef.current != null && <ReactBootstrap.Image className='error icon position-absolute' alt='error icon' src='./src/images/icon-error.svg' /> }
            </ReactBootstrap.Form.Group>
            <ReactBootstrap.Form.Group className='password__group w-100 mt-3 position-relative'>
              <ReactBootstrap.Form.Label htmlFor={passwordRef.current}>Password</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control ref={passwordRef} type='password' className='px-3 py-2' name='password' autoComplete='off' />
              { state.isPasswordValidated && <ReactBootstrap.Form.Text className='success ms-1'>Accepted</ReactBootstrap.Form.Text> }
              { !state.isPasswordValidated && passwordRef.current != null && <ReactBootstrap.Form.Text className='error ms-1'>Please enter a valid password</ReactBootstrap.Form.Text>}
              { !state.isPasswordValidated && passwordRef.current != null && <ReactBootstrap.Image className='error icon position-absolute' alt='error icon' src='./src/images/icon-error.svg' /> }
            </ReactBootstrap.Form.Group>
            <ReactBootstrap.Form.Group className='checkbox__group w-100 mt-3 position-relative'>
              <ReactBootstrap.Form.Check ref={checkboxRef} type='checkbox' className='m-0 p-0' name='checkbox' label='I accept Terms and Conditions' />
              { state.isCheckboxChecked && <ReactBootstrap.Form.Text className='success ms-1'>Accepted</ReactBootstrap.Form.Text> }
              { !state.isCheckboxChecked && checkboxRef.current != null && <ReactBootstrap.Form.Text className='error ms-4'>Please accept Terms and Conditions</ReactBootstrap.Form.Text>}
              { !state.isCheckboxChecked && checkboxRef.current != null && <ReactBootstrap.Image className='error icon position-absolute' alt='error icon' src='./src/images/icon-error.svg' /> }
            </ReactBootstrap.Form.Group>
            { state.isEmailValidated && state.isPasswordValidated && state.isCheckboxChecked ? <Button variant='primary' className='text-uppercase px-5 py-2 mt-4 mb-2' content='return home' onClick={(event) => goHome(event)} /> : <Button variant='primary' className='text-uppercase px-5 py-2 mt-4 mb-2' content='sign in' onClick={(event) => handleSubmit(event)} /> }
          </ReactBootstrap.Form>
        </ReactBootstrap.Card.Body>
      </ReactBootstrap.Card>
    </div>
  );
}

export default SignIn;