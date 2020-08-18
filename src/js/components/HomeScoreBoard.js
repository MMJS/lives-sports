import React from "react"
import styled from "styled-components"

const HomeScoreBoard = () => {
    return (
        <div class="about-sports">
            <div class="about-sports-heading">
                <h2>All Sports</h2>
            </div>

            <div class="about-sports-scores">
                <h2>Name of the League</h2>
                <hr />
                <div class="live-scores">
                    <img src="img/basketball.png" />
                    <h3>Team Name 1</h3>
                    <h3>Score 1</h3>
                    <h3>Score 2</h3>
                    <h3>Team Name 2</h3>
                </div>
                <div class="live-scores">
                    <img src="img/basketball.png" />
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