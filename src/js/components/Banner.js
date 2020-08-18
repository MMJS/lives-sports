import React from "react"

import banner1 from "img/banner-image2.jpg"
import styled from "styled-components"

const BannerImageArticle = styled.article`
position: relative;`

const BannerImageImg = styled.img`
    height: 80vh;
    width: 100%;
`
const BannerHeadingDiv = styled.div`
    position: absolute;
    top: 50%;
    width: 450px;
    left: 5%;
    transform: translate(0, -50%);
    border-radius: 5px;
    /* border: 1px red; */
    background: rgba(254,254,255,0.75);
    padding: 0.5em 1.5em;
`
const BannerHome = () => {
    return (
        <section>
            <BannerImageArticle>
                <BannerImageImg id="slide" src={banner1} alt="Banner Image" />
                < BannerHeadingDiv>
                    <h1>Lorem Ipsum</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni quos at veritatis maxime, tempora
                    repellendus facilis corrupti quisquam, ullam, veniam aliquid quis dolor?
					</h3>
                </BannerHeadingDiv>
            </BannerImageArticle>
        </section>

    )
}

export default BannerHome