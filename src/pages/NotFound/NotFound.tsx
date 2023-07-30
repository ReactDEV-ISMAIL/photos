import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Oops!</h1>
      <p>Not found</p>
      <div>
        <Link to="/">Home Page</Link>
      </div>
    </article>
  );
};

export default NotFound;
