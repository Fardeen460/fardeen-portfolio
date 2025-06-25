import React from 'react';
import profile from '../assets/profile.jpg';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="hero">
      {/* IMAGE FIRST */}
      <motion.img
        className="hero-img"
        src={profile}
        alt="Fardeen"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />

      {/* TEXT SECOND */}
      <div className="hero-text">
        <h1>Hi, I’m Fardeen Mansoori 👋</h1>
        <p className="intro">
          I'm a passionate Full-stack Web and Android App Developer, currently pursuing my B.Tech in Computer Science from Sharda University.
          <br /><br />
          I love building creative web apps using React, and Android apps with Java. I've published ML research with IEEE, and built projects like a YouTube clone, video player, academic scheduler, and business website.
          <br /><br />
          I'm a team player, problem solver, and tech enthusiast who enjoys turning real-world problems into elegant software solutions.
        </p>
        <div className="social-icons">
          <a href="https://www.instagram.com/fardeen_9355/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/fardeen.mansoori.9809" target="_blank" rel="noreferrer">Facebook</a>
          <a href="mailto:fardeenmansoori998@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
