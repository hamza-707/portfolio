import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import { motion } from "framer-motion";

const Skill = (props) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, transform: "translateY(20px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      transition={{ type: "tween", duration: 0.7, delay: props.number * 0.4 }}
      viewport={{ once: true }}
    >
      <CircularProgressBar value={props.value} number={props.number} />
      <p className="text-large text-center">{props.skill}</p>
    </motion.div>
  );
};

export default Skill;
