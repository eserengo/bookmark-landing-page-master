import Button from './Button';

const Tabs = () => {
  const [key, setKey] = React.useState('bookmarking');

  const CreateTab = ({ props }) => (
    <div className='d-flex flex-column flex-sm-row justify-content-between align-items-center'>
      <div className='col-12 col-sm-6 py-4 px-2'>
        <ReactBootstrap.Image className='tab__img' alt={props.alt} src={props.src} />
      </div>
      <div className='col-12 col-sm-6 py-4 px-2 text-center text-sm-start ms-sm-4'>
        <h2 className='title secondary'>{props.title}</h2>
        <p className='para'>{props.para}</p>
        <Button variant='primary' className='d-none d-sm-block' content='More Info' />
      </div>
    </div>
  );

  const bookmarking = {
    alt: 'bookmarking illustration',
    src: './src/images/illustration-bookmarking.svg',
    title: 'Bookmark in one click',
    para: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  };

  const searching = {
    alt: 'searching illustration',
    src: './src/images/illustration-searching.svg',
    title: 'Intelligent search',
    para: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  };

  const sharing = {
    alt: 'sharing illustration',
    src: './src/images/illustration-sharing.svg',
    title: 'Share your bookmarks',
    para: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  };

  return (
    <ReactBootstrap.Tabs id='tabs' className='border-0 flex-column align-items-center justify-content-center flex-sm-row' activeKey={key} onSelect={(k) => setKey(k)}>
      <ReactBootstrap.Tab eventKey='bookmarking' title='Simple Bookmarking'>
        <CreateTab props={bookmarking} />
      </ReactBootstrap.Tab>
      <ReactBootstrap.Tab eventKey='searching' title='Speedy Searching'>
        <CreateTab props={searching} />
      </ReactBootstrap.Tab>
      <ReactBootstrap.Tab eventKey='sharing' title='Easy Sharing'>
        <CreateTab props={sharing} />
      </ReactBootstrap.Tab>
    </ReactBootstrap.Tabs>
  );
}

export default Tabs;