import Button from "./Button";
import NavWithModal from "./NavWithModal__BS";
import Tabs from "./Tabs";
import Cards from "./Cards";
import Accordion from "./Accordion";
import Contact__Input from "./Contact__Input";
import FooterNav from "./FooterNav";
import Attribution from "./Attribution__BS.js";

const Home = () => {

  const Intro = () => (
    <section className='intro__section row my-5 mx-0 mx-sm-3'>
      <div className='col-12 col-sm-6 order-sm-1'>
        <ReactBootstrap.Image className='hero__img' alt='hero illustration' src='./src/images/illustration-hero.svg' />
      </div>
      <div className='col-12 col-sm-6 order-sm-0 d-flex flex-column align-items-center align-items-sm-start' >
        <h1 className='title primary text-center text-sm-start mt-5 mb-3' >A Simple Bookmark Manager</h1>
        <p className='para text-center text-sm-start'>A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.</p>
        <div className='d-flex flex-row mt-2'>
          <Button variant='primary' className='px-3 py-2' content='Get it on Chrome' />
          <Button variant='secondary' className='px-3 py-2 ms-3' content='Get it on Firefox' />
        </div>
      </div>
    </section>
  );

  const Features = () => (
    <section className='features__section row my-5 mx-0 mx-sm-3'>
      <div className='col-12 text-center'>
        <h2 className='title secondary'>Features</h2>
        <p className='para px-4 py-2 px-sm-5'>Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <div className='col-12'>
        <Tabs />
      </div>
    </section>
  );

  const Download = () => (
    <section className='download__section row p-3 px-sm-5 my-5 mx-0'>
      <div className='col-12 text-center p-0 px-sm-5'>
        <h2 className='title secondary'>Download the extension</h2>
        <p className='para'>We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.</p>
      </div>
      <div className='col-12 d-flex flex-column flex-sm-row align-items-center justify-content-center'>
        <Cards />
      </div>
    </section>
  );

  const Faq = () => (
    <section className='faq__section row my-5 mx-0 mx-sm-3 px-sm-5'>
      <div className='col-12 text-center px-sm-5'>
        <h2 className='title secondary px-5'>Frequently Asked Questions</h2>
        <p className='para px-2 my-4 px-sm-5'>Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.</p>
      </div>
      <div className='col-12 my-4 px-2 px-sm-5'>
        <Accordion />
      </div>
      <div className='col-12 text-center'>
        <Button variant='primary' className='px-3 py-2' content='More Info' />
      </div>
    </section>
  ); 

  const Contact = () => (
    <section className='contact__section row py-5 px-2 m-0'>
      <div className='col-12 text-center px-sm-5'>
        <p className='para secondary text-uppercase'>35,000+ already joined</p>
        <h3 className='title tertiary px-sm-5'>Stay up-to-date with what we’re doing</h3>
      </div>
      <Contact__Input />
    </section>
  );

  return (
    <div className='home__page'>
      <NavWithModal />
      <main className='main container-fluid p-0'>
        <Intro />
        <Features />
        <Download />
        <Faq />
        <Contact />
      </main>
      <FooterNav />
      <Attribution />
    </div>
  )
}

export default Home;