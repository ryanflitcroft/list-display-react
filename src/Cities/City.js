export default function City(props) {

  return (
    <figure>
      <figcaption>
        <h2>{props.city.name}</h2>
      </figcaption>
      <img alt={props.city.name} src={props.city.img} />
      <figcaption>
        {props.city.coordinates}
      </figcaption>
    </figure>
  );
}