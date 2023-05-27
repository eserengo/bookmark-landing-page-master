import Button from "./Button";

const Cards = () => {
  const data = [
    {
      id: 1,
      nav: 'Chrome',
      ver: '62',
      src: './src/images/logo-chrome.svg',
    },
    {
      id: 2,
      nav: 'Firefox',
      ver: '55',
      src: './src/images/logo-firefox.svg',
    },
    {
      id: 3,
      nav: 'Opera',
      ver: '46',
      src: './src/images/logo-opera.svg',
    },
  ];

  return (
    data.map(item => {
      return (
        <ReactBootstrap.Card key={`card__${item.id}`} className={`card__${item.id} col-sm-4`}>
          <ReactBootstrap.Card.Body className='d-flex flex-column justify-content-center align-items-center'>
            <ReactBootstrap.Image className='navs__logo' alt='navs logo' src={item.src} />
            <ReactBootstrap.Card.Title className='mt-4' >Add to {item.nav}</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Text className=''>Minimum version {item.ver}</ReactBootstrap.Card.Text>
            <ReactBootstrap.Image className='dots__img' alt='background dots' src='./src/images/bg-dots.svg' />
            <Button variant='primary' className='px-4 py-2 mt-3' content='Add & Install Extension' />
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      )
    })
  );
}

export default Cards;