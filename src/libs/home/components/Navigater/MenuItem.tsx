import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./text-style.css"
interface MenuItem {
  index: number
}
type LinkRouteNumber = {
  index: number
}

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

const LinkRoute = (props:LinkRouteNumber): JSX.Element | null => {
  if(props.index === 0){
    return (
      <Link to="/" className="section-title">
        {sectionName[props.index]}
      </Link>
    )
  }else if(props.index === 1){
    return (
      <Link to="/works" className="section-title">
        {sectionName[props.index]}
      </Link>
    )
  }else{
    return <></>
  }
}

//const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const sectionName = [ "HOME" , "WORKS",]

export const MenuItem: React.FC<MenuItem> = ({ index }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      
      <LinkRoute 
        index={index}
      />
    </motion.li>
  );
};
