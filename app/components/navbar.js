"use client"
import Button from "./button";
import {motion} from 'framer-motion';

import HamburgerIcon from "../icons/hamburger";
import { useState } from "react";
import Image from "next/image";
import ExitIcon from "../icons/exitIcon";

const navVariants = {
  hidden: {
    opacity: 0,
    scale: .2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: .1,
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
    scale: .2
  },
  visible: {
    opacity: 1,
    scale: 1
  }
}

export default function Navbar() {

  const [visibleNav, setVisibleNav] = useState(false);
  const handleMobileNav = () => {
    setVisibleNav(!visibleNav);
  }


  return (
    <motion.header
    initial={{y: -100, opacity: 0}} 
    animate={{y: 0, opacity: 1, originY: 0}}
    className="
    z-50
    sticky 
    top-0 
    bg-white-theme
    dark:bg-black-theme 
    w-full 
    flex 
    justify-between 
    items-center 
    px-4
    lg:px-12 
    py-6 
    backdrop-blur-sm 
    bg-white-theme/90
    dark:bg-black-theme/90"
    >
      <span className="text-white-theme font-body text-2xl z-50">
        <a href="#">
          <Image
          src={'logo.svg'}
          className="main-logo"
          alt="Logo of Franco Juárez's web. A representation of his initials using white and orange colors."
          height={80}
          width={80}  
          />
        </a>
      </span>
      <nav>
        <motion.ul 
        variants={navVariants}
        initial={'hidden'}
        animate={'visible'}
        className="container text-black-theme dark:text-white-theme lg:flex items-center space-x-4 font-body hidden">
          <motion.li 
          variants={childVariants}
          >
            <a href="#about" className="before:content-['1.'] before:mr-0.5 dark:before:text-orange-theme before:text-orange-light-theme hover:text-orange-light-theme dark:hover:text-orange-theme cursor-pointer">
              About
            </a>
          </motion.li>
          <motion.li
          variants={childVariants}
          >
          <a href="#experience" className="before:content-['2.'] before:mr-0.5 dark:before:text-orange-theme before:text-orange-light-theme hover:text-orange-light-theme dark:hover:text-orange-theme cursor-pointer">
            Experience
          </a>
          </motion.li>
          <motion.li
          variants={childVariants}
          >
          <a href="#work" className="before:content-['3.'] before:mr-0.5 dark:before:text-orange-theme before:text-orange-light-theme hover:text-orange-light-theme dark:hover:text-orange-theme cursor-pointer">
            Work
          </a>
          </motion.li>
          <motion.li
          variants={childVariants}
          >
          <a href="#contact" className="before:content-['4.'] before:mr-0.5 dark:before:text-orange-theme before:text-orange-light-theme hover:text-orange-light-theme dark:hover:text-orange-theme cursor-pointer">
              Contact
            </a>
          </motion.li>
          <motion.li
          variants={childVariants}
          >
            <Button
            btnText={"Resumee"}
            link={"https://drive.google.com/file/d/1WW8K8pMbK7t4vQPNKVHOr1CSMDw3-uRN/view?usp=sharing"}
            />
          </motion.li>
        </motion.ul>
      </nav>
      <button
      onClick={handleMobileNav} className="lg:hidden z-50 ">
        {visibleNav ? <ExitIcon /> : <HamburgerIcon />}
      </button>
      <nav
      className={visibleNav ? "flex flex-col absolute top-0 right-0 lg:hidden z-0" : "hidden"}>
        <ul 
        className="flex flex-col items-center justify-center text-black-theme dark:text-white-theme text-center gap-8 backdrop-blur-sm 
        bg-white-theme dark:bg-black-theme/95 rounded-md w-screen min-h-screen text-xl font-body animate-fade-in-slow fill-mode-forwards"
        >
          <li>
            <a className="before:content-['1.'] before:mr-0.5 before:text-orange-theme hover:text-orange-theme" onClick={handleMobileNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a className="before:content-['2.'] before:mr-0.5 before:text-orange-theme hover:text-orange-theme" onClick={handleMobileNav} href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="before:content-['3.'] before:mr-0.5 before:text-orange-theme hover:text-orange-theme" onClick={handleMobileNav} href="#work">
              Work
            </a>
          </li>
          <li className="pb-4">
            <a className="before:content-['4.'] before:mr-0.5 before:text-orange-theme hover:text-orange-theme" onClick={handleMobileNav} href="#contact">
              Contact
            </a>
          </li>
          <li onClick={handleMobileNav}>
            <Button
            btnText={"Resumee"}
            link={"https://drive.google.com/file/d/1WW8K8pMbK7t4vQPNKVHOr1CSMDw3-uRN/view?usp=sharing"}
            >
              Resumee
            </Button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}