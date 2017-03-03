import React, { Component } from 'react'

export default (props) => {
    const orient = props.orient || 'orient-right'
    const containerClass = 'spotlight style1 ' + orient + ' content-align-left image-position-center onscroll-image-fade-in'


    return (

        <section className={containerClass} >
            <div className="content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <ul className="actions vertical">
                    <li><a href="#" className="button">Learn More</a></li>
                </ul>
            </div>
            <div className="image">
                <img src={props.image} alt="" />
            </div>
        </section >
    )

} 
