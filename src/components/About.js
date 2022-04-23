import React from 'react'
import js from "../assets/js.JPG";
import github from "../assets/github.JPG";

const About = ({ mode }) => {
    return (
        <div className="container" style={{ marginTop: "7rem" }}>
            <div className="d-flex flex-column d-sm-flex flex-sm-row">
                <div id='image'>
                    <a href="https://github.com/lunatic-7" target='_blank' rel="noreferrer"><img src={github} className="img-thumbnail image" alt="Github" /></a>
                </div>
                <div id='text'>
                    {/* <p>Hey There, Delilah!</p> */}
                    <table className={`table text-${mode === "dark" ? "light" : "dark"}`}>
                        <thead>
                            <tr>
                                <th scope="col">Access my GitHub to get:</th>
                                {/* <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <a className={`aStyle text-${mode === "dark" ? "light" : "dark"}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/lunatic-7/ZTM-git-">1.
                                        <i className='weight'> Python Notes</i>
                                    </a>
                                </th>
                                <td><i className="fa-brands fa-python"></i></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <a className={`aStyle text-${mode === "dark" ? "light" : "dark"}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/lunatic-7/html_course-git-">2.
                                        <i className='weight'> HTML Notes</i>
                                    </a>
                                </th>
                                <td><i className="fa-brands fa-html5"></i></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <a className={`aStyle text-${mode === "dark" ? "light" : "dark"}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/lunatic-7/css_course-git-">3.
                                        <i className='weight'> CSS Notes</i>
                                    </a>
                                </th>
                                <td><i className="fa-brands fa-css3"></i></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <a className={`aStyle text-${mode === "dark" ? "light" : "dark"}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/lunatic-7/C-course-git">4.
                                        <i className='weight'> C Notes</i>
                                    </a>
                                </th>
                                <td><i className="fa-brands fa-c"></i></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <a className={`aStyle text-${mode === "dark" ? "light" : "dark"}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/lunatic-7/git-JavaScript-cwh">5.
                                        <i className='weight'> JavaScript Notes</i>
                                    </a>
                                </th>
                                <td><i className="fa-brands fa-js"></i></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <a className={`aStyle text-${mode === "dark" ? "light" : "dark"}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/lunatic-7/dsa_git">6.
                                        <i className='weight'> DSA Notes</i>
                                    </a>
                                </th>
                                <td><i className="fa-solid fa-a"></i></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <a className={`aStyle text-${mode === "dark" ? "light" : "dark"}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/lunatic-7?tab=repositories">7.
                                        <i className='weight'> And many more stuffs...</i>
                                    </a>
                                </th>
                                <td><i className="fa-solid fa-angles-right"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p className={`text-${mode === "dark" ? "light" : "dark"}`} style={{ marginTop: "5em" }}>Hover and 'click' on image to access these <b>JavaScript</b> notes!</p>
            <a href="https://casa-js.netlify.app/" target="_blank" rel="noreferrer" ><img src={js} className="img-fluid" alt="JavaScript" /></a>
        </div>
    )
}

export default About