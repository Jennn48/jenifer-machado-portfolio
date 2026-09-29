import ContactForm from "../../components/Contact/ContactForm.jsx";
import ContactInfo from "../../components/Contact/ContactInfo.jsx";

function Contact() {
  return (
    <div className="row d-flex justify-content-between">
      <h2 className="page-title pb-4 mb-4">Contact</h2>
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;