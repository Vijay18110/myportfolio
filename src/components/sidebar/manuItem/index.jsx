import * as React from "react";
import { motion } from "framer-motion";
import { TiHomeOutline } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { RiContactsFill } from "react-icons/ri";
import { ctx } from "../../../store/context";
import { useNavigate } from "react-router-dom";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
const colors = [<TiHomeOutline size={40} />, <GrProjects size={40} />, <MdOutlineRoundaboutRight size={40} />, <MdCastForEducation size={40} />, <GiSkills size={40} />, <RiContactsFill size={40} />,];
export const MenuItem = ({ i, text, toggle, setToggle }) => {
  const naviagte = useNavigate();
  const onNavigate = (p) => {
    naviagte(`/${text}`);
    setToggle();
  }
  const { GetManuName } = React.useContext(ctx);
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      onClick={() => { onNavigate(text) }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" >{colors[i]}</div>
      <div className="text-placeholder" >{text}</div>
    </motion.li>
  );
};
