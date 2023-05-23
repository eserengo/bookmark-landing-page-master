const Route = ({ path, children }) => {

  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);   // state to track URL and force component to re-render on change

  React.useEffect(() => {
    const onLocationChange = () => {                              // define callback as separate function so it can be removed later with cleanup function
      setCurrentPath(window.location.pathname);                   // update path state to current window URL
    }

    window.addEventListener('popstate', onLocationChange);        // listen for popstate event

    return () => {
      window.removeEventListener('popstate', onLocationChange)    // clean up event listener
    };
  }, [])

  return currentPath === path ? children : null;
}

export default Route;