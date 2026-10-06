import "./style.css";

function ContactForm() {
  return (
    <form
      className="col-12 col-lg-8 col-xl-8 d-flex flex-column gap-2 justify-content-between align-items-center pe-5"
      action="https://formspree.io/f/xqpanbpo"
      method="POST"
    >
      <label className="col-10 form-label" htmlFor="name">
        <input
          className="form-control d-none d-md-block"
          type="text"
          id="name"
          name="name"
          required
          placeholder="Name"
        />
      </label>
      <label className="col-10 form-label" htmlFor="email">
        <input
          className="form-control d-none d-md-block"
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
        />
      </label>
      <label className="col-10 form-label" htmlFor="message">
        <textarea
          className="form-control d-none d-md-block"
          id="message"
          name="message"
          required
          placeholder="Message"
          rows={7}
        ></textarea>
      </label>

      <div className="col-10 form-btn">
        <button
          type="submit"
          className="align-self-start btn btn-primary d-none d-md-block"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
