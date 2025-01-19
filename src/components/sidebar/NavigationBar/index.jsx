import * as React from "react";
import { animate, motion } from "framer-motion";
import { MenuItem } from "../manuItem";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    // animate: { display: "block" }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    // animate: { display: "none" }

  }
};
export const Navigation = ({ toggle, setToggle }) => (
  <motion.ul variants={variants} onClick={() => toggle()} >
    {itemIds.map((i, index) => (
      <MenuItem setToggle={setToggle} toggle={toggle} i={index} key={i} text={i} />
    ))}
  </motion.ul>
);
const itemIds = ["home", "project", "about", "education", "skills", "contact"];
