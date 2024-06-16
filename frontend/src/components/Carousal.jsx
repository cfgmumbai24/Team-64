import React from "react";

const Carousal = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/img/img1.jpg"
                className="d-block w-100"
                alt="First slide"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  Villagers
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/img2.png"
                className="d-block w-100"
                alt="Second slide"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  Workshops Taken
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/img/img6.jpg"
                className="d-block w-100"
                alt="Third slide"
                style={{ height: "100%", objectFit: "cover" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5
                  style={{
                    color: "#fff",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  Gram Udhyam
                </h5>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
