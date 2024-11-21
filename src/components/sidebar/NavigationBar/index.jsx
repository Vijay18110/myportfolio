import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../manuItem";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i, index) => (
      <MenuItem i={index} key={i} text={i} />
    ))}
  </motion.ul>
);

const itemIds = ["home", "project", "about", "education", "skills", "contact"];
