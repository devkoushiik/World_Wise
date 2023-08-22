import { Link } from "react-router-dom";
import styles from "./Navlinks.module.css";
const Navlinks = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.li}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="price">Pricing</Link>
        </li>
        <li>
          <Link to="product">Product</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navlinks;
