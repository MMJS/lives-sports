import React from "react"
import styled from "styled-components"



const Footer = ()=>{
    return(
        <footer>
		<section>
			<nav>
				<ul className="bottom-footer">
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
				</ul>
			</nav>
		</section>
	</footer>
    )

}

export default Footer