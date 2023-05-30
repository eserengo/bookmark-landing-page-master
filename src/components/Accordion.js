const Accordion = () => {

  return (
    <ReactBootstrap.Accordion flush>
      <ReactBootstrap.Accordion.Item eventKey='0'>
        <ReactBootstrap.Accordion.Header>
          What is Bookmark?
        </ReactBootstrap.Accordion.Header>
        <ReactBootstrap.Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
          justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
        </ReactBootstrap.Accordion.Body>
      </ReactBootstrap.Accordion.Item>
      <ReactBootstrap.Accordion.Item eventKey='1'>
        <ReactBootstrap.Accordion.Header>
          How can I request a new browser?
        </ReactBootstrap.Accordion.Header>
        <ReactBootstrap.Accordion.Body>
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </ReactBootstrap.Accordion.Body>
      </ReactBootstrap.Accordion.Item>
      <ReactBootstrap.Accordion.Item eventKey='2'>
        <ReactBootstrap.Accordion.Header>
          Is there a mobile app?
        </ReactBootstrap.Accordion.Header>
        <ReactBootstrap.Accordion.Body>
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
          urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
          sollicitudin ex et ultricies bibendum.
        </ReactBootstrap.Accordion.Body>
      </ReactBootstrap.Accordion.Item>
      <ReactBootstrap.Accordion.Item eventKey='3'>
        <ReactBootstrap.Accordion.Header>
          What about other Chromium browsers?
        </ReactBootstrap.Accordion.Header>
        <ReactBootstrap.Accordion.Body>
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
          vitae neque eget nisl gravida pellentesque non ut velit.
        </ReactBootstrap.Accordion.Body>
      </ReactBootstrap.Accordion.Item>
    </ReactBootstrap.Accordion>
  );
}

export default Accordion;