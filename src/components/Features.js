import Tabs from "./Tabs";
import Button from "./Button";

const Features = () => {
  const goHome = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', '/Frontendmentor.io/bookmark-landing-page-master/');
    window.location.pathname = '/Frontendmentor.io/bookmark-landing-page-master/';
  };

  return (
    <div className='features__page p-2'>
      <div className='col-12 text-center'>
        <h2 className='title secondary'>Features</h2>
        <p className='para px-4'>Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <div className='col-12 px-3 my-3'>
        <Tabs />
      </div>
      <div className='col-12 text-center'>
        <Button variant='primary' className='px-3 py-2' content='Return Home' onClick={(event) => goHome(event)} />
      </div>
    </div>
  )
};

export default Features;