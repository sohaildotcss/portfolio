/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk-setup.jpg";

const imageAltText = "apple desktop with apple keyboard desk setup";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spotify Music Player",
    description:
      "A fully functional Spotify-inspired music player that lets users play songs, displays dynamic backgrounds, and shows detailed track information, all built with React and API integration.",
    url: "https://spotify-musicplayer.vercel.app/",
  },
  {
    title: "Cloud-Based Student Data Management System",
    description:
      "A Cloud-Based Student Data Management System built with Salesforce for the backend and Next.js with Tailwind CSS for the frontend, providing secure and efficient management of student records.",
    url: "https://heliums.netlify.app/",
  },
  {
    title: "My Web Development Journey: From Passion to Proficiency",
    description:
      "I began my web development journey out of curiosity to understand how websites work, which soon evolved into a passion for front-end technologies. Starting with HTML and CSS, I mastered JavaScript, React, and Tailwind CSS while building various projects. This journey has sharpened my technical skills, problem-solving, and design-thinking, laying a solid foundation for future growth.",
    url: "",
  },
  {
    title: "My Resume Site",
    description:
      "I am a Front-End Developer with experience in building responsive, dynamic web applications using technologies like React, Next.js, and Tailwind CSS. My resume highlights key projects, technical skills, and a passion for problem-solving, along with my focus on delivering user-friendly interfaces and clean code.",
    url: "https://flowcv.com/resume/06se2uvoah",
  },
  {
    title: "GitHub",
    description:
      "Welcome to my GitHub! Here, you'll find projects that highlight my web development journey, from front-end applications to full-stack solutions. I work with technologies like React, Next.js, and Tailwind CSS, focusing on responsive design and API integration. Check out my repositories for clean, maintainable code and my latest projects.",
    url: "https://github.com/sohaildotcss",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
