import education from "../../data/education.js";

function Education() {
  return (
    <div className="education mt-3">
      <h3>
        <i class="bi bi-mortarboard"></i> Education
      </h3>

      <div className="d-flex justify-content-between align-items-start gap-3 container px-0">
        {education.map((certificate, index) => (
          <div>
            <h4 className="h5 mb-2 text-nowrap">
              {certificate.degree}
            </h4>

            <p className="mb-2 fw-semibold">
              {certificate.institution}
            </p>

            <span className=" text-nowrap fw-light">{certificate.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
