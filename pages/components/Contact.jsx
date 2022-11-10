const Contact = ({refContact, inViewContact}) => {
  return (
    <>
      <section id="contact">
        <h1 ref={refContact} className="section-title">contact</h1>
        <form action="/" className="contact-form">
          <div className={!inViewContact ? "contact-item" : "contact-item animate"}>
            <input
              placeholder="First Name"
              type="text"
              id="fname"
              className="fname"
            />
          </div>
          <div className={!inViewContact ? "contact-item" : "contact-item animate"}>
            <input
              placeholder="Last Name"
              type="text"
              id="lname"
              className="lname"
            />
          </div>
          <div className={!inViewContact ? "contact-item" : "contact-item animate"}>
            <input
              placeholder="Email"
              type="email"
              id="mail"
              className="mail"
            />
          </div>
          <div className={!inViewContact ? "contact-item" : "contact-item animate"}>
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className={!inViewContact ? "contact-item" : "contact-item animate"}>
            <button
              onSubmit={(e) => e.preventDefault}
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
