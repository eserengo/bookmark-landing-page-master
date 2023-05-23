const Link = ({ className, href, children }) => {

  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {                  // if ctrl or meta key are held on click, 
      return;                                              // allow default behavior of opening link in new tab
    }        

    event.preventDefault();                                // prevent full page reload

    window.history.pushState({}, '', href);                // update url

    window.dispatchEvent(new PopStateEvent('popstate'));   // communicate to Routes that URL has changed
  };


  return (
    <a className={className} href={href} onClick={onClick} >
      {children}
    </a>
  );
}

export default Link;