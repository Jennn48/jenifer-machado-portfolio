function ProfileLinks() {
  return (
    <div className="profile-links d-flex gap-5 justify-content-around border-top p-2 me-5 mt-4 mt-md-2 mb-5 mb-md-0 col-12">
      <a href="https://github.com/Jennn48/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/jenifer-machado-2a1128384/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i>
      </a>
      <a href="/cv/Jenifer-CV.pdf" download="JeniferMachado.pdf" >
        <i className="bi bi-download"></i>
      </a>
    </div>
  );
}

export default ProfileLinks;
