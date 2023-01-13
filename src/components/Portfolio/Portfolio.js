// import React, { useState } from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import Home from "../Home/Home";
// import Skills from "../../components/Skills/Skills";
// import Footer from "../Footer/Footer";
// import Projects from "../Projects/Projects";
// import Contact from "../Contact/Contact";
// // import AboutMe from '../../components/AboutMe/AboutMe';
// // import Home from '../../components/Home/Home';

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   // TODO: Add a comment describing the functionality of this method
//   const renderPage = () => {
//     if (currentPage === "Home") {
//       return <Home />;
//     }
//     // if (currentPage === 'About') {
//     //     return <AboutMe />;
//     // }
//     if (currentPage === "Skills") {
//       return <Skills />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }

//     if (currentPage === "Projects") {
//       return <Projects />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* // TODO: Add a comment describing what we are passing as props */}
//       <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* // TODO: Add a comment explaining what is happening on the following line */}
//       {renderPage()}
//       {/* <Footer /> */}
//     </div>
//   );
// }
