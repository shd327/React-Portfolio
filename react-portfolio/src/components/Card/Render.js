import React from 'react'
import Card from '../Card/Card'
// import tt from "../../assets/img/work_scheduler.gif"
import work_scheduler from "../img/work_scheduler.gif"
import team_profile_generator from "../img/team_profile_generator.PNG"
import social_media_api from "../img/social_media_api.gif"
import quiz from "../img/quiz.gif"
import password from "../img/password.gif"
import jate from "../img/jate.gif"
import horizon from "../img/horizon.png"
import gamerQ from "../img/gamerQ.png"
import employee_tracker from "../img/employee_tracker.PNG"
import ecommerce from "../img/ecommerce.gif"
import note_taker from "../img/note_taker.png"
import readme from "../img/readme.PNG"
import weather from "../img/weather.gif"
import holiday from "../img/holiday.gif"
// import './Projects.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const projects = [
    {
        name: "Holiday Wishlist App!",
        description: "Focus on what matters when it comes to the holidays! What presents will I get????? Take the guessing game out of the holidays and let your friends know what you want. You will be able to see your friends wishlists as well. Now you will never need to worry about a pile up of tchotchke gifts!",
        githubLink: "https://github.com/Darin1027/Holiday-Wishlist-App",
        img: holiday,

    },
    {
        name: "G-Query : Video Game Search Engine",
        description: "Our mission is to create an application to help gamers find their next game with ease. The gaming community is spread far and wide and it was our job to consolidate all games for the convenience of the user. With G-Query a user can search by genre, platform, and the game name itself. As a user you will be provided with a library of games based on your criteria giving you game ratings, infomforamtion on the game as well as a link to watch the gameplay on Youtube. Additonally we added a new feature to test your knowledge of gaming with a trivia game.",
        githubLink: "https://github.com/AndyLaBorde/G-Query",
        img: gamerQ,

    },
    {
        name: "Employee-Tracker",
        description: "The purpose of this project was to create a command-line application to manage a company's database. The database consist of three tables role, employee and department (shown below). The user will be prompted with a series of choices (shown below) and dpending on their selection they will be able to view/write/delete to the database tables based one their selection. All the results will diplay on the users console.",
        githubLink: "https://github.com/shd327/Employee-Tracker",
        img: employee_tracker,

    },
    {
        name: "Note Taker",
        description: "The purpose of this project was to build a application to help track my notes and store my notes in file (JSON). This project utilizes express, node and is deployed on heroku. The user has an option to post a new note, delete an existing note and of course view any old note.",
        githubLink: "https://github.com/shd327/Note-Taker",
        img: note_taker,
    },
    {
        name: "Note Taker",
        description: "The purpose of this project was to complete a e-commerce sites backend processing using Express.js API, Sequelize, dotenv and Insomnia. The user is able to perform GET,POST,PUT and DELETE operation for categories, products and tags for their e-commerce company.",
        githubLink: "https://github.com/shd327?tab=repositories",
        img: ecommerce,
    },
    {
        name: "Team-Profile-Generator",
        description: "The purpose of this project was to build a command-line base application to generate a team profile html page. The user will be prompted with a series of questions through the command line using Inquirer and their answers are later used to generate the HTML page. The profiles are broken down into three role types: manager, intern and engineer. The user is only allowed one manager however has the ability to add as many interns and engineers as desired. Once the user is done adding interns and engineer profiles they can select “Finish building my team” in the command line options and this will generate the final HTML team profile page.",
        githubLink: "https://github.com/shd327/Team-Profile-Generator",
        img: team_profile_generator,
    },
    {
        name: "README.md GENERATOR",
        description: "The purpose of this project was to develop a ReadMe.md through the command line. The project leverages technologies such as node.js javascript, inquirer and the file system library. The user is prompted with questions and the answers are stored and later used in generating the ReadMd.md file",
        githubLink: "https://github.com/shd327/ReadMe-Generator",
        img: readme,
    },
    {
        name: "Weather Dashboard",
        description: "The purpose of this project was to create a weather dashboard using openweathermap API. The user can enter any location around the world and view the current forecast as well as the future five day forecast. If the location the user inputs is invalid a alert will pop up asking the user to input a valid location. Lastly leveraging local storage the user can still maintain their saved location upon reloading the page. This application used a multitude of technologies such as html, css, javascript and openweathermap.org",
        githubLink: "https://github.com/shd327/weather-dashboard",
        img: weather,
    },
    {
        name: "Text-Editor",
        description: "This project covers J.A.T.E (ust another text editor). JATE is a text editor that runs in the browser. This is a single-page application that meets the PWA criteria. One important concept from this project I learned was leveraging service workers. I was able to leverage to cache static CSS, JavaScript, HTML files, images, and even API requests. This allows developers to reduce network bandwidth and improve overall load times.",
        githubLink: "https://github.com/shd327/Text-Editor",
        img: jate,
    },
    {
        name: "Social-Network-API",
        description: "The objective here was to use Express.js, Compass, mongoose, mongoDB to build a social network API where the user can have a network of friends, react, and share opinions. With the power of Insomina we can fetch data from the mongo database and check the REST calls with Insomina",
        githubLink: "https://github.com/shd327/Social-Network-API",
        img: social_media_api,
    },
    {
        name: "Work-Scheduler",
        description: "The reasoning behind this project is to create a daily planner to keep track of my daily task. The design is using hour time blocks with the option to save the input text to local storage. By saving it to local storage I am able to get retrieve the data and render it onto the page as long as the local storage is not cleared. In addition, the user is able to see the current time with a red background, past time slots in gray, and future time slots in green.",
        githubLink: "https://github.com/shd327/Work-Scheduler",
        img: work_scheduler,
    },
    {
        name: "Geography-Trivia-Game",
        description: "The reason behind this coding quiz, is to help people learn more about global geography. There is a robust list of questions to really help someone get a good grasp of geography. Upon clicking the start quiz the timer will start as the user navigates through the questions. When the user clicks the start button the quiz will begin. The time will keep decrementing as the quiz is in play. Upong a wrong answer the time will decrement by order of magnitude more. When the user selects an answer the background will change to red for wrong and answer and green for correct answer. As well, as the \"wrong\" and \"correct\" text display. If the timer reaches 0 or if the user answers all the questions the timer will stop and be stored in local storage. The page will then display all the incorrect questions answered with there correct answer. The score will display at the top which is equal to the timer value at the end of the quiz. Also, a input will display requesting the user to input their initials. Upon the submit button the page will display all the scores from the quiz with the top score displayed in green and the lowest score displayed in red.",
        githubLink: "https://github.com/shd327/Geography-Trivia-Game",
        img: quiz,
    },
    {
        name: "Password-Generator",
        description: "This application was built to randomly generate passwords. Due to the ongoing struggles to keep personal data secure a strong password is one of the first steps to stop people with malicious intent to hack into a users personal accounts. By using a random password generated it will help secure the password with optional password strength levels. This project is free for anyone to use so they themself can feel safe and protected from hackers",
        githubLink: "https://github.com/shd327/Password-Generator",
        img: password,
    },
    {
        name: "Refactoring-Horiseon-Webpage",
        description: "The motivation of doing this assignment was for me to really dig down in the code and find ways to refactor it and make the code more semantically tuned.I wanted to get a better understanding on how to consolidate code as well as use proper semantic tags to make the code more readable and intuitive This refactored code solved a few problems with how the original code was not easy readable and had much repetitive css code. With my reactored code its much more clear and concise and easier to read. I learned a lot how to properly use specific tags throughout an HTML file. For example nav, section, main, footer and header. I also learned a lot on how to reference CSS properly.",
        githubLink: "https://github.com/shd327/refactoring-Horiseon-Webpage",
        img: horizon,
    }
]

export default function Render() {
    return (
        <Container>
            <Row xs={1} md={3}>
                {projects.map((project) => (
                    <Card className="list-group-item"
                        name={project.name} description={project.description} githubLink={project.githubLink} img={project.img}>

                    </Card>
                ))}
            </Row>
        </Container>
    )
}
