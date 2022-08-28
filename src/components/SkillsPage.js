import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

const SkillsPage = () => {
  return (
    <div className="padding skills-page">
      <div className="section-title">
        <p className="text-title text-dark">Skills</p>
        <motion.div
          className="animated-fill-div-dark"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        ></motion.div>
      </div>
      <div className="skills-grid">
        <Skill skill="Angular" value={90} number={0}/>
        <Skill skill="React JS" value={90} number={1}/>
        <Skill skill="REST API" value={90} number={2}/>
        <Skill skill="Databases" value={85} number={3}/>
        <Skill skill="CSS" value={85} number={4}/>
        <Skill skill="Node JS + Express" value={85} number={5}/>
        <Skill skill="Knex JS + Sequelize" value={80} number={6}/>
        <Skill skill="GraphQL" value={75} number={7}/>
      </div>
    </div>
  );
};

export default SkillsPage;
