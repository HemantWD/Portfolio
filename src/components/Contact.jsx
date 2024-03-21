const Contact = () => {
  return (
    <div id="contact" className="container py-5">
      <div className="row">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h2 className="sub-title">Contact Me</h2>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-envelope" />
              <a href="mailto:Hemantajaysharma@gmail.com">
                Hemantajaysharma@gmail.com
              </a>
            </li>
            <li>
              <i className="fas fa-phone-square" />{" "}
              <a href="tel:9024082738">9024082738</a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#" target="_blank" className="btn btn-outline-primary">
              <i className="fab fa-twitter" />
            </a>

            <a
              href="https://www.linkedin.com/in/hemant-ajay-sharma-694684252/"
              target="_blank"
              className="btn btn-outline-primary"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/HemantWD"
              target="_blank"
              className="btn btn-outline-primary"
            >
              <i className="fab fa-github" />
            </a>
          </div>
          <a
            href="assets/Hemant_Ajay_Sharma_WebDev_AlmaBetter.pdf"
            download
            className="btn btn-primary mt-3"
          >
            Download CV
          </a>
        </div>
        <div className="col-lg-6">
          <form name="submit-to-google-sheet">
            <div className="mb-3">
              <input
                type="text"
                name="Name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="Your Email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="Message"
                className="form-control"
                rows={6}
                placeholder="Your Message"
                required
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
