const Button = (props) => (
  <ReactBootstrap.Button variant={props.variant} className={props.className} onClick={props.onClick}>{props.content}</ReactBootstrap.Button>
);

export default Button;