import React from "react";
import { motion } from "framer-motion";
import Focused from "../images/focused.svg";
import ProblemSolver from "../images/problem-solver.svg";
import Details from "../images/details.svg";
import MobileFriendly from "../images/mobile-friendly.svg";
import QuickDelivery from "../images/quick-delivery.svg";

const AboutMe = () => {
  return (
    <div className="padding about-div">
      <div className="section-title">
        <p className="text-title text-light">About Me</p>
        <motion.div
          className="animated-fill-div-light"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        ></motion.div>
      </div>
      <div className="about-grid">
        <motion.div
          className="grid-item"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "tween",
          }}
        >
          <img className="item-img" src={Focused} alt="Focused" />
          <p className="text-large text-light">Focused on the task</p>
        </motion.div>
        <motion.div
          className="grid-item"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "tween",
            delay: 0.3,
          }}
        >
          <img className="item-img" src={ProblemSolver} alt="Problem Solver" />
          <p className="text-large text-light">Creative Problem Solver</p>
        </motion.div>
        <motion.div
          className="grid-item"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "tween",
            delay: 0.6,
          }}
        >
          <img className="item-img" src={Details} alt="Attention Detail" />
          <p className="text-large text-light">Attention to Detail</p>
        </motion.div>
        <motion.div
          className="grid-item"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "tween",
            delay: 0.9,
          }}
        >
          <img
            className="item-img"
            src={MobileFriendly}
            alt="Mobile-Friendly"
          />
          <p className="text-large text-light">Mobile Friendly Design</p>
        </motion.div>
        <motion.div
          className="grid-item"
          initial={{ opacity: 0, transform: "translateY(20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: "tween",
            delay: 1.2,
          }}
        >
          <img className="item-img" src={QuickDelivery} alt="Quick" />
          <p className="text-large text-light">Quick Delivery</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
