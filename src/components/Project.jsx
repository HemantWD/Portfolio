import React from "react";
import { projects } from "../data/projectData";
import { Carousel } from "react-bootstrap";

const Project = () => {
  return (
    <div className="container" id="project">
      <h1 className="text-left mt-5 mb-4">My Projects</h1>
      <Carousel>
        {projects.map((project) => (
          <Carousel.Item key={project.id}>
            <img
              className="d-block w-100 bg-transparent"
              src={project.image}
              alt={project.title}
            />
            <Carousel.Caption className="projects">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                <a
                  href={project.liveLink || "#"}
                  className="text-info"
                  target="_blank"
                >
                  <i className="fa-solid fa-link  "></i>
                  {project.liveLink ? "Live Link" : "Yet To Be Deployed"}
                </a>
                <a
                  href={project.gitHubLink}
                  className="text-info"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i> GitHub
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Project;
