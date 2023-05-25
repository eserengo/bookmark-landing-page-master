import Button from "./Button";

const Tabs = () => {
  const [key, setKey] = React.useState('bookmarking');

  return (
    <ReactBootstrap.Tabs
      id='tabs'
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <ReactBootstrap.Tab
        eventKey='bookmarking'
        title='Simple Bookmarking'
      >
        <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
          <div className="col-12 col-sm-6">
            <ReactBootstrap.Image className='tab__img' alt='bookmarking illustration' src='./src/images/illustration-bookmarking.svg' />
          </div>
          <div className="col-12 col-sm-6">
            <h2 className='title secondary'>Bookmark in one click</h2>
            <p className='para'>Organize your bookmarks however you like. Our simple drag-and-drop interface
              gives you complete control over how you manage your favourite sites.</p>
            <Button variant='primary' className='d-none d-sm-block' content='More Info' />
          </div>
        </div>
      </ReactBootstrap.Tab>
      <ReactBootstrap.Tab
        eventKey='searching'
        title='Speedy Searching'
      >
        <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
          <div className="col-12 col-sm-6">
            <ReactBootstrap.Image className='tab__img' alt='searching illustration' src='./src/images/illustration-searching.svg' />
          </div>
          <div className="col-12 col-sm-6">
            <h2 className='title secondary'>Intelligent search</h2>
            <p className='para'>Our powerful search feature will help you find saved sites in no time at all.
              No need to trawl through all of your bookmarks.</p>
            <Button variant='primary' className='d-none d-sm-block' content='More Info' />
          </div>
        </div>
      </ReactBootstrap.Tab>
      <ReactBootstrap.Tab
        eventKey='sharing'
        title='Easy Sharing'
      >
        <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
          <div className="col-12 col-sm-6">
            <ReactBootstrap.Image className='tab__img' alt='sharing illustration' src='./src/images/illustration-sharing.svg' />
          </div>
          <div className="col-12 col-sm-6">
            <h2 className='title secondary'>Share your bookmarks</h2>
            <p className='para'>Easily share your bookmarks and collections with others. Create a shareable
              link that you can send at the click of a button.</p>
            <Button variant='primary' className='d-none d-sm-block' content='More Info' />
          </div>
        </div>
      </ReactBootstrap.Tab>
    </ReactBootstrap.Tabs>
  )
};

export default Tabs;