import React from 'react'

const Pdf = ({ pdf, topic, mode }) => {
    return (
        <>
            <a href={pdf} className={`list-group-item list-group-item-action list-group-item-${mode}`} aria-current="true" target="_blank" rel="noreferrer">{topic} <i className="fa-solid fa-file-pdf"></i></a>
            {/* <div className="list-group">
                <a href={pdf}  target="_blank" rel="noreferrer" className="list-group-item list-group-item-action" aria-current="true">
                    {topic}
                </a>
            </div> */}
        </>
    )
}

export default Pdf