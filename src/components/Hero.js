import React from "react"

export default function Hero() {
    return (
        <section className="hero--section">
            <img className="gridphoto" src={require("../images/photo-grid.png")} width="395" />

            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}