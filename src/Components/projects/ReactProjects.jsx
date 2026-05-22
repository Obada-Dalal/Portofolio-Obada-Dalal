import "./styleProjects.css";
// icons
import { FaGithub } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const react = [
  {
    id: 1,
    image: "images/gym app.jpeg",
    title: "gym app",
    des: "The Gym App project is an interactive web application developed using the React library to create a modern and user‑friendly interface for managing and tracking workout exercises. The application focuses on delivering a smooth user experience. It relies on React components to build a dynamic interface, with clean code organization and performance optimizations to ensure fast responsiveness across different devices. This project aims to enhance my skills in front‑end development using React and in building practical, interactive user experiences.",
    source: "https://github.com/Obada-Dalal/Project-GymWebSite",
    view: "https://project-gymwebsite.netlify.app/"
  },
  {
    id: 2,
    image: "images/FreshFruits app.jpeg",
    title: "FreshFruits app",
    des: "FreshFruits App is an interactive web application built using React, with a strong focus on implementing smooth and engaging animations. The app showcases a collection of fruits in a modern and visually appealing way, enhanced by fluid transitions and motion effects that improve user interaction. It leverages React components to create a dynamic interface, along with animation techniques or libraries to deliver an enjoyable visual experience. This project aims to strengthen my skills in building animated, interactive user interfaces and enhancing user experience through motion design in React.",
    source: "https://github.com/Obada-Dalal/Project-Fresh-Fruits-using-React",
    view: "https://project-freshfruits.netlify.app/"
  },
  {
    id: 3,
    image: "images/estate app.jpeg",
    title: "estate app",
    des: "Estate App is an interactive real‑estate web application built using React, designed to provide a modern and user‑friendly interface for managing property buying, selling, and renting. The app functions similarly to a real‑estate office, allowing users to browse available properties, filter them by type, location, or price, and view detailed information for each listing in a clean and organized layout. It leverages React components to create a dynamic and responsive interface, with well‑structured code to ensure smooth performance across different devices. This project aims to strengthen my skills in front‑end development and in building practical, real‑world applications.",
    source: "https://github.com/Obada-Dalal/Project-EstateApp",
    view: "https://project-estateapp.netlify.app/"
  },
  {
    id: 4,
    image: "images/E-commerce_GO-STORE.png",
    title: "e-commerce website",
    des: "A complete e-commerce store for selling tech accessories. Built with React + Node.js/Express and MongoDB. Features an interactive user interface, shopping cart, order system, JWT authentication, and an admin dashboard for managing products, users, and advertisements. Images are hosted on Cloudinary, and the app is deployed on Render. Modern, fully responsive design.",
    source: "https://github.com/Obada-Dalal/frontend-go-store",
    view: "https://go-store.onrender.com"
  }
];
const newReact = react.reverse().map((e) => {
  return (
    <div className="all-projects" data-aos="fade-up" key={e.id}>
      <div className="image-all-projects">
        <img src={e.image} alt="" />
      </div>
      <div className="info-all-projects">
        <h2 data-aos="fade-right" data-aos-easing="ease-in-sine">
          {e.title}
        </h2>
        <p
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-delay="300"
        >
          {e.des}
        </p>
      </div>
      <div className="links-all-projects">
        <a href={e.source} target="_blank">
          <FaGithub /> GitHub
        </a>
        <a href={e.view} target="_blank">
          <LuSquareArrowOutUpRight /> Link
        </a>
      </div>
    </div>
  );
});
export default function ReactProjects() {
  return <div className="box-map">{newReact}</div>;
}
