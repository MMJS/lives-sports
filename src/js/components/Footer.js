import React from "react"
import styled from "styled-components"

const BottomFooterUl = styled.ul`
	display: flex;
    padding:0em 2em;
    background-color: #272525;
    justify-content: space-between;
    color: #A79D9D;
	margin:0em;
`

const BottomInlineLi = styled.li`
	display: inline;  
`



const Footer = ()=>{
    return(
        <footer>
		<section>
			<nav>
				<BottomFooterUl>
					<li className="bottom-list"><p>&copy;2020 Company Name.All rights are reserved.</p></li>
					<li className="bottom-list">
						<nav>
							<ul >
								<li className="item-inline"><a href="#">Privacy Policy |</a> </li>
								<li className="item-inline"><a href="#">Cookies Policy |</a></li>
								<li className="item-inline"><a href="#">Terms and Conditions</a></li>
							</ul>
						</nav>
					</li>
				</BottomFooterUl>
			</nav>
		</section>
	</footer>
    )

}

export default Footer