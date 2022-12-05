import "./App.scss";
import ProfileImg from "./img/mizuho_ptf.JPG";
import Courte from "./img/courte.png";
import Picbeak from "./img/picbeak.png";
import Scave from "./img/scave.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons/faSquareGithub";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const App = () => {
    return (
        <div className="home">
            <div className="header">
                <div className="text item">
                    <h1>Mizuho Tohma</h1>
                    <h2>Front-end Developer</h2>
                </div>
                <div className="imgHolder item">
                    <img src={ProfileImg} alt="profile" />
                </div>
            </div>

            <section className="projects">
                <div class="content-wrap divider">
                    <h2>Projects</h2>

                    <section className="project-item">
                        <img
                            className="project-img"
                            src={Courte}
                            alt="course thumbnail"
                        />
                        <div classsName="description">
                            <h3 className="title">Courte</h3>
                            <p className="para">
                                Courte is a mobile application which facilitates
                                the use and sharing of public Tennis courts with
                                our three primary features, Explore, Play and
                                Match.
                            </p>
                        </div>

                        <div className="skills">
                            <div className="skill">React Native</div>
                            <div className="skill">Expo Go</div>
                            <div className="skill">GraphQL Apollo</div>
                            <div className="skill">NativeBase</div>
                        </div>
                    </section>

                    <section className="project-item">
                        <img
                            className="project-img"
                            src={Picbeak}
                            alt="course thumbnail"
                        />
                        <h3 className="title">Picbeak</h3>
                        <p className="para">
                            Picbeak is an application which provides you with
                            dynamic and interactive bird information.This app
                            provides interactive bird database focused on
                            gamification features for children to increase
                            awareness of birds and their habitats.
                        </p>

                        <div className="skills">
                            <div className="skill">React</div>
                            <div className="skill">Node.js</div>
                            <div className="skill">Express.js</div>
                            <div className="skill">MongoDB</div>
                        </div>
                    </section>

                    <section className="project-item">
                        <img
                            className="project-img"
                            src={Scave}
                            alt="course thumbnail"
                        />
                        <h3 className="title">Scave</h3>
                        <p className="para">
                            Scave is a PWA that utilizes geolocation API to
                            donate and locate disposed items in your community.
                        </p>

                        <div className="skills">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">Sass</div>
                            <div className="skill">webpack</div>
                            <div className="skill">Firebase</div>
                            <div className="skill">PWA</div>
                            <div className="skill">jQuery</div>
                        </div>
                    </section>
                </div>
            </section>

            <section class="skills-set item-details">
                <div class="content-wrap divider">
                    <h2>Skill Set</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Node.js</li>
                        <li>Next.js</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>WordPress</li>
                        <li>Postman</li>
                        <li>Firebase</li>
                        <li>GraphQL</li>
                        <li>Git</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </section>

            <section class="education item-details">
                <div class="content-wrap">
                    <h2>Education</h2>

                    <section>
                        <h3>Langara College - Vancouver, BC</h3>
                        <p className="first">
                            Post-Degree Diploma of Web and Mobile App Design and
                            Development, 2021-2022
                        </p>
                    </section>

                    <section>
                        <h3>Gakushuin Women's College - Tokyo, Japan</h3>
                        <p>Bachelor of English Communication, 2012-2016</p>
                    </section>
                </div>
            </section>

            <div className="footer">
                <div class="content-wrap">
                    <h2>Let's Keep in Touch!</h2>

                    <ul className="contact-list">
                        <li className="top email">
                            <a href="mailto:mizuho.tohma72@gmail.com">
                                <FontAwesomeIcon icon={faEnvelope} />
                                mizuho.tohma72@gmail.com
                            </a>
                        </li>
                        <li className="top phone">
                            <a href="tel:6044184955">
                                <FontAwesomeIcon icon={faPhone} />
                                (604)-418-4955
                            </a>
                        </li>
                        <li className="btm linkedin">
                            <a
                                href="https://www.linkedin.com/in/mizuhotohma/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faLinkedin}
                                />
                            </a>
                        </li>
                        <li className="btm github">
                            <a
                                href="https://github.com/Mizzuu"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faSquareGithub}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>
                        <span className="otter">🦦 </span> Mizuho Tohma 2022
                        <span className="otter"> 🦦</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
