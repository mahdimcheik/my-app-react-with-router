import { useParams } from "react-router-dom";

function Article() {
    const { id , name } = useParams();
    return <h1>Hello from Article: {name?? "inconnu"} {id}</h1>;
  }
  
  export default Article;