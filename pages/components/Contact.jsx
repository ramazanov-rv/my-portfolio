const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1 className="section-title">contact</h1>
        <form action="/" className="contact-form">
          <div className="contact-item">
            <input
              placeholder="First Name"
              type="text"
              id="fname"
              className="fname"
            />
          </div>
          <div className="contact-item">
            <input
              placeholder="Last Name"
              type="text"
              id="lname"
              className="lname"
            />
          </div>
          <div className="contact-item">
            <input
              placeholder="Email"
              type="email"
              id="mail"
              className="mail"
            />
          </div>
          <div className="contact-item">
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="contact-item">
            <button
              onSubmit={(e) => e.preventDefault}
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
