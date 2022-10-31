import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import img1 from '../assets/img/meter1.svg';
import img2 from '../assets/img/meter2.svg';
import img3 from '../assets/img/meter3.svg';
import colorGradient from '../assets/img/color-sharp (1).png'
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p> Here are my skills</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={img1} alt="meter" />
                                <h5> Team work skills </h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt="meter" />
                                <h5> Fast learner</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="meter" />
                                <h5> Communication skills </h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt="meter" />
                                <h5> Front-end development </h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="meter" />
                                <h5> Back-end development </h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="meter" />
                                <h5> Adaptable and open-minded </h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="meter" />
                                <h5> Knowledge of Agile Methodology </h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt="meter" />
                                <h5> Strong skills with HTML, JavaScript, and CSS</h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt="meter" />
                                <h5>Experience building applications with React</h5>
                            </div>
                            <div className="item">
                                <img src={img2} alt="meter" />
                                <h5> Excellent presentation skills</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="meter" />
                                <h5> Strong willingness to learn </h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt="meter" />
                                <h5> Great attention to detail </h5>
                            </div>
                            <div className="item">
                                <img src={img1} alt="meter" />
                                <h5> Excellent presentation skills</h5>
                            </div>
                            <div className="item">
                                <img src={img3} alt="meter" />
                                <h5>Command line interface</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorGradient} />
        </section>
        
    )
}
