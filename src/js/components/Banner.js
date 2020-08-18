import React from "react"
import "css/BannerHome.css"
import banner1 from "img/banner-image2.jpg"
const BannerHome = () => {
    return (
        <section>
            <article className="banner-image">
                <img id="slide" src = {banner1} alt="Banner Image" />
                <div className="banner-heading">
                    <h1>Lorem Ipsum</h1>
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni quos at veritatis maxime, tempora
                    repellendus facilis corrupti quisquam, ullam, veniam aliquid quis dolor?
					</h3>
                </div>
            </article>
        </section>

    )
}

export default BannerHome