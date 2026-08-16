import "./styleContact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import successAnimation from "../../../public/animation/Success.json";
import contactusAnimation from "../../../public/animation/Contact us.json";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqargbpw");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [successKey, setSuccessKey] = useState(0);

  // نتتبع الانتقال من submitting=true إلى submitting=false
  const wasSubmitting = useRef(false);

  useEffect(() => {
    const finishedSubmitting = wasSubmitting.current && !state.submitting;

    if (finishedSubmitting) {
      const succeededNow =
        state.succeeded && (!state.errors || state.errors.length === 0);

      if (succeededNow) {
        // فرّغ الحقول
        setFormData({ name: "", email: "", message: "" });

        // أظهر الرسالة وأعد تشغيل Lottie
        setShowSuccess(true);
        setSuccessKey((k) => k + 1);

        // أخفِ الرسالة بعد 3 ثوانٍ
        const timer = setTimeout(() => {
          setShowSuccess(false);
        }, 4000);

        return () => clearTimeout(timer);
      }
    }

    wasSubmitting.current = state.submitting;
  }, [state.submitting, state.succeeded, state.errors]);

  return (
    <div className="box">
      <div className="container">
        <h1 id="Contact" data-aos="fade-up">
          Contact
        </h1>
        <div className="contact">
          <div className="social" data-aos="fade-right">
            <div className="content">
              <h3>Let's Connect</h3>
              <div className="box-content">
                <div className="icon phone">
                  <i></i>
                </div>
                <div className="text">
                  <p>Phone</p>
                  <p>+963947584270</p>
                </div>
              </div>
              <div className="box-content">
                <div className="icon email">
                  <i></i>
                </div>
                <div className="text">
                  <p>Email</p>
                  <p>obadaeiddalal@gmail.com</p>
                </div>
              </div>
              <div className="box-content">
                <div className="icon location">
                  <i></i>
                </div>
                <div className="text">
                  <p>Location</p>
                  <p>Syria,Damascus</p>
                </div>
              </div>
            </div>
            <div className="contact-us">
              <Lottie
                className="lottie-box"
                // loop={false}
                animationData={contactusAnimation}
                style={{
                  height: "550px"
                }}
              />
            </div>
          </div>

          <div className="form" data-aos="fade-left">
            <h3>Send Message</h3>

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="message">Message</label>
              <textarea
                rows="5"
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <div className="button">
                <button type="submit" disabled={state.submitting}>
                  <i className="fa-regular fa-paper-plane"></i>
                  {state.submitting ? "Send Message ..." : "Send Message"}
                </button>
              </div>

              {showSuccess && (
                <div
                  key={successKey} // يعيد تركيب العنصر لتشغيل Lottie كل مرة
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Lottie
                    loop={false}
                    animationData={successAnimation}
                    style={{ height: "37px" }}
                  />
                  <h3 style={{ fontSize: "16px", marginBottom: "0px" }}>
                    Your message has been sent successfully {"\uD83D\uDC4D"}
                  </h3>
                </div>
              )}
            </form>

            {state.errors && state.errors.length > 0 && (
              <p style={{ color: "red", marginTop: "8px" }}>
                Failed to send. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
