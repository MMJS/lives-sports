import React from "react"
import "css/app.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
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
                <Switch >
                    <Route exact path="/" component={MainPage} />
                    <Route path="/NewsPage" component={NewsPage} />
                    <Route path="/NewsGrid" component={NewsGrid} />
                    <Route path ="/TeamDetails" component={TeamDetails}/>
                </Switch>
                <ScoreCard team1="Man United" team2="Norwich City" game="FOOTBALL" />   
                <Footer/>
            </div>
        </Router>

    )


}

export default App