import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HotelItem({ id, title, content }) {
 return (
  <Link to={`hotels/detail/${id}`}>
   <h5>{title}</h5>
   <p>{content}</p>
  </Link>
 );
}



export default HotelItem;