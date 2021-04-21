let main = document.querySelector(".main");
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
                    <a class="pets-container__card-link" href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')"><img src="./assets/images/Pandas.png" alt="pandas"></a>                    
                </div>
                <div class="pets-container__card-bottom">
                    <h2 class="pets-container__card-title">Pandas</h2>
                    <p class="pets-container__card-text">Shenshuping Gengda Panda Center</p>
                    <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                </div>
            </div>
            <div class="pets-container__card">
                <div class="pets-container__card-top">
                    <a class="pets-container__card-link" href="#/zoos/eagles" onclick="locationResolver('/zoos/eagles/')"><img src="./assets/images/eagles.png" alt="eagles"></a>
                </div>
                <div class="pets-container__card-bottom">
                    <h2 class="pets-container__card-title">Eagles</h2>
                    <p class="pets-container__card-text">Catalina Island</p>
                    <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                </div>
            </div>
            <div class="pets-container__card">
                <div class="pets-container__card-top">
                    <a class="pets-container__card-link" href="#/zoos/gorillas" onclick="locationResolver('/zoos/gorillas/')"><img src="./assets/images/gorrilas.png" alt="gorillas"></a>
                </div>
                <div class="pets-container__card-bottom">
                    <h2 class="pets-container__card-title">Gorillas</h2>
                    <p class="pets-container__card-text">GRACE gorillas</p>
                    <img src="./assets/icons/tv.svg" alt="" class="pets-container__card-icon">
                </div>
            </div>
            <div class="pets-container__card">
                <div class="pets-container__card-top">
                    <a class="pets-container__card-link" href="#/zoos/alligators" onclick="locationResolver('/zoos/alligators/')"><img src="./assets/images/aligators.png" alt="aligators"></a>
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
        <button class="pay-button">Donate to volunteers</button>
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
        <button class="testimonials-button">Leave feedback</button>
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
            <a href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')" class="animals-links"><img src="./assets/images/Pandas.png" class="animals-img" alt=""></a>
            <a href="#/zoos/gorillas" onclick="locationResolver('/zoos/gorillas/')" class="animals-links"><img src="./assets/images/gorrilas.png" class="animals-img" alt=""></a>
            <a href="#/zoos/eagles" onclick="locationResolver('/zoos/eagles/')" class="animals-links"><img src="./assets/images/eagles.png" class="animals-img" alt=""></a>
            <a href="#/zoos/alligators" onclick="locationResolver('/zoos/alligators/')" class="animals-links"><img src="./assets/images/aligators.png" class="animals-img" alt=""></a>
            <a href="" class="animals-links"><img src="./assets/images/elephants.png" class="animals-img" alt=""></a>
            <a href="" class="animals-links"><img src="./assets/images/lemurs.png" class="animals-img" alt=""></a>
            <a href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')" class="animals-links"><img src="./assets/images/Pandas.png" class="animals-img" alt=""></a>
    </section>
`;

let mapPage = `
<section class="map">
<h2 class="map-title">Choose your favorite Animal</h2>
<div class="map-container">
    <img class="map-image" src="./assets/images/Map.png" alt="Map">
    <a href="#/zoos/eagles" onclick="locationResolver('/zoos/eagles/')" class="map-card map-card-1">
        <img class="map-card__img" src="./assets/images/eagles.png" alt="">
    </a>
    <a href="#/zoos/alligators" onclick="locationResolver('/zoos/alligators/')" class="map-card map-card-2">
        <img class="map-card__img" src="./assets/images/aligators.png" alt="">
    </a>
    <a href="#/zoos/gorillas" onclick="locationResolver('/zoos/gorillas/')" class="map-card map-card-3">
        <img class="map-card__img" src="./assets/images/gorrilas.png" alt="">
    </a>
    <a href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')" class="map-card map-card-4">
        <img class="map-card__img" src="./assets/images/Pandas.png" alt="">
    </a>
</div>
<div class="map-sizers">
    <button class="map-sizers__btn">
        <img src="./assets/icons/plus.svg" alt="plus">
    </button>
    <button class="map-sizers__btn">
        <img src="./assets/icons/minus.svg" alt="minus">
    </button>
</div>
</section>
`;

let zoosPage_pandas = `
<section class="main-section">
<aside class="aside">
    <div class="aside-container">
        <a href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/Pandas.png" alt="">
        </a>
        <h3 class="aside-name">Pandas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/eagles" onclick="locationResolver('/zoos/eagles/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/eagles.png" alt="">
        </a>
        <h3 class="aside-name">eagles</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/gorillas" onclick="locationResolver('/zoos/gorillas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/gorrilas.png" alt="">
        </a>
        <h3 class="aside-name">gorillas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/alligators" onclick="locationResolver('/zoos/alligators/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/aligators.png" alt="">
        </a>
        <h3 class="aside-name">aligators</h3>
    </div>
</aside>
<section class="maincam">
    <h2 class="maincam-title">The Giant Pandas</h2>
    <div class="maincam-card">
        <button class="maincam-card__btn"></button>
        <button class="maincam-card__btn"></button>
    </div>
    <h3 class="maincam-subtitle">Main cameras</h3>
    <iframe class="maincam-iframe" width="100%" height="604px" src="https://www.youtube.com/embed/dqT-UlYlg1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
<section class="sidecam">
    <h3 class="sidecam-subtitle">Side cameras</h3>
    <div class="sidecam-container">
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/OWH3_o75TEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/OWH3_o75TEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/OWH3_o75TEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="sidecam-container__listener">
            <button class="sidecam-container__listener-btn"></button>
            <button class="sidecam-container__listener-btn"></button>
        </div>
    </div>
</section>
<section class="information">
    <div class="info">
        <h2 class="information-title">information</h2>
        <div class="info-card">
            <h2 class="info-card__subtitle">Zoo</h2>
            <p class="info-card__text">Shenshuping Gengda Panda Center</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of aviary</h2>
            <p class="info-card__text">Imitation of the natural environment</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Habitat</h2>
            <p class="info-card__text">Mountains of southwest China</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of food</h2>
            <p class="info-card__text">Bamboo</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Population in the world</h2>
            <p class="info-card__text">600</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">About species</h2>
            <p class="info-card__text">The yards at Shenshuping Gengda Panda Center in China's Wolong Valley are filled with bamboo--making for some very happy panda residents.</p>
        </div>
    </div>
    <div class="facts">
        <h2 class="information-title">Interesting facts</h2>
        <ul class="facts-container">
            <li class="facts-card">
                <p class="facts-text">The Giant Pandas are omnivores. But whilst pandas will occasionally eat small animals and fish, bamboo counts for 99 percent of their diet.    
            </li>
            <li class="facts-card">
                <p class="facts-text">Pandas are BIG eaters – every day they fill their tummies for up to 12 hours, shifting up to 12 kilograms of bamboo.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">The giant panda’s scientific name is Ailuropoda melanoleuca, which means “black and white cat-foot”.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Female pandas give birth to one or two cubs every two years. Cubs stay with their mothers for 18 months before venturing off on their own.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Baby pandas are born pink and measure about 15cm.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">These beautiful bears are endangered, and it’s estimated that only around 1,000 remain in the wild. That’s why we need to do all we can to protect them!</p></p>
            </li>
        </ul>
    </div>
</section>
</section>
<section class="donate">
<button class="donate-btn">Donate to volunteers</button>
</section>
`;
let zoosPage_eagles = `
<section class="main-section">
<aside class="aside">
    <div class="aside-container">
        <a href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/Pandas.png" alt="">
        </a>
        <h3 class="aside-name">Pandas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/eagles" onclick="locationResolver('/zoos/eagles/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/eagles.png" alt="">
        </a>
        <h3 class="aside-name">eagles</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/gorillas" onclick="locationResolver('/zoos/gorillas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/gorrilas.png" alt="">
        </a>
        <h3 class="aside-name">gorillas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/alligators" onclick="locationResolver('/zoos/alligators/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/aligators.png" alt="">
        </a>
        <h3 class="aside-name">aligators</h3>
    </div>
</aside>
<section class="maincam">
    <h2 class="maincam-title">Eagles</h2>
    <div class="maincam-card">
        <button class="maincam-card__btn"></button>
        <button class="maincam-card__btn"></button>
    </div>
    <h3 class="maincam-subtitle">Main cameras</h3>
    <iframe class="maincam-iframe" width="100%" height="604px" src="https://www.youtube.com/embed/dUE_AMCliSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
<section class="sidecam">
    <h3 class="sidecam-subtitle">Side cameras</h3>
    <div class="sidecam-container">
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/gsO7lmS8XG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/gsO7lmS8XG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/gsO7lmS8XG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="sidecam-container__listener">
            <button class="sidecam-container__listener-btn"></button>
            <button class="sidecam-container__listener-btn"></button>
        </div>
    </div>
</section>
<section class="information">
    <div class="info">
        <h2 class="information-title">information</h2>
        <div class="info-card">
            <h2 class="info-card__subtitle">Zoo</h2>
            <p class="info-card__text">Catalina island</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of aviary</h2>
            <p class="info-card__text">The coast of Southern California in the Gulf of Santa Catalina</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Habitat</h2>
            <p class="info-card__text">Mountains of southwest China</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of food</h2>
            <p class="info-card__text">Fish</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Population in the world</h2>
            <p class="info-card__text">In 2020, seven pairs of Bald Eagles nested on Catalina Island and four chicks fledged.</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">About species</h2>
            <p class="info-card__text">The bald eagle (Haliaeetus leucocephalus) is a bird of prey found in North America.</p>
        </div>
    </div>
    <div class="facts">
        <h2 class="information-title">Interesting facts</h2>
        <ul class="facts-container">
            <li class="facts-card">
                <p class="facts-text">Distinguishing feature of the immature bald eagle over the mature bird is its black, yellow-tipped beak; the mature eagle has a fully yellow beak.    
            </li>
            <li class="facts-card">
                <p class="facts-text">The bald eagle has sometimes been considered the largest true raptor (accipitrid) in North America.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">TThe bald eagle has a body length of 70–102 cm. Typical wingspan is between 1.8 and 2.3 m  and mass is normally between 3 and 6.3 kg.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Female pandas give birth to one or two cubs every two years. Cubs stay with their mothers for 18 months before venturing off on their own.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">BTo hunt fish, the eagle swoops down over the water and snatches the fish out of the water with its talons.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">The bald eagle is a powerful flier, and soars on thermal convection currents. It reaches speeds of 56–70 km/h (35–43 mph) when gliding and flapping.</p></p>
            </li>
        </ul>
    </div>
</section>
</section>
<section class="donate">
<button class="donate-btn">Donate to volunteers</button>
</section>
`;
let zoosPage_gorillas = `
<section class="main-section">
<aside class="aside">
    <div class="aside-container">
        <a href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/Pandas.png" alt="">
        </a>
        <h3 class="aside-name">Pandas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/eagles" onclick="locationResolver('/zoos/eagles/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/eagles.png" alt="">
        </a>
        <h3 class="aside-name">eagles</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/gorillas" onclick="locationResolver('/zoos/gorillas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/gorrilas.png" alt="">
        </a>
        <h3 class="aside-name">gorillas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/alligators" onclick="locationResolver('/zoos/alligators/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/aligators.png" alt="">
        </a>
        <h3 class="aside-name">aligators</h3>
    </div>
</aside>
<section class="maincam">
    <h2 class="maincam-title">gorillas</h2>
    <div class="maincam-card">
        <button class="maincam-card__btn"></button>
        <button class="maincam-card__btn"></button>
    </div>
    <h3 class="maincam-subtitle">Main cameras</h3>
    <iframe class="maincam-iframe" width="100%" height="604px" src="https://www.youtube.com/embed/7fQmjbx9zoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
<section class="sidecam">
    <h3 class="sidecam-subtitle">Side cameras</h3>
    <div class="sidecam-container">
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/tz0avWZoqjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/tz0avWZoqjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/tz0avWZoqjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="sidecam-container__listener">
            <button class="sidecam-container__listener-btn"></button>
            <button class="sidecam-container__listener-btn"></button>
        </div>
    </div>
</section>
<section class="information">
    <div class="info">
        <h2 class="information-title">information</h2>
        <div class="info-card">
            <h2 class="info-card__subtitle">Zoo</h2>
            <p class="info-card__text">GRACE gorillasd</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of aviary</h2>
            <p class="info-card__text">Imitation of the natural environment</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Habitat</h2>
            <p class="info-card__text">Eastern Democratic Republic of the Congo, southwestern Uganda and Rwanda</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of food</h2>
            <p class="info-card__text">Bamboo shoots and fruits, termites and ants.</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Population in the world</h2>
            <p class="info-card__text">600</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">About species</h2>
            <p class="info-card__text">The eastern gorilla has become increasingly endangered since the 1990s, and the species was listed as critically endangered in September 2016 as its population continued to decrease.</p>
        </div>
    </div>
    <div class="facts">
        <h2 class="information-title">Interesting facts</h2>
        <ul class="facts-container">
            <li class="facts-card">
                <p class="facts-text">The eastern gorilla is a critically endangered species of the genus Gorilla and the largest living primate.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Gorillas tend to have larger group sizes than their western relatives, numbering up to 35 individuals.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">The gorillas can choose where to sleep and they often choose to bed down inside their night building, but they sometimes sleep outside too.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Female pandas give birth to one or two cubs every two years. Cubs stay with their mothers for 18 months before venturing off on their own.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Because they eat so much fibrous vegetation, gorillas spend a lot of time resting and digesting.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Primary threats to the eastern gorilla include habitat destruction for residential, commercial, and agricultural purposes, habitat fragmentation caused by transportation corridors and resource extraction, as well as disease.</p>
            </li>
        </ul>
    </div>
</section>
</section>
<section class="donate">
<button class="donate-btn">Donate to volunteers</button>
</section>
`;
let zoosPage_alligators = `
<section class="main-section">
<aside class="aside">
    <div class="aside-container">
        <a href="#/zoos/pandas" onclick="locationResolver('/zoos/pandas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/Pandas.png" alt="">
        </a>
        <h3 class="aside-name">Pandas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/eagles" onclick="locationResolver('/zoos/eagles/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/eagles.png" alt="">
        </a>
        <h3 class="aside-name">eagles</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/gorillas" onclick="locationResolver('/zoos/gorillas/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/gorrilas.png" alt="">
        </a>
        <h3 class="aside-name">gorillas</h3>

    </div>
    <div class="aside-container">
        <a href="#/zoos/alligators" onclick="locationResolver('/zoos/alligators/')" class="aside-link">
            <img class="aside-link__img" src="./assets/images/aligators.png" alt="">
        </a>
        <h3 class="aside-name">aligators</h3>
    </div>
</aside>
<section class="maincam">
    <h2 class="maincam-title">Alligators</h2>
    <div class="maincam-card">
        <button class="maincam-card__btn"></button>
        <button class="maincam-card__btn"></button>
    </div>
    <h3 class="maincam-subtitle">Main cameras</h3>
    <iframe class="maincam-iframe" width="100%" height="604px" src="https://www.youtube.com/embed/R34lYREpOXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
<section class="sidecam">
    <h3 class="sidecam-subtitle">Side cameras</h3>
    <div class="sidecam-container">
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/tv8MVrZry4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/tv8MVrZry4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe class="sidecam-container__iframe" width="380" height="210" src="https://www.youtube.com/embed/tv8MVrZry4c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="sidecam-container__listener">
            <button class="sidecam-container__listener-btn"></button>
            <button class="sidecam-container__listener-btn"></button>
        </div>
    </div>
</section>
<section class="information">
    <div class="info">
        <h2 class="information-title">information</h2>
        <div class="info-card">
            <h2 class="info-card__subtitle">Zoo</h2>
            <p class="info-card__text">St. Augustine's Alligator Farm Zoological Park</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of aviary</h2>
            <p class="info-card__text">Imitation of the natural environment</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Habitat</h2>
            <p class="info-card__text">Southeastern United States and northeastern Mexico</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Type of food</h2>
            <p class="info-card__text">Fish, amphibians, reptiles, birds, and mammals</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">Population in the world</h2>
            <p class="info-card__text">600</p>
        </div>
        <div class="info-card">
            <h2 class="info-card__subtitle">About species</h2>
            <p class="info-card__text">The yards at Shenshuping Gengda Panda Center in China's Wolong Valley are filled with bamboo--making for some very happy panda residents.</p>
        </div>
    </div>
    <div class="facts">
        <h2 class="information-title">Interesting facts</h2>
        <ul class="facts-container">
            <li class="facts-card">
                <p class="facts-text">It is one of two extant species in the genus Alligator within the family Alligatoridae; it is larger than the only other living alligator species, the Chinese alligator.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Adult male American alligators measure 3.4 to 4.6 m in length, and can weigh up to 453 kg . Females are smaller, measuring 2.6 to 3 m in length.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">Young are born with yellow bands around their bodies and are protected by their mother for up to one year.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">American alligator was listed as an endangered species by the Endangered Species Act of 1973.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">The teeth number 74–80.</p>    
            </li>
            <li class="facts-card">
                <p class="facts-text">The American alligator was first classified by French zoologist François Marie Daudin as Crocodilus mississipiensis in 1801.</p>
            </li>
        </ul>
    </div>
</section>
</section>
<section class="donate">
<button class="donate-btn">Donate to volunteers</button>
</section>
`;

const locationResolver = (location) => {
    switch (location) {
        case "/about/":
            main.innerHTML = mainPage;
            break;
        case "/map/":
            main.innerHTML = mapPage;
            break;
        case "/zoos/pandas/":
            main.innerHTML = zoosPage_pandas;
            document.querySelector(".aside-link").style.filter = "drop-shadow(-10px 2px 5px $primary)";
            break;
        case "/zoos/eagles/":
            main.innerHTML = zoosPage_eagles;
            break;
        case "/zoos/gorillas/":
            main.innerHTML = zoosPage_gorillas;
            break;
        case "/zoos/alligators/":
            main.innerHTML = zoosPage_alligators;
            break;
    }
};
