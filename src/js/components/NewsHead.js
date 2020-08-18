import React from "react"
import "css/news.css"
import img from "img/bluejays.jpg"
const NewsHead = () => {
    return (
        <section>
        <article class="banner-image">
            <img  src={img} alt="Banner Image" />
            <div class="banner-heading">
                <h1>Toronto Blue Jays to play home games in Buffalo during 2020 MLB season</h1>

            </div>
        </article>
    </section>


    )
}

export default NewsHead