import City from './City';

export default function GreetingsList({ cities }) {

  return (
    <>
      <section>
        {cities.map((city, i) => 
          <City key={city + i} city={city} />
        )}
      </section>
    </>
  );
}