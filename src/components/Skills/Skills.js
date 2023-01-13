import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Skills.css";
export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container id="skills">
        <Row>
          <Col id="skills_head">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h3 class="display-4">Download my Resume</h3>
                <p class="lead">Feel free to contact me for any questions</p>
                <a
                  href="./Sid_Desai_Resume.docx"
                  target="_blank"
                  download="Sid_Desai_Resume.docx"
                >
                  <Button>Download Resume</Button>{" "}
                </a>
              </div>
            </div>
          </Col>
          <Col id="progress-bar-col">
            <ProgressBar id="bar" variant="info" now={20} label="JavaScript" />
            <ProgressBar id="bar" variant="warning" now={60} label="HTML" />
            <ProgressBar id="bar" variant="info" now={80} label="CSS" />
            <ProgressBar id="bar" variant="warning" now={80} label="React" />
            <ProgressBar id="bar" variant="info" now={80} label="GraphQL" />
            <ProgressBar
              id="bar"
              variant="warning"
              now={80}
              label="MongoDB/Mongoose"
            />
            <ProgressBar id="bar" variant="info" now={80} label="Express" />
            <ProgressBar
              id="bar"
              variant="warning"
              now={80}
              label="Handlebars"
            />
            <ProgressBar id="bar" variant="info" now={80} label="SQL/mySQL" />
            <ProgressBar id="bar" variant="warning" now={80} label="Java" />
            <ProgressBar id="bar" variant="info" now={80} label="C++" />
            <ProgressBar id="bar" variant="warning" now={80} label="C" />
            <ProgressBar id="bar" variant="info" now={80} label="C#" />
            <ProgressBar id="bar" variant="warning" now={80} label="JQeury" />
            <ProgressBar
              id="bar"
              variant="info"
              now={80}
              label="Linux/Unix/Windows"
            />
            <ProgressBar id="bar" variant="warning" now={80} label="Jenkins" />
            <ProgressBar
              id="bar"
              variant="info"
              now={80}
              label="FileNet/McLaren"
            />
            <ProgressBar id="bar" variant="warning" now={80} label="SiteCore" />
            <ProgressBar id="bar" variant="info" now={80} label=".NET" />
            <ProgressBar id="bar" variant="warning" now={80} label="Apollo" />
            <ProgressBar id="bar" variant="info" now={80} label="Insomnia" />
            <ProgressBar
              id="bar"
              variant="warning"
              now={80}
              label="Mongo Compass"
            />
            <ProgressBar id="bar" variant="info" now={80} label="Azure" />
            <ProgressBar id="bar" variant="warning" now={80} label="Vagrant" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

{
  /* <section className="skill" id="skills">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                    {/* <Container style={{ width: 200, height: 200 }}> */
}
{
  /* <Row className='align-items-center' style={{ width: 200, height: 200 }}>
    <Col xs={12} md={6} xl={7}>

        <CircularProgressbar class="circle" value={80} text={'react'} />


    </Col>
    <Col>
        <CircularProgressbar class="circle" value={80} text={'react'} />
    </Col>
    <Row>
        <Col xs={12} md={6} xl={7}>

            <CircularProgressbar class="circle" value={80} text={'react'} />


        </Col>
    </Row>
</Row> */
}

{
  /* </Container> */
}

//                 </div >
//             </div >
//         </div >
//     </div >
//     <img className="background-image-left" src={'colorSharp'} alt="Image" />
// </section > * /}
