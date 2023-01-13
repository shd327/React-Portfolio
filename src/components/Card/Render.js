import React from "react";
import Card from "../Card/Card";
// import tt from "../../assets/img/work_scheduler.gif"
import work_scheduler from "../img/work_scheduler.gif";
import team_profile_generator from "../img/team_profile_generator.PNG";
import social_media_api from "../img/social_media_api.gif";
import quiz from "../img/quiz.gif";
import password from "../img/password.gif";
import jate from "../img/jate.gif";
import horizon from "../img/horizon.png";
import gamerQ from "../img/gamerQ.png";
import employee_tracker from "../img/employee_tracker.PNG";
import ecommerce from "../img/ecommerce.gif";
import note_taker from "../img/note_taker.png";
import readme from "../img/readme.PNG";
import weather from "../img/weather.gif";
import holiday from "../img/holiday.gif";
// import './Projects.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const projects = [
  {
    name: "Holiday Wishlist App!",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/Darin1027/Holiday-Wishlist-App",
    img: holiday,
  },
  {
    name: "G-Query : Video Game Search Engine",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/AndyLaBorde/G-Query",
    img: gamerQ,
  },
  {
    name: "Employee-Tracker",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Employee-Tracker",
    img: employee_tracker,
  },
  {
    name: "Note Taker",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Note-Taker",
    img: note_taker,
  },
  {
    name: "Note Taker",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327?tab=repositories",
    img: ecommerce,
  },
  {
    name: "Team-Profile-Generator",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Team-Profile-Generator",
    img: team_profile_generator,
  },
  {
    name: "README.md GENERATOR",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/ReadMe-Generator",
    img: readme,
  },
  {
    name: "Weather Dashboard",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/weather-dashboard",
    img: weather,
  },
  {
    name: "Text-Editor",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Text-Editor",
    img: jate,
  },
  {
    name: "Social-Network-API",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Social-Network-API",
    img: social_media_api,
  },
  {
    name: "Work-Scheduler",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Work-Scheduler",
    img: work_scheduler,
  },
  {
    name: "Geography-Trivia-Game",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Geography-Trivia-Game",
    img: quiz,
  },
  {
    name: "Password-Generator",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    githubLink: "https://github.com/shd327/Password-Generator",
    img: password,
  },
  // {
  //     name: "Refactoring-Horiseon-Webpage",
  //     description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  //     githubLink: "https://github.com/shd327/refactoring-Horiseon-Webpage",
  //     img: horizon,
  // }
];

export default function Render() {
  return (
    <Container id="projects">
      <Row xs={1} md={3}>
        {projects.map((project) => (
          <Card
            className="list-group-item"
            name={project.name}
            description={project.description}
            githubLink={project.githubLink}
            img={project.img}
          ></Card>
        ))}
      </Row>
    </Container>
  );
}
