import React from "react"
import "css/content.css"
const Content = () => {
    return (
        <section>
            <article class="playing-match">
                <div class="flex-display">
                    <div class="heading">
                        <h1>Playing Now</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia dolorem maiores earum laborum, dicta aliquid, provident praesentium quam dolores labore aliquam ad enim distinctio libero consequatur optio at voluptatibus!</h3>
                    </div>
                </div>
                <div class="live-card-container">
                    <div class="sports">
                        <div class="sport-name">
                            <a href="">
                                <h3>All Sports</h3>
                                <img src="img/best.png" class="sport-symbol" />
                            </a>
                        </div>
                        <div class="sport-name">
                            <a href="">
                                <h3>Football</h3>
                                <img src="img/football.png" class="sport-symbol" />
                            </a>
                        </div>
                        <div class="sport-name">
                            <a href="">
                                <h3>Badminton</h3>
                                <img src="img/badminton.png" class="sport-symbol" />
                            </a>
                        </div>
                        <div class="sport-name">
                            <a href="">
                                <h3>Volleyball</h3>
                                <img src="img/volleyball.png" class="sport-symbol" />
                            </a>
                        </div>
                        <div class="sport-name">
                            <a href="">
                                <h3>Basketball</h3>
                                <img src="img/basketball.png" class="sport-symbol" />
                            </a>
                        </div>
                    </div>
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
                </div>
            </article>
        </section>
    )
}

export default Content