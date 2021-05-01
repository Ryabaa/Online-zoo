let mainPage = `
<section class="hero">
<div class="hero-container">
<h1 class="hero__title">Watch your favorite <span class="hero__title-span">animals online</span></h1>
<p class="hero__text">Observe different animals from around the world online in live time. Help vulunteers to take a good care of animals, donate to your favorite ones.</p>
<a href="" class="hero__link">Watch now</a>
        </div>
        <div class="hero-image">
        <img src="./assets/images/Panda.png" alt="Panda">
        <a class="hero-image__link" href="">
                <img src="./assets/icons/Frame.svg" alt="watch">
                </a>
        </div>
        <h2 class="how">How it works</h2>
        </section>
        <section class="about">
        <div class="about-container">
        <div class="about-card">
        <img src="./assets/icons/binoculars.svg" alt="" class="about-card__img">
        </div>
            <p class="about-container__text">Keep an eye on your favourite animals online</p>
            </div>
        <div class="about-container">
            <div class="about-card">
            <img src="./assets/icons/paw.svg" alt="" class="about-card__img">
            </div>
            <p class="about-container__text">Become a part of the communtity</p>
        </div>
        <div class="about-container">
            <div class="about-card">
                <img src="./assets/icons/heart.svg" alt="" class="about-card__img">
                </div>
                <p class="about-container__text">Support animals with the donations</p>
        </div>
        </section>
    <section>
    <img src="./assets/images/Illustrations-1.png" class="bg-image" alt="bg-image">
    </section>
    <section class="pets">
    <h2 class="pets-title">Pets in zoo</h2>
    <button class="pets-button">Choose your Favorite</button>
        <div class="pets-container">
            <div class="pets-container__card">
                <div class="pets-container__card-top">
                <a class="pets-container__card-link" href="#/zoos/pandas" id="zoos-pandas"><img src="./assets/images/Pandas.png" alt="pandas"></a>                    
                </div>
                <div class="pets-container__card-bottom">
                <h2 class="pets-container__card-title">Pandas</h2>
                <p class="pets-container__card-text">Shenshuping Gengda Panda Center</p>
                <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                </div>
                </div>
                <div class="pets-container__card">
                <div class="pets-container__card-top">
                <a class="pets-container__card-link" href="#/zoos/eagles" id="zoos-eagles"><img src="./assets/images/eagles.png" alt="eagles"></a>
                </div>
                <div class="pets-container__card-bottom">
                <h2 class="pets-container__card-title">Eagles</h2>
                    <p class="pets-container__card-text">Catalina Island</p>
                    <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                </div>
                </div>
                <div class="pets-container__card">
                <div class="pets-container__card-top">
                <a class="pets-container__card-link" href="#/zoos/gorillas" id="zoos-gorillas"><img src="./assets/images/gorrilas.png" alt="gorillas"></a>
                </div>
                <div class="pets-container__card-bottom">
                    <h2 class="pets-container__card-title">Gorillas</h2>
                    <p class="pets-container__card-text">GRACE gorillas</p>
                    <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                    </div>
                    </div>
            <div class="pets-container__card">
                <div class="pets-container__card-top">
                <a class="pets-container__card-link" href="#/zoos/alligators" id="zoos-alligators"><img src="./assets/images/aligators.png" alt="aligators"></a>
                </div>
                <div class="pets-container__card-bottom">
                <h2 class="pets-container__card-title">Aligators</h2>
                <p class="pets-container__card-text">St. Augustine's Alligator Farm Zoological Park</p>
                <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                </div>
                </div>
            <div class="pets-container__card">
            <div class="pets-container__card-top">
            <a class="pets-container__card-link" href=""><img src="./assets/images/elephants.png" alt="elephants"></a>
                </div>
                <div class="pets-container__card-bottom">
                <h2 class="pets-container__card-title">Elephants</h2>
                <p class="pets-container__card-text">Tembe Elephant Park</p>
                <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                </div>
                </div>
                <div class="pets-container__card">
                <div class="pets-container__card-top">
                <a class="pets-container__card-link" href=""><img src="./assets/images/lemurs.png" alt="lemurs"></a>
                </div>
                <div class="pets-container__card-bottom">
                <h2 class="pets-container__card-title">Lemurs</h2>
                    <p class="pets-container__card-text">Madagascar</p>
                    <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                    </div>
                    </div>
                    </div>
                    </section>
                    <section class="pay">
        <h2 class="pay-title">Pay and feed</h2>
        <button id="donate-open" class="pay-button">Donate to volunteers</button>
        <div class="pay-container">
        <div class="pay-container__circle pay-container__circle-1"></div>
            <p class="pay-container__text">You donate to your favourite animals</p>
            </div>
            <img src="./assets/images/arrow.svg" alt="" class="pay-arrow">
        <div class="pay-container">
        <div class="pay-container__circle pay-container__circle-2"></div>
        <p class="pay-container__text">Zoo Keepers feed animals with their favourite food</p>
        </div>
        <img src="./assets/images/arrow.svg" alt="" class="pay-arrow">
        <div class="pay-container">
        <div class="pay-container__circle pay-container__circle-3"></div>
        <p class="pay-container__text">Animals are healthy and happy</p>
        </div>
        </section>
        <section class="testimonials">
        <h2 class="testimonials-title">Testimonials</h2>
        <button id="feedback-open" class="testimonials-button">Leave feedback</button>
        <div class="testimonials-container">
        <div class="testimonials-tcard">
        <h3 class="testimonials-tcard__date">5 November 2020</h3>
        <p class="testimonials-tcard__text">Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </p>
        </div>
        <div class="testimonials-bcard">
        <img src="./assets/images/adam.png" alt="">
                <p class="testimonials-bcard__name">Adam, Spain</p>
                </div>
                </div>
        <div class="testimonials-container">
        <div class="testimonials-tcard">
        <h3 class="testimonials-tcard__date">12 January 2021</h3>
        <p class="testimonials-tcard__text">Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </p>
            </div>
            <div class="testimonials-bcard">
            <img src="./assets/images/chris.png" alt="">
                <p class="testimonials-bcard__name">Chris, Australia</p>
                </div>
        </div>
        <div class="testimonials-container">
        <div class="testimonials-tcard">
                <h3 class="testimonials-tcard__date">12 April 2020</h3>
                <p class="testimonials-tcard__text">Awesome place to observe my favourite aligators at Florida, the quality of the video is great. </p>
                </div>
            <div class="testimonials-bcard">
                <img src="./assets/images/amely.png" alt="">
                <p class="testimonials-bcard__name">Amely, USA</p>
            </div>
            </div>
            </section>
            <section class="animals">
            <h2 class="animals-title">Look at these beautiful animals</h2>
            <a href="#/zoos/pandas" id="zoos-pandas" class="animals-links"><img src="./assets/images/Pandas.png" class="animals-img" alt=""></a>
            <a href="#/zoos/gorillas" id="zoos-gorillas" class="animals-links"><img src="./assets/images/gorrilas.png" class="animals-img" alt=""></a>
            <a href="#/zoos/eagles" id="zoos-eagles" class="animals-links"><img src="./assets/images/eagles.png" class="animals-img" alt=""></a>
            <a href="#/zoos/alligators" id="zoos-alligators" class="animals-links"><img src="./assets/images/aligators.png" class="animals-img" alt=""></a>
            <a href="" class="animals-links"><img src="./assets/images/elephants.png" class="animals-img" alt=""></a>
            <a href="" class="animals-links"><img src="./assets/images/lemurs.png" class="animals-img" alt=""></a>
            <a href="#/zoos/pandas" id="zoos-pandas" class="animals-links"><img src="./assets/images/Pandas.png" class="animals-img" alt=""></a>
            </section>
            `;

export default mainPage;
