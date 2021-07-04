import "./Card.css";

function Card(props) {
  // able to accept custom classname as well by pointing to external className
  const cards = "card " + props.className;
  // must have {props.children} if using this method to add classes
  // children is a reserved name. it is always the content between the opening and closing tag
  return <div className={cards}>{props.children}</div>;
}

export default Card;
