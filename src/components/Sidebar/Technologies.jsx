import technologies from "../../data/technologies.js";

function Technologies() {
  return (
    <div className="technologies mt-3">
      <h3>
        <i className="bi bi-code-slash"></i> Technologies
      </h3>
      <div className="d-flex flex-column flex-wrap align-content-start justify-content-center gap-2 overflow-auto container px-0 py-2">
        {technologies.map((technology, id) => (
          <div key={id} className="rounded-pill d-flex gap-2 align-items-center px-2 py-1">
            <i>
              <img src={technology.iconURL} alt="" />
            </i>
            <small>{technology.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
