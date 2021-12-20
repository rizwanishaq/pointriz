import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <Slider />

        <p className="exportCategoryHeading">Categories</p>
        <div className="exportCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
          </Link>
          <p className="exploreCategoryName">Places for rent</p>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sale"
              className="exploreCategoryImg"
            />
          </Link>
          <p className="exploreCategoryName">Places for sales</p>
        </div>
      </main>
    </div>
  );
};

export default Explore;
