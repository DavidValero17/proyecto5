import React from "react";
import CarouselHome from "../../common/Carousel/Carousel";

export const Home = () => {
  return (
    <div className="HomePage">
      <div className="Carousel">
        <CarouselHome />
      </div>
      <div className="welcome-message">
        <p>Bienvenido a D&J Clinic.</p>
      </div>
    </div>
  );
};
