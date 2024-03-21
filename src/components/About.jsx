import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("languages");

  // Define content for each tab
  const tabContents = {
    languages: [
      "C Programming",
      "HTML 5",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NodeJS",
      "ExpressJs",
      "MongoDB",
      "BootStrap",
      "Tailwind",
    ],
    experience: [
      "Worked in HDFC BANK From 2017-2019",
      "Worked in Team to make Cryptocurrency Dashboard in Almabetter",
      "Worked in Team to make FSWD website name:- foodadda",
      "Worked in the Team to make Backend Project named Get Youtube Subscribers",
    ],
    education: [
      "2023 - Completed my Training in AlmaBetter",
      "2022 - Graduated From University Of Rajasthan",
      "2016 - Completed 12th grade",
    ],
    certificates: [
      {
        name: "Full Stack Web Development",
        link: "certificates/FullStack.pdf",
      },
      {
        name: "Frontend Development",
        link: "certificates/Frontend Development.pdf",
      },
      {
        name: "Backend Development",
        link: "certificates/Backend Development.pdf",
      },
      {
        name: "CryptoCurrency: Frontend Project",
        link: "certificates/CryptoCurrency Dashboard.pdf",
      },
      {
        name: "Get Youtube Subscriber: Backend Project",
        link: "/certificates/Get Youtube Subscribers.pdf",
      },
    ],
  };

  const handleTabClick = (tabName, event) => {
    event.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className="container mt-5 " id="about">
      <div className="card border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/assets/about.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">About Me</h1>
              <p className="card-text">
                A self-learner crazy enthusiast seeing forward to learn and
                build beautiful and simple websites.
              </p>
              <ul className="nav nav-pills mb-3">
                <li className="nav-item about">
                  <a
                    className={`nav-link ${
                      activeTab === "languages" && "active"
                    }`}
                    onClick={(e) => handleTabClick("languages", e)}
                    href="#"
                  >
                    Languages
                  </a>
                </li>
                <li className="nav-item about">
                  <a
                    className={`nav-link ${
                      activeTab === "experience" && "active"
                    }`}
                    onClick={(e) => handleTabClick("experience", e)}
                    href="#"
                  >
                    Experience
                  </a>
                </li>
                <li className="nav-item about">
                  <a
                    className={`nav-link ${
                      activeTab === "education" && "active"
                    }`}
                    onClick={(e) => handleTabClick("education", e)}
                    href="#"
                  >
                    Education
                  </a>
                </li>
                <li className="nav-item about">
                  <a
                    className={`nav-link ${
                      activeTab === "certificates" && "active"
                    }`}
                    onClick={(e) => handleTabClick("certificates", e)}
                    href="#"
                  >
                    Certificates
                  </a>
                </li>
              </ul>
              <div className="tab-content ">
                {Object.keys(tabContents).map((tabName, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      activeTab === tabName && "show active"
                    }`}
                  >
                    {tabName === "certificates" && (
                      <ul>
                        {tabContents[tabName].map((certificate, index) => (
                          <li key={index}>
                            <a
                              href={certificate.link}
                              style={{
                                textDecoration: "none",
                                color: "black",
                                fontWeight: "400",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {certificate.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    {tabName !== "certificates" && (
                      <ul>
                        {tabContents[tabName].map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
