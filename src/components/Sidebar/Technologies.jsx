import technologies from "../../data/technologies.js";

function Technologies() {
  return (
    <div className="technologies mt-3 mb-4 mb-md-1">
      <h3 className="mb-4 mb-md-0">
        <i className="bi bi-code-slash"></i> Technologies
      </h3>
      <div className="row overflow-auto container px-0 py-2">
        {technologies.map((technology, id) => (
          <div key={id} className="rounded-pill d-flex gap-2 align-items-center px-2 py-1 col-4 col-md-3 mb-3 mb-md-2">
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
