import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="padding footer">
      <motion.h3
        initial={{ transform: "translateY(-20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h3>
      <motion.div
        className="socials"
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/hamza-707">
          <FontAwesomeIcon icon={faGithub} size={"2x"} />
        </a>
        <a href="mailto:hamza.iftikhar707@gmail.com">
          <FontAwesomeIcon icon={faGoogle} size={"2x"} />
        </a>
        <a href="https://www.linkedin.com/in/hamza-iftikhar-59254a242/">
          <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
