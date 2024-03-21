import { data } from "../data/skillsData";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <h1 className="text-left mt-5 mb-4">My Skills</h1>
      <div className="row justify-content-center ">
        {data.map((item, index) => (
          <div className="col-md-3 mb-4 " key={index}>
            <div className="card h-100 skills">
              <div className="card-icon m-3">{item.image}</div>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
