const HomePage = () => {
  return (
    <div id="banner" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="banner-title">
              <h1 className="title" id="heading">
                Welcome to ReadSpeak APP
              </h1>
              <p className={`lead`} id="ban-para">
                Immerse yourself in the world of literature with our innovative
                book and text reader application. Whether it's PDFs or plain
                text, experience the joy of reading at your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
