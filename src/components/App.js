import Route from './Route.js';
import Home from './Home.js';
import SignIn from './SignIn';

const App = () => {

  return (
    <>
      <Route path='/Frontendmentor.io/bookmark-landing-page-master/index.html'>
        <Home />
      </Route>
      <Route path='/Frontendmentor.io/bookmark-landing-page-master/'>
        <Home />
      </Route>
      <Route path='/Frontendmentor.io/bookmark-landing-page-master/signin'>
        <SignIn />
      </Route>
    </>
  )
};

export default App;