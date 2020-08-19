import React from "react"
import {Switch , Route} from "react-router"
import "css/app.css"
import {
    BrowserRouter as Router} from "react-router-dom"
import Header from "components/Header"
import Footer from "components/Footer"
import NewsGrid from "components/NewsGrid"
import NewsPage from "components/NewsPage"
import MainPage from "components/MainPage"
import Banner from "components/Banner"
import ScoreCard from "components/ScoreCard"
import TeamDetails from "components/teamDetails"


const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    
                    <Route exact path="/NewsPage" component={NewsPage} />
                    <Route exact path="/NewsGrid" component={NewsGrid} />
                    <Route exact path="/ScoreCard" render={(props)=> <ScoreCard {...props}team1="Man United" team2="Norwich City" game="FOOTBALL" /> }/>
                    <Route exact path="/" component={MainPage} />
                      <Route path ="/TeamDetails" component={TeamDetails}/>

                </Switch>
                <Footer/>
            </div>
     
        </Router>

    )


}

export default App