
export default function City(props) {
  console.log('||: ' + props.city);
  return (
    <figure>
      <figcaption>
        <h2>{props.city.name}</h2>
      </figcaption>
      <img alt={props.city.name} src={props.city.img} width='300'/>
      <figcaption>
        {props.city.coordinates}
      </figcaption>
    </figure>
  );
}

