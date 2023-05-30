import Link from './Link';
import List from './List';

const NavWithModal = () => {
  const [modal, setModal] = React.useState(false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  }

  const routes = [
    <Link href='/Frontendmentor.io/bookmark-landing-page-master/' className='link' children='home' />,
    <Link href='/Frontendmentor.io/bookmark-landing-page-master/features' className='link' children='features' />,
    <Link href='/Frontendmentor.io/bookmark-landing-page-master/faq' className='link' children='faq' />,
    <Link href='/Frontendmentor.io/bookmark-landing-page-master/signin' className='btn link px-4' children='sign in' />,
  ];

  const Logo = () => (
    <ReactBootstrap.Navbar.Brand><ReactBootstrap.Image className='bookmark__logo' alt='bookmark logo' src='./src/images/logo-bookmark.svg' /></ReactBootstrap.Navbar.Brand>
  );

  return (
    <header className='header'>
      <ReactBootstrap.Nav className='d-block d-sm-none'>
        {
          !modal ?
            <ReactBootstrap.Nav.Item className='d-flex flex-row justify-content-between align-items-center px-3 py-4'>
              <Logo />
              <ReactBootstrap.Image className='icon' alt='menu icon' src='./src/images/icon-hamburger.svg' onClick={toggleModal} />
            </ReactBootstrap.Nav.Item>
          :
            <ReactBootstrap.Modal.Dialog>
              <ReactBootstrap.Modal.Header className='d-flex justify-content-between align-items-center px-3 py-4'>
                <ReactBootstrap.Modal.Title><Logo /></ReactBootstrap.Modal.Title>
                <ReactBootstrap.Image className='icon' alt='close icon' src='./src/images/icon-close.svg' onClick={toggleModal} />
              </ReactBootstrap.Modal.Header>
              <ReactBootstrap.Modal.Body>
                <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column justify-content-center align-items-center m-0 p-0'>
                  <List target={routes} hash='routes__1' BS__options='text-uppercase p-2' />
                </ReactBootstrap.Nav.Item>
              </ReactBootstrap.Modal.Body>
            </ReactBootstrap.Modal.Dialog>
        }
      </ReactBootstrap.Nav>
      <ReactBootstrap.Nav className='d-none d-sm-flex justify-content-between align-items-center'>
        <Logo />
        <ReactBootstrap.Nav.Item as='ul' className='d-inline-flex align-items-center m-0 p-0'>
          <List target={routes} hash='routes__2' BS__options='text-uppercase p-2' />
        </ReactBootstrap.Nav.Item>
      </ReactBootstrap.Nav>
    </header>
  )
}

export default NavWithModal;