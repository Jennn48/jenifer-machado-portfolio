import ContactForm from "../../components/Contact/ContactForm.jsx";
import ContactInfo from "../../components/Contact/ContactInfo.jsx";

function Contact() {
  return (
    <div className="row">
      <h2>Contact</h2>
      <ContactInfo />
      <ContactForm />
    </div>
  );
}

export default Contact;