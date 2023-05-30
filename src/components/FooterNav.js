import Link from './Link';
import List from './List';

const FooterNav = () => {

  const routes = [
    <Link href='/Frontendmentor.io/bookmark-landing-page-master/' className='link' children='home' />,
    <Link href='/Frontendmentor.io/bookmark-landing-page-master/features' className='link' children='features' />,
    <Link href='/Frontendmentor.io/bookmark-landing-page-master/faq' className='link' children='faq' />,
  ];

  const social = [
    <ReactBootstrap.Image className='social icon' alt='facebook icon' src='./src/images/icon-facebook.svg' />,
    <ReactBootstrap.Image className='social icon' alt='twitter icon' src='./src/images/icon-twitter.svg' />,
    <ReactBootstrap.Image className='social icon' alt='isntagram icon' src='./src/images/icon-instagram.svg' />,
  ]

  const Logo = () => (
    <ReactBootstrap.Navbar.Brand><ReactBootstrap.Image className='bookmark__footer__logo' alt='bookmark logo' src='./src/images/logo-footer-bookmark.svg' /></ReactBootstrap.Navbar.Brand>
  );

  return (
    <footer className='footer'>
      <ReactBootstrap.Nav className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
        <Logo />
        <ReactBootstrap.Nav.Item as='ul' className='d-inline-flex flex-column flex-sm-row align-items-center m-0 p-0'>
          <List target={routes} hash='footer__routes' BS__options='text-uppercase p-2' />
        </ReactBootstrap.Nav.Item>
        <ReactBootstrap.Nav.Item as='ul' className='d-inline-flex flex-row align-items-center m-0 p-0'>
          <List target={social} hash='footer__social' BS__options='p-2' />
        </ReactBootstrap.Nav.Item>
      </ReactBootstrap.Nav>
    </footer>
  );
}

export default FooterNav;