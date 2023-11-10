import PropTypes from "prop-types";
import { useState } from "react";
import ApiDataManager from "../../services/api/ApiDataManager";
import knifeLeft from "../../assets/images/knifeLeft.svg";
import knifeRight from "../../assets/images/knifeRight.svg";

import "./CarouselCard.scss";

export default function CarouselSelect({ types }) {
  const apiDatatypes = ApiDataManager({ mealType: types });
  const [index, setIndex] = useState(0);

  const handleClickLess = () => {
    if (index === 0 && apiDatatypes.recipesData.length) {
      setIndex(apiDatatypes.recipesData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const handleClickMore = () => {
    if (
      index === apiDatatypes.recipesData.length - 1 &&
      apiDatatypes.recipesData.length
    ) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="blockCarousel">
      <button className="left" type="button" onClick={handleClickLess}>
        <img src={knifeLeft} className="btnLeft" alt="Litle bouton" />
      </button>
      {apiDatatypes.recipesData.length && (
        <div className="picture">
          <img
            src={apiDatatypes.recipesData[index].recipe.image}
            alt="Magnifique nourriture"
          />
        </div>
      )}

      <button className="right" type="button" onClick={handleClickMore}>
        <img src={knifeRight} className="btnRight" alt="Litle bouton" />
      </button>
    </div>
  );
}
CarouselSelect.propTypes = {
  types: PropTypes.string.isRequired,
};