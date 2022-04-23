import React from 'react'

const Footer = ({mode}) => {
    return (
        <>
            <footer className={`text-center bgst-${mode}`}>
                {/* <!-- Grid container --> */}
                <div className="container pt-4">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">

                        {/* <!-- JavaScript --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://casa-js.netlify.app/"
                            role="button"
                            target='_blank'
                            rel="noreferrer"
                            data-mdb-ripple-color="dark"
                        ><i className={`fab fa-js text-${mode === "dark" ? "light" : "dark"}`}></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/wasif-nadeem-745225220/"
                            role="button"
                            target='_blank'
                            rel="noreferrer"
                            data-mdb-ripple-color="dark"
                        ><i className={`fab fa-linkedin text-${mode === "dark" ? "light" : "dark"}`}></i
                        ></a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/lunatic-7"
                            role="button"
                            target='_blank'
                            rel="noreferrer"
                            data-mdb-ripple-color="dark"
                        ><i className={`fab fa-github text-${mode === "dark" ? "light" : "dark"}`}></i
                        ></a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className={`text-center text-light p-3 ft`} style={{backgroundColor: "#212529"}}>
                    © 2022 Copyright: DSA
                    {/* <a className={`text-light`} href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    )
}

export default Footer