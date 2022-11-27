import "./App.scss";
import ProfileImg from "./img/mizuho_ptf.JPG";
import Courte from "./img/courte.png";
import Picbeak from "./img/picbeak.png";
import Scave from "./img/scave.png";

const App = () => {
    return (
        <div className="home">
            <div className="header">
                <h1>Mizuho Tohma</h1>
                <h2>Front-end Developer</h2>
                {/* <p>
                    When I finished one of my team projects, our instructor told
                    us that our app would be used by kids for an education
                    purpose. This really touched me because I realized tech can
                    help people dynamically. Once you crate an app, it could
                    benefit anyone in this world.
                </p>
                <p>
                    I have a three year flight attendant experience which is 180
                    degrees different from a developer. Thanks to the very
                    unique environment that I was working with different
                    colleagues and passengers every day, I earned great
                    communication skills to build a good teamwork. I am very
                    sure I utilize this skills as a developer.
                </p> */}
                <div className="imgHolder">
                    <img src={ProfileImg} alt="profile image" />
                </div>
            </div>

            <section className="projects">
                <div class="content-wrap divider">
                    <h2>Projects</h2>

                    <section className="project-item">
                        <img src={Courte} alt="course thumbnail" />
                        <h3>Courte</h3>
                        <p>
                            Courte is a mobile application which facilitates the
                            use and sharing of public Tennis courts with our
                            three primary features, Explore, Play and Match.
                        </p>

                        <div className="skills">
                            <div className="skill">React Native</div>
                            <div className="skill">Expo Go</div>
                            <div className="skill">GraphQL Apollo</div>
                            <div className="skill">NativeBase</div>
                        </div>
                    </section>

                    <section className="project-item">
                        <img src={Picbeak} alt="course thumbnail" />
                        <h3>Picbeak</h3>
                        <p>
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
                        <img src={Scave} alt="course thumbnail" />
                        <h3>Scave</h3>
                        <p>
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
                    <h2>Skills Set</h2>
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
                        <p>
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
                        <li>
                            <a href="mailto:mizuho.tohma72@gmail.com">
                                mizuho.tohma72@gmail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/mizuhotohma/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Mizzuu"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
