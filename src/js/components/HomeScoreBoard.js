import React from "react"
import styled from "styled-components"
import basketball from "img/basketball.png"

const HomeScoreBoard = () => {
    return (
        <div className="about-sports">
            <div className="about-sports-heading">
                <h2>All Sports</h2>
            </div>

            <div className="about-sports-scores">
                <h2>Name of the League</h2>
                <hr />
                <div className="live-scores">
                    <img src={basketball} />
                    <h3>Team Name 1</h3>
                    <h3>Score 1</h3>
                    <h3>Score 2</h3>
                    <h3>Team Name 2</h3>
                </div>
                <div className="live-scores">
                    <img src={basketball} />
                    <h3>Team Name 1</h3>
                    <h3>Score 1</h3>
                    <h3>Score 2</h3>
                    <h3>Team Name 2</h3>
                </div>
            </div>
         </div>   
    )
}

export default HomeScoreBoard