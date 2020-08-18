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



const App = () => {
    return (
        <Router>
               <Header />
            <div>
            <Header />
            <MainPage/>
            <Switch >

                <Route exact path ="/" component = {App}/>
                <Route path ="/NewsPage" component = {NewsPage}/>
                <Route path ="/NewsGrid" component = {NewsGrid}/>
            </Switch>
             
       

                <Footer />
            </div>
            
        </Router>

    )


}

export default App