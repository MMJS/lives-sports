import React from "react"
import "css/news.css"
import sugimg from "img/bluejays.jpg"
const NewsContent = () => {
    return (
        <section>
        <article class="playing-match">

            <div class="news">
            <p>
            The Toronto Blue Jays have finally found a solution in their home ballpark search for the 2020 MLB season. The Blue Jays announced Friday that the club will play their 2020 home games at Sahlen Field, their Triple-A affiliate ballpark in Buffalo, New York during the 60-game campaign.
            After the Blue Jays were denied approval to play at their home ballpark, Rogers Centre, in Toronto,due to concerns over teams crossing the border amid the coronavirus (COVID-19) pandemic, they explored other options like splitting games with the Orioles and Pirates, at Camden Yards and PNC Park, respectively. The other option the Blue Jays explored was playing their home games at the club's spring training facility in Dunedin, Florida. But with Florida's ongoing COVID-19 surge, the spring training site was ruled out.
            The Blue Jays are set to begin their 2020 campaign Friday at Tropicana Field to face the Tampa Bay Rays. Toronto's first "home" series is scheduled for Wednesday, July 29 and Thursday, July 30, but the club will play the pair of games at Nationals Park against the Washington Nationals. According to The Athletic's Kaitlyn McGrath, the club will plan to play their home opener at Sahlen Field on July 31 against the Phillies or Aug. 11 against the Marlins. It's unclear how long the upgrades will take for the Buffalo ballpark.
            In the league's new geographically-based schedule for this season, teams will not venture outside their "regions" in an effort to contain extra exposure to COVID-19. With the Blue Jays playing their 2020 home games in Buffalo, it will work out fairly well in respect to travel for their AL East and NL East opponents. 
            </p>
            <p>Buffalo was one of the original options when the Blue Jays first encountered issues with playing at Rogers Centre, but players expressed their interest in wanting to play at a major-league level ballpark. Sahlen Field will require some reconfiguration of the clubhouse, workout facility and the ballpark lights, to bring the stadium up to par with an MLB ballpark. Some other concerns that would need to be addressed: the bullpen location being in playable foul territory as well as making sure there is enough space for social distancing among players and coaches. But, the Blue Jays organization figure this to be an easier option than to continue awaiting government approval for sharing a MLB ballpark. </p>
        
            <div class="newsgrid2">

                <div class="newscard">
                 <div class="newsimg">
                 <a href="NewsGrid"><img src={sugimg}/></a> 
                 </div>
                 <div class="newstitle">
                    Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                 </div>   

                </div>
                <div class="newscard">
                    <div class="newsimg">
                    <a href="NewsGrid"><img src={sugimg}/></a> 
                    </div>
                    <div class="newstitle">
                       Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                    </div>   

                   </div>
                   <div class="newscard">
                    <div class="newsimg">
                    <a href="NewsGrid"><img src={sugimg}/></a> 
                    </div>
                    <div class="newstitle">
                       Toronto Blue Jays to play home games in Buffalo during 2020 MLB season
                    </div>   

                   </div>

                   </div>
        
        </div>

        </article>
    </section>
    )
}

export default NewsContent