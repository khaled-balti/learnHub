import React, { useEffect, useRef } from "react";
import Title from "../../../UI/Title/Title";
import TemplateLocation from "./TemplateLocation";
import TemplateAppel from "./TemplateAppel";
import TemplateEmail from "./TemplateEmail";
import classes from "./Form.module.css";
import { motion, useInView, useAnimation } from "framer-motion";

const Panel = (props) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const item1IsInView = useInView(ref1, { once: true });
  const item2IsInView = useInView(ref2, { once: true });
  const item3IsInView = useInView(ref3, { once: true });
  const controller1 = useAnimation();
  const controller2 = useAnimation();
  const controller3 = useAnimation();
  useEffect(() => {
    if (item1IsInView) {
      controller1.start("visible1");
    }
  }, [item1IsInView]);
  useEffect(() => {
    if (item2IsInView) {
      controller2.start("visible2");
    }
  }, [item2IsInView]);
  useEffect(() => {
    if (item3IsInView) {
      controller3.start("visible3");
    }
  }, [item3IsInView]);
  return (
    <div className="my-5">
      <Title
        h5="Contact us"
        h1="Contact For Any Query"
        delay5="0.8"
        delay1="1"
      />
      <div className="container">
        <div className="row gy-2">
          <motion.div
            className="col-12 col-md-6 col-lg-4 mb-3"
            ref={ref1}
            variants={{
              hidden1: { opacity: 0, y: 150 },
              visible1: { opacity: 1, y: 0 },
            }}
            initial="hidden1"
            animate={controller1}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 1.2 }}
          >
            <h5>Get In Touch</h5>
            <p>
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
            </p>
            <TemplateLocation
              title="Office"
              contact="123 Street, New York, USA"
            />
            <TemplateAppel title="Mobile" contact="+012 345 67890" />
            <TemplateEmail title="Email" contact="info@example.com" />
          </motion.div>
          <motion.div
            className="col-12 col-md-6 col-lg-4 mb-3"
            ref={ref2}
            variants={{
              hidden2: { opacity: 0, y: 150 },
              visible2: { opacity: 1, y: 0 },
            }}
            initial="hidden2"
            animate={controller2}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 1.6 }}
          >
            <iframe
              class="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </motion.div>
          <motion.div
            className="col-12 col-md-6 col-lg-4"
            ref={ref3}
            variants={{
              hidden3: { opacity: 0, y: 150 },
              visible3: { opacity: 1, y: 0 },
            }}
            initial="hidden3"
            animate={controller3}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 2 }}
          >
            <form>
              <div className="d-flex justify-content-between align-items-center w-100 mb-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className={classes.text}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className={classes.text}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                required
                className={classes.subject}
              />
              <textarea
                placeholder="Message"
                className={classes.textarea}
              ></textarea>
              <button type="submit" className={classes.button}>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Panel;
