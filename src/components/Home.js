import Button from "./Button";
import NavWithModal from "./NavWithModal__BS";
import Tabs from "./Tabs";
import Cards from "./Cards";
import Attribution from "./Attribution__BS.js";

const Home = () => {

  const Intro = () => (
    <section className='intro__section row'>
      <div className='col-12 col-sm-6 order-sm-1'>
        <ReactBootstrap.Image className='hero__img' alt='hero illustration' src='./src/images/illustration-hero.svg' />
      </div>
      <div className='col-12 col-sm-6 order-sm-0 d-flex flex-column align-items-center align-items-sm-start' >
        <h1 className='title primary' >A Simple Bookmark Manager</h1>
        <p className='para'>A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.</p>
        <div className='d-flex flex-row'>
          <Button variant='primary' className='px-3 py-2' content='Get it on Chrome' />
          <Button variant='secondary' className='px-3 py-2 ms-3' content='Get it on Firefox' />
        </div>
      </div>
    </section>
  );

  const Features = () => (
    <section className='features__section row'>
      <div className='col-12 text-center'>
        <h2 className='title secondary'>Features</h2>
        <p className='para'>Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.</p>
      </div>
      <div className='col-12'>
        <Tabs />
      </div>
    </section>
  );

  const Download = () => (
    <section className='download__section row'>
      <div className='col-12 text-center'>
        <h2 className='title secondary'>Download the extension</h2>
        <p className='para'>We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.</p>
      </div>
      <div className='col-12 d-flex flex-column flex-sm-row'>
        <Cards />
      </div>
    </section>
  );

  return (
    <div className='home__page'>
      <NavWithModal />
      <main className='main container-fluid'>
        <Intro />
        <Features />
        <Download />
      </main>
      <Attribution />
    </div>
  )
}

export default Home;