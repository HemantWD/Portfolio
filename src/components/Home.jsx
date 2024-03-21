const Home = () => {
  return (
    <div className="card text-bg-dark border-0" id="home">
      <img
        src="/assets/background.jpeg"
        className="card-img"
        alt="..."
        style={{ height: "45rem" }}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title fw-semibold text-dark mb-2 text-center display-4">
          Hi, I'm Hemant Ajay Sharma
        </h5>
        <p className="card-text text-dark h4 text-center">
          Full Stack Web Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
