import Route from './Route.js';
import Home from './Home.js';

const App = () => {

  return (
    <>
      <Route path='/Frontendmentor.io/bookmark-landing-page-master/index.html'>
        <Home />
      </Route>
      <Route path='/Frontendmentor.io/bookmark-landing-page-master/'>
        <Home />
      </Route>
    </>
  )
};

export default App;