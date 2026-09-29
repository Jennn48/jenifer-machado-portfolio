import "./style.css";


function ContactForm() {
  return (
    <form className="col-12 col-lg-6 col-xl-6 d-flex flex-column gap-2 justify-content-between pe-5" action="https://formspree.io/f/xqpanbpo" method="POST">
      <label className="form-label" htmlFor="name">
        <input className="form-control" type="text" id="name" name="name" required placeholder="Name" />
      </label>
      <label className="form-label" htmlFor="email">
        <input className="form-control" type="email" id="email" name="email" required placeholder="Email" />
      </label>
      <label className="form-label" htmlFor="message">
        <textarea className="form-control" id="message" name="message" required placeholder="Message" rows={7}></textarea>
      </label>

      <button type="submit" className="align-self-start btn btn-primary">Send Message</button>
    </form>
  );
}

export default ContactForm;