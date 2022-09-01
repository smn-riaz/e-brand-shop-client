import React from "react";
import NowBtn from "../../../Components/NowBtn/NowBtn";
import "./TopbarCarousel.css";
import { HashLink } from 'react-router-hash-link';

function TopbarCarousel() {
  return (
    <main className="topbarCarousel">
     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
     <div class="carousel-inner">
          <div class="carousel-item active " data-bs-interval="1900" >
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-10 py-3">
                <img
                  src="https://i.ibb.co/8KPC53n/a.png"
                  alt=""
                  className="h-100"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-10 my-auto p-4">
                <h1 className="fs-1">
                  <span>AUTUMN</span>
                  <br />
                  <span>COLLECTION</span>
                </h1>
                <h3 className="py-5">
                  DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
                </h3>
                <button className="px-3 py-2"><HashLink smooth to="/#shopping" className="text-decoration-none text-dark">SHOPPING NOW</HashLink></button>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="6000">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-10 py-3">
                <img
                  src="https://i.ibb.co/vqy3YSQ/b.png"
                  alt=""
                  className="h-100"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-10 my-auto p-4">
                <h1 className="fs-1">
                  <span>SUMMER SALE</span>
                </h1>
                <h3 className="py-5">
                  DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
                </h3>
                <button className="px-3 py-2"><HashLink smooth to="/#shopping" className="text-decoration-none text-dark">SHOPPING NOW</HashLink></button>
              </div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="6000">
            <div className="row d-flex justify-content-center">
            <div className="col-lg-5 col-md-6 col-sm-10 py-3">
                <img
                  src="https://i.ibb.co/C62Jywd/c.png"
                  alt=""
                  className="h-100"
                />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-10 my-auto p-4">
                <h1 className="fs-1">
                  <span>LOUNGEWEAR</span>
                  <br />
                  <span>LOVE</span>
                </h1>
                <h3 className="py-5">
                  DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
                </h3>
                <button className="px-3 py-2"><HashLink smooth to="/#shopping" className="text-decoration-none text-dark">SHOPPING NOW</HashLink></button>
              </div>
            </div>
          </div>
        </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </main>
  );
}

export default TopbarCarousel;
