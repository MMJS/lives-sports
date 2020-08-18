import React from "react"
import styled from "styled-components"

const MainnavUl = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 1em 2em;
`
const LinksLi = styled.li`
    display: flex;
`
const ItemLi = styled.li`
    padding: 0em 1em;
`


const Header=()=>{
   return( <header>
        <nav>
            <MainnavUl>
                <li><h1>Logo</h1></li>
                <LinksLi>
                    <ItemLi><h3>About</h3></ItemLi>
                    <ItemLi><h3>ScoreCard</h3></ItemLi>
                    <ItemLi><h3>NewsFeed</h3></ItemLi>
                    <ItemLi><h3>Team Details</h3></ItemLi>
                </LinksLi>
            </MainnavUl>
        </nav>
    </header>
    )
}

export default Header