import React, { useState, useEffect } from "react";

const dataArray = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    let intervalId = null;

    if (isAutoSliding) {
      intervalId = setInterval(() => {
        goToNextSlide();
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, isAutoSliding]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1
    );
    setIsAutoSliding(false);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataArray.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoSliding(false);
  };

  return (
    <div className="slider">
      <h2 id="review-heading">Reviews</h2>
      <div id="review-container" className="review-container">
        {dataArray.map((review, index) => (
          <div
            key={review.id}
            className={
              index === currentIndex ? "slide active" : "slide inactive"
            }
            data-testid={`slide-${index}`}
          >
            <img
              id={`person-${index}-image`}
              src={review.image}
              alt={review.name}
            />
            <h3 id={`person-${index}`}>{review.name}</h3>
            <h4 id={`person-${index}-title`}>{review.title}</h4>
            <p id={`person-${index}-quote`}>{review.quote}</p>
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPreviousSlide}>
        Prev
      </button>
      <button className="next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};
export default Slider;