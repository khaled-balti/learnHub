import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutImage from "../../../img/about.jpg";
import classes from "./Section.module.css";
import { motion, useAnimation, useInView } from "framer-motion";

const FirstSection = (props) => {
  const imageRef = useRef();
  const imageIsInView = useInView(imageRef, { once: true });
  const imgcontrols = useAnimation();
  useEffect(() => {
    if (imageIsInView) {
      imgcontrols.start("visibleImg");
    }
  }, [imageIsInView]);

  const slogonRef = useRef();
  const slogonIsInView = useInView(slogonRef, { once: true });
  const slogoncontrols = useAnimation();
  useEffect(() => {
    if (slogonIsInView) {
      slogoncontrols.start("visibleSlogon");
    }
  }, [slogonIsInView]);

  const titleRef = useRef();
  const titleIsInView = useInView(titleRef, { once: true });
  const titlecontrols = useAnimation();
  useEffect(() => {
    if (titleIsInView) {
      titlecontrols.start("visibleTitle");
    }
  }, [titleIsInView]);

  const firstParagraphRef = useRef();
  const firstParagraphIsInView = useInView(firstParagraphRef, { once: true });
  const firstParagraphcontrols = useAnimation();
  useEffect(() => {
    if (firstParagraphIsInView) {
      firstParagraphcontrols.start("visibleFirstParagraph");
    }
  }, [firstParagraphIsInView]);

  const secondParagraphRef = useRef();
  const secondParagraphIsInView = useInView(secondParagraphRef, { once: true });
  const secondParagraphcontrols = useAnimation();
  useEffect(() => {
    if (secondParagraphIsInView) {
      secondParagraphcontrols.start("visibleSecondParagraph");
    }
  }, [secondParagraphIsInView]);

  const starsRef = useRef();
  const starsIsInView = useInView(starsRef, { once: true });
  const starscontrols = useAnimation();
  useEffect(() => {
    if (starsIsInView) {
      starscontrols.start("visibleStars");
    }
  }, [starsIsInView]);

  return (
    <div className={`container ${classes.cont}`}>
      <div className={`row mx-auto mx-lg-0`}>
        <div className={`col-lg-6 col-12  ${classes.part} me-xl-4`}>
          <motion.img
            src={AboutImage}
            alt="error"
            className={`${classes.part} image-fluid`}
            ref={imageRef}
            variants={{
              hiddenImg: { opacity: 0, y: 150 },
              visibleImg: { opacity: 1, y: 0 },
            }}
            initial="hiddenImg"
            animate={imgcontrols}
            whileHover={{ scale: 1.2 }}
            transition={{
              y: { duration: 0.4, ease: "easeInOut", delay: 1 },
              opacity: { duration: 0.4, ease: "easeInOut", delay: 1 },
            }}
          />
        </div>
        <div className={`col-lg-6 col-md-12 ${classes.part} d-flex flex-column pt-2`}>
          <motion.h5
            className={`${classes.title} text-center text-lg-start`}
            ref={slogonRef}
            variants={{
              hiddenSlogon: { opacity: 0, y: 150 },
              visibleSlogon: { opacity: 1, y: 0 },
            }}
            initial="hiddenSlogon"
            animate={slogoncontrols}
            transition={{
              y: { duration: 0.4, ease: "easeInOut", delay: 1.2 },
              opacity: { duration: 0.4, ease: "easeInOut", delay: 1.2 },
            }}
          >
            About Us
          </motion.h5>
          <motion.h1
            className={`${classes.subtitle} text-center text-lg-start`}
            ref={titleRef}
            variants={{
              hiddenTitle: { opacity: 0, y: 150 },
              visibleTitle: { opacity: 1, y: 0 },
            }}
            initial="hiddenTitle"
            animate={titlecontrols}
            transition={{
              y: { duration: 0.4, ease: "easeInOut", delay: 1.4 },
              opacity: { duration: 0.4, ease: "easeInOut", delay: 1.4 },
            }}
          >
            Welcome To Elearning
          </motion.h1>
          <motion.p
            className={`text-center text-lg-start text-black-50 mb-4 fs-5`}
            ref={firstParagraphRef}
            variants={{
              hiddenFirstParagraph: { opacity: 0, y: 150 },
              visibleFirstParagraph: { opacity: 1, y: 0 },
            }}
            initial="hiddenFirstParagraph"
            animate={firstParagraphcontrols}
            transition={{
              y: { duration: 0.4, ease: "easeInOut", delay: 1.6 },
              opacity: { duration: 0.4, ease: "easeInOut", delay: 1.6 },
            }}
          >
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </motion.p>
          <motion.p
            className={`text-center text-lg-start text-black-50 mb-4 fs-5`}
            ref={secondParagraphRef}
            variants={{
              hiddenSecondParagraph: { opacity: 0, y: 150 },
              visibleSecondParagraph: { opacity: 1, y: 0 },
            }}
            initial="hiddenSecondParagraph"
            animate={secondParagraphcontrols}
            transition={{
              y: { duration: 0.4, ease: "easeInOut", delay: 1.6 },
              opacity: { duration: 0.4, ease: "easeInOut", delay: 1.6 },
            }}
          >
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </motion.p>
          <div className="container ">
            <div className="row">
              <div className="col-sm-6">
                <p>
                  <motion.i
                    className={`fa fa-star ${classes.icons} me-1`}
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  ></motion.i>
                  <motion.span
                    className="text-black-50 fs-5"
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  >
                    Skilled Instructors
                  </motion.span>
                </p>
                <p>
                  <motion.i
                    className={`fa fa-star ${classes.icons} me-1`}
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  ></motion.i>
                  <motion.span
                    className="text-black-50 fs-5"
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  >
                    International Certificates
                  </motion.span>
                </p>
                <p>
                  <motion.i
                    className={`fa fa-star ${classes.icons} me-1`}
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  ></motion.i>
                  <motion.span
                    className="text-black-50 fs-5"
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  >
                    Online Classes
                  </motion.span>
                </p>
              </div>
              <div className={`col-sm-6 ${classes.stars}`}>
              <p>
                  <motion.i
                    className={`fa fa-star ${classes.icons} me-1`}
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  ></motion.i>
                  <motion.span
                    className="text-black-50 fs-5"
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  >
                    Online Classes
                  </motion.span>
                </p>
                <p>
                  <motion.i
                    className={`fa fa-star ${classes.icons} me-1`}
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  ></motion.i>
                  <motion.span
                    className="text-black-50 fs-5"
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  >
                    International Certificates
                  </motion.span>
                </p>
                <p>
                  <motion.i
                    className={`fa fa-star ${classes.icons} me-1`}
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  ></motion.i>
                  <motion.span
                    className="text-black-50 fs-5"
                    ref={starsRef}
                    variants={{
                      hiddenStars: { opacity: 0, y: 150 },
                      visibleStars: { opacity: 1, y: 0 },
                    }}
                    initial="hiddenStars"
                    animate={starscontrols}
                    transition={{
                      y: { duration: 0.4, ease: "easeInOut", delay: 2 },
                      opacity: { duration: 0.4, ease: "easeInOut", delay: 2 },
                    }}
                  >
                    Skilled Instructors
                  </motion.span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
