import { Link } from "react-router-dom";
import Navlinks from "../components/Navlinks";

const Home = () => {
  return (
    <div>
      <Navlinks />
      <h1>Home</h1>
      <Link to={"price"}>Pricing</Link>
    </div>
  );
};
export default Home;
