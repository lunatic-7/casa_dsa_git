import React, { useEffect } from 'react'
import Prism from "prismjs";
import "../prism.css";

const Content = ({ mode, code, count, title, id }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={`flush-heading${count}`}>
                    <button className={`accordion-button collapsed bg-${mode} text-${mode === "dark" ? "light" : "dark"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${count}`} aria-expanded="false" aria-controls={`flush-collapse${count}`}>
                        {title}
                    </button>
                </h2>
                <div id={`flush-collapse${count}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${count}`} data-bs-parent="#accordionFlushExample">
                    <div id={id} className={`accordion-body accordbgst-${mode} text-${mode === "dark" ? "light" : "dark"}`}>
                        <pre id={`responsePre${id}`} className="language-javascript">
                            <code id={`responsePrism${id}`} className="language-javascript">
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Content