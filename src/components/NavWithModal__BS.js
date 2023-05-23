const NavWithModal = () => {
  const [modal, setModal] = React.useState(false);
  const tags = []; 
  
  const List = (props) => { 
    return props.target.map((item, index) => <ReactBootstrap.Nav.Link as='li' key={`${props.hash}__${index}`} className={`list-group-item ${props.BS__options}`} >{item}</ReactBootstrap.Nav.Link>);
  }

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  }

  const Logo = () => (
    <ReactBootstrap.Navbar.Brand><ReactBootstrap.Image className='logo' alt='logo' src='./src/images/logo.svg' /></ReactBootstrap.Navbar.Brand>
  );

  return (
    <>
      <ReactBootstrap.Nav className='d-flex d-sm-none justify-content-between align-items-center'>
        {!modal &&
          <ReactBootstrap.Nav.Item>
            <Logo />
            <ReactBootstrap.Image className='icon' alt='menu icon' src='./src/images/icon-hamburger.svg' onClick={toggleModal} />
          </ReactBootstrap.Nav.Item>
        }
        {modal && 
          <div className='mod'>
            <ReactBootstrap.Modal.Dialog>
              <ReactBootstrap.Modal.Header className='d-flex justify-content-between align-items-center'>
                <ReactBootstrap.Modal.Title><Logo /></ReactBootstrap.Modal.Title>
                <ReactBootstrap.Image className='icon' alt='close icon' src='./src/images/icon-close.svg' onClick={toggleModal} />
              </ReactBootstrap.Modal.Header>
              <ReactBootstrap.Modal.Body>
                <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column justify-content-center align-items-center'>
                  <List target='' hash='' BS__options='' />
                </ReactBootstrap.Nav.Item>
              </ReactBootstrap.Modal.Body>
            </ReactBootstrap.Modal.Dialog>
          </div>
        }
      </ReactBootstrap.Nav>
      <ReactBootstrap.Nav className='d-none d-sm-flex justify-content-between align-items-center'>
        <Logo />
        <ReactBootstrap.Nav.Item as='ul' className='d-inline-flex'>
          <List target='' hash='' BS__options='' />
        </ReactBootstrap.Nav.Item>
      </ReactBootstrap.Nav>
    </>
  )
}

export default NavWithModal;