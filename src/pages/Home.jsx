import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useLoaderData } from "react-router-dom";

const getWeatherOfTheDay = () => {
  return "sunny";
};

function Home() {
  const pokemon = useLoaderData();
  return (
    <>
      <MDBCard>
        <MDBCardImage
          src={pokemon.sprites.front_default}
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>{`${pokemon.name} - ${pokemon.id} - ${pokemon.height}`}</MDBCardTitle>
          <MDBCardText>Coucou je suis un pokemon</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
export default Home;
