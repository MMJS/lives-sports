import React from "react"
import "css/content.css"
import HomeScoreBoard from "components/HomeScoreBoard"
import ContentHeading from "components/ContentHeading"
import ContentCategory from "components/ContentCategory"
import styled from "styled-components"

const CardContainerArticle = styled.article`
    display: grid;
    grid-template-columns: 20% 70%;
    padding: 2em;
    grid-gap:1em;
    width: 100%;
`

const Content = () => {
    return (
        <section>
            <article >
                <ContentHeading/>
                <CardContainerArticle>
                    <ContentCategory/>
                    <HomeScoreBoard/>
                </CardContainerArticle>
            </article>
        </section>
    )
}

export default Content