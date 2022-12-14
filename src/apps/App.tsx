import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavigationComponents } from '../libs/home/components/Navigater/Example';
import { TypeAnimation } from 'react-type-animation';
import Title from '../libs/home/components/Title/title';
import myPicture from "../libs/home/components/flower.png"
import SubTitle from '../libs/home/components/Title/subTitle';
import { motion, useScroll, useSpring } from "framer-motion";


function App() {
  return (
    <div className="home">
      <motion.article
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <NavigationComponents/>
        <div className = "title-item-list">
          <div className = "title-item">
            <Title />
            <SubTitle />
          </div>
          <img src={myPicture} width={500} height={500} />
        </div>
      </motion.article>
    </div>
  );
}

export default App;
