import { useState } from "react";
const VoiceArtistsComponent = () => {
  const [activeImage, setActiveImage] = useState(0);
  const handler_next = (e) => {
    const currentImage = activeImage === 2 ? 0 : activeImage + 1;
    setActiveImage(currentImage);
  };
  const handler_prev = (e) => {
    const currentImage = activeImage === 0 ? 2 : activeImage - 1;
    setActiveImage(currentImage);
  };
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class={`carousel-item ${activeImage === 0 ? "active" : ""}`}>
            <div class="card" style={{ width: "18rem" }}>
              <div className="top-card-data d-flex align-items-center justify-content-between m-0">
                <a>
                  <img src="https://via.placeholder.com/50" alt="..." />
                  <span style={{ color: "#df622c" }}>username 1</span>
                </a>
                <i className="fas fa-microphone"></i>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class={`carousel-item ${activeImage === 1 ? "active" : ""}`}>
            <div class="card" style={{ width: "18rem" }}>
              <div className="top-card-data d-flex align-items-center justify-content-between m-0">
                <a>
                  <img src="https://via.placeholder.com/50" alt="..." />
                  <span style={{ color: "#df622c" }}>username 2</span>
                </a>
                <i className="fas fa-microphone"></i>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class={`carousel-item ${activeImage === 2 ? "active" : ""}`}>
            <div class="card" style={{ width: "18rem" }}>
              <div className="top-card-data d-flex align-items-center justify-content-between m-0">
                <a>
                  <img src="https://via.placeholder.com/50" alt="..." />
                  <span style={{ color: "#df622c" }}>username 3</span>
                </a>
                <i className="fas fa-microphone"></i>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handler_prev}
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handler_next}
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default VoiceArtistsComponent;
