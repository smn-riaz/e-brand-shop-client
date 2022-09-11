import React, { useState } from "react";
import "./SeasonalSection.css";
import { allProducts, seasonalProducts } from "../../../data";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const SeasonalSection = () => {
  const [season, setSeason] = useState("winter");
  const navigate = useNavigate();

  const products = allProducts.filter((product) => product.type === season);

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <main className="seasonalSection p-3">
      <h2 className="text-center py-3">SEASONAL DHAMAKA</h2>
      <div className="typeSelection-container text-center d-flex justify-content-center row">
        <ul className="col-10">
          <button
            className={
              season === "winter"
                ? "mx-3 fs-4 cursor-pointer fw-bold rounded px-4 py-2 text-primary"
                : "mx-3 border-0 fs-4 cursor-pointer px-4 py-2 text-dark"
            }
            onClick={() => setSeason("winter")}
          >
            Winter
          </button>
          <button
            className={
              season === "summer"
                ? "mx-3 fs-4 cursor-pointer fw-bold rounded px-4 py-2 text-primary"
                : "mx-3 fs-4 border-0 cursor-pointer px-4 py-2 text-dark"
            }
            onClick={() => setSeason("summer")}
          >
            Summer
          </button>
        </ul>
      </div>

      <div className="imageCard-container mx-auto">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={true}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {products.map((product) => (
            <div className="text-center productCard h-100 mx-3">
              <img
                className=""
                src={product.image}
                height="100%"
                width="100%"
                alt=""
              />
                <div className="text-center">
                  <button
                    className="p-2 shopnow-btn shop-nowBtn"
                    onClick={() =>
                      navigate(`${product.type}/${product.productId}`, {
                        state: product,
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> SHOP NOW
                  </button>
                </div>
            </div>
          ))}
        </Slide>
      </div>
    </main>
  );
};

export default SeasonalSection;
