import React from "react"

export default function Card(props) {

    let badgeText;

    if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
      badgeText = "ONLINE"
    }

    return (
        <div className="card--section">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={require(`../images/${props.coverImg}`)} />

            <div className="card--text">
              <div className="first--text">
                <img src={require("../images/star.png")} width="14" />
                <p className="text1">{props.stats.rating}</p>
                <p className="text2">({props.stats.reviewCount}) • </p>
                <p className="text2">{props.location}</p>
              </div>

              <p className="text3">{props.title}</p>
              <p className="text4"><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}