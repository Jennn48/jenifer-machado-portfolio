import education from "../../data/education.js";

function Education() {
  return (
    <div className="education mt-1 pt-3 pb-2 rounded-4">
      <h3 className="mb-4 mb-md-2">
        <i className="bi bi-mortarboard"></i> Education
      </h3>

      <div className="d-flex justify-content-between align-items-start gap-3 container px-0">
        {education.map((certificate, index) => (
          <div key={index}>
            <h4 className="h5 mb-2 text-nowrap rounded-pill p-1 degree">
              {certificate.degree}
            </h4>

            <p className="mb-2 fw-semibold rounded-pill p-1 institution">
              {certificate.institution}
            </p>

            <span className=" text-nowrap fw-light period">{certificate.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
