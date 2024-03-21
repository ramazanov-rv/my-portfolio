import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const Contact = (props) => {
  const {
    refContact,
    inViewContact,
    handleSubmit,
    name,
    subject,
    message,
    email,
    handleChange,
    isSent,
    isLoading
  } = props;

  return (
    <>
      <section id="contact">
        <h1 ref={refContact} className="section-title">
          contact
        </h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div
            className={!inViewContact ? "contact-item" : "contact-item animate"}
          >
            <input
              placeholder="First Name"
              type="text"
              id="name"
              value={name}
              name="name"
              className="fname"
              onChange={handleChange}
            />
          </div>
          <div
            className={!inViewContact ? "contact-item" : "contact-item animate"}
          >
            <input
              placeholder="Subject"
              type="text"
              id="subject"
              value={subject}
              name="subject"
              className="lname"
              onChange={handleChange}
            />
          </div>
          <div
            className={!inViewContact ? "contact-item" : "contact-item animate"}
          >
            <input
              placeholder="E-mail"
              type="email"
              id="email"
              name="email"
              value={email}
              className="mail"
              onChange={handleChange}
            />
          </div>
          <div
            className={!inViewContact ? "contact-item" : "contact-item animate"}
          >
            <textarea
              placeholder="Message"
              name="message"
              id="message"
              value={message}
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
          <div
            className={!inViewContact ? "contact-item" : "contact-item animate"}
          >
            <button disabled={isSent} style={{height: '52px'}} className="submit-btn">
              {isLoading ? (
                <ThemeProvider theme={theme}>
                  <CircularProgress size={30} />
                </ThemeProvider>
              ) : (
                "submit"
              )}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
