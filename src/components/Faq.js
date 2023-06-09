import Accordion from "./Accordion";
import Button from "./Button";

const Faq = () => {
  const goHome = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', '/Frontendmentor.io/bookmark-landing-page-master/');
    window.location.pathname = '/Frontendmentor.io/bookmark-landing-page-master/';
  };

  return (
    <div className='faq__page p-2'> 
      <div className='col-12 text-center'>
        <h2 className='title secondary mt-4'>Frequently Asked Questions</h2>
        <p className='para px-4'>Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.</p>
      </div>
      <div className='col-12'>
        <Accordion />
      </div>
      <div className='col-12 text-center'>
        <Button variant='primary' className='px-3 py-2 mt-4' content='Return Home' onClick={(event) => goHome(event)} />
      </div>
    </div>
  )
};

export default Faq;