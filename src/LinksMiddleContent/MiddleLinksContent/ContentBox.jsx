import React from 'react'
import "./ContentBox.css"

const ContentBox = (props) => {
    return (
        <div className="middlebox">
            <h1>{props.title}</h1>
        </div>
    )
}

export default ContentBox
