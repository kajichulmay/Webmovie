import cover from '../images/cover.jpg';
import iconCart from '../images/cart.png';
import { IMG_URL } from '../config/env';
function MovieList({ item }) {
  return (
    <div className="boxMovie">
      <div className="boxImgCover">
        <img src={`${IMG_URL}${item.poster_path}`} />
      </div>
      <div className="textTitle">{item.title}</div>
      <div className="priceMovie">1500</div>
      <div className="cart">
        <img src={iconCart} />
      </div>
    </div>
  );
}

export default MovieList;
