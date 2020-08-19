import React from "react"
import {Link} from "react-router-dom"
import "css/news.css"
import sugimg from "img/bluejays.jpg"
const NewsList = () => {
    return (
        <section>
   
            <div className="banner-heading">
                <h1>News and Updates</h1>
                <h3>All the latest news and updates. </h3>
				</div>
		
	
			<article className="playing-match">

                <div className="newsgrid">

                   <Link to ="/NewsPage"><div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
                        
                       </div>
                       </Link> 
                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>
                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>
                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>
                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>
                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>

                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>

                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>

                       <div className="newscard">
                        <div className="newsimg">
                        <a href="NewsPage"><img src={sugimg} /></a> 
                        </div>
                        <div className="newstitle">
                           Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                        </div>   
   
                       </div>

            </div>
            <hr/>
            </article>
		</section>
    )
}

export default NewsList