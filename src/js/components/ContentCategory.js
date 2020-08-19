import React from "react"
import styled from "styled-components"
import bestimg from "img/best.png"
import football from "img/football.png"
import basketball from "img/basketball.png"
import volleyball from "img/volleyball.png"
import badminton from "img/badminton.png"

const ContentCategory = ()=>{
    return(
        <div className="sports">
                        <div className="sport-name">
                            <a href="">
                                <h3>All Sports</h3>
                                <img src={bestimg} className="sport-symbol" />
                            </a>
                        </div>
                        <div className="sport-name">
                            <a href="">
                                <h3>Football</h3>
                                <img src={football} className="sport-symbol" />
                            </a>
                        </div>
                        <div className="sport-name">
                            <a href="">
                                <h3>Badminton</h3>
                                <img src={badminton} className="sport-symbol" />
                            </a>
                        </div>
                        <div className="sport-name">
                            <a href="">
                                <h3>Volleyball</h3>
                                <img src={volleyball} className="sport-symbol" />
                            </a>
                        </div>
                        <div className="sport-name">
                            <a href="">
                                <h3>Basketball</h3>
                                <img src={basketball} className="sport-symbol" />
                            </a>
                        </div>
                    </div>
    )
}

export default ContentCategory