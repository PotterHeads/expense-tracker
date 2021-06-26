import "./Card.css";

function Card(props) {
  const cards = "card " + props.className;
  return <div className={cards}>{props.children}</div>;
}

export default Card;
