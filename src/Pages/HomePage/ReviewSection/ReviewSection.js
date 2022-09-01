import React from "react";
import "./ReviewSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import twitter from "../../../Assets/twitter.png";

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const reviews = [
    {
      text: "For some SynBio UK was their first experience of a face-to-face academic conference. For others, it was the first chance to catch up with colleagues from",
      name: "Mrs. Suzi",
      twitter: "twitter.com/mr.suzi",
    },
    {
      text: "Short Interfering RNA (siRNA) has come of age to unleash its full potential as a potent therapeutic. The onset of a series of FDA approvals of the siRNA",
      name: "Mr. Loai",
      twitter: "twitter.com/mr.loai",
    },
    {
      text: "If science is the most communal of human endeavors, drug discovery is its pinnacle. Over the course of decades, ",
      name: "Mr. Syoro",
      twitter: "twitter.com/mr.syoro",
    },
  ];

  return (
    <main className="reviewSection d-flex justify-content-center row" >
       <h2 className="text-center pt-4">CUSTOMER TALKS</h2>
      <div className="p-5 text-center col-10 review-div">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div className="p-5">
              <h4 className="px-4">" {review.text} "</h4>
              *****
              <div><h5 className="fw-bold text-center"><a href={review.twitter} className="text-decoration-none text-dark">{review.name}</a></h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default ReviewSection;
