import mainPage from "./pages/main/main-page.js";
import mapPage from "./pages/map/map-page.js";
import zoosPage_pandas from "./pages/zoos-pandas/pandas-page.js";
import zoosPage_eagles from "./pages/zoos-eagles/eagles-page.js";
import zoosPage_gorillas from "./pages/zoos-gorillas/gorillas-page.js";
import zoosPage_alligators from "./pages/zoos-alligators/alligators-page.js";
import obj from "./assets/others/variables.js";

function locationResolver(location) {
    switch (location) {
        case "/about/":
            obj.main.innerHTML = mainPage;

            break;
        case "/map/":
            obj.main.innerHTML = mapPage;

            break;
        case "/zoos/pandas/":
            obj.main.innerHTML = zoosPage_pandas;
            clearZoozLink();
            setEventListeners();

            break;
        case "/zoos/eagles/":
            obj.main.innerHTML = zoosPage_eagles;
            clearZoozLink();
            setEventListeners();

            break;
        case "/zoos/gorillas/":
            obj.main.innerHTML = zoosPage_gorillas;
            clearZoozLink();
            setEventListeners();

            break;
        case "/zoos/alligators/":
            obj.main.innerHTML = zoosPage_alligators;
            clearZoozLink();
            setEventListeners();

            break;
    }
}

window.onload = locationResolver("/about/");

document.getElementById("about1").addEventListener("click", function () {
    locationResolver("/about/");
});
document.getElementById("about2").addEventListener("click", function () {
    locationResolver("/about/");
});

document.getElementById("map1").addEventListener("click", function () {
    locationResolver("/map/");
});
document.getElementById("map2").addEventListener("click", function () {
    locationResolver("/map/");
});

document.getElementById("zoos1").addEventListener("click", function () {
    locationResolver("/zoos/pandas/");
});
document.getElementById("zoos2").addEventListener("click", function () {
    locationResolver("/zoos/pandas/");
});

//////////////////////////
function setEventListeners() {
    try {
        document.getElementById("zoos-pandas_link").addEventListener("click", function () {
            locationResolver("/zoos/pandas/");
        });
        document.getElementById("zoos-eagles_link").addEventListener("click", function () {
            locationResolver("/zoos/eagles/");
        });
        document.getElementById("zoos-gorillas_link").addEventListener("click", function () {
            locationResolver("/zoos/gorillas/");
        });
        document.getElementById("zoos-alligators_link").addEventListener("click", function () {
            locationResolver("/zoos/alligators/");
        });
    } catch (e) {
        console.log("BBRUH");
        console.log(e);
    }
}

function clearZoozLink() {
    let zoosLink_bg = document.querySelector(".aside-link__bg");
    zoosLink_bg.style.display = "unset";
}

document.querySelector(".header-container__search").addEventListener("click", function () {
    document.querySelector(".header-container__input").style.display = "unset";
});
//-------------------------------------------Contact pop-up

obj.contactOpen.addEventListener("click", function () {
    obj.contact.style.display = "flex";
});

obj.contactClose.addEventListener("click", function () {
    obj.contact.style.display = "none";
});

obj.contactSend.addEventListener("click", function () {
    if (obj.contactInput_1.value.length < 2) {
        obj.contactErrText_1.style.display = "unset";
    } else if (obj.contactInput_2.value.length < 2) {
        obj.contactErrText_2.style.display = "unset";
    } else if (obj.contactInput_3.value.length < 2) {
        obj.contactErrText_3.style.display = "unset";
    } else {
        obj.contact.style.display = "none";
        location.reload();
    }
});

//-----------------------------------------------Feedback pop-up

document.getElementById("feedback-open").addEventListener("click", function () {
    obj.feedback.style.display = "flex";
});

obj.feedbackClose.addEventListener("click", function () {
    obj.feedback.style.display = "none";
});

obj.feedbackSend.addEventListener("click", function () {
    if (obj.feedbackInput_1.value.length < 2) {
        obj.feedbackErrText_1.style.display = "unset";
    } else if (obj.feedbackInput_2.value.length < 2) {
        obj.feedbackErrText_2.style.display = "unset";
    } else if (obj.feedbackInput_3.value.length < 2) {
        obj.feedbackErrText_3.style.display = "unset";
    } else {
        obj.feedback.style.display = "none";
        location.reload();
    }
});

//-------------------------------Donate pop-up
obj.donateClose.addEventListener("click", function () {
    obj.donate.style.display = "none";
});
document.getElementById("donate-open").addEventListener("click", function () {
    obj.donate.style.display = "unset";
});

obj.donateSend.addEventListener("click", function () {
    let animals = ["pandas", "eagles", "gorillas", "alligators"];

    for (let i = 0; i < animals.length; i++) {
        if (obj.donateInput_1 !== animals[i]) {
            obj.donateErrText_1.style.display = "unset";
        } else if (obj.donateInput_2.length < 2) {
            obj.donateErrText_2.style.display = "unset";
        } else if (obj.donateInput_3.length < 2) {
            obj.donateErrText_3.style.display = "unset";
        } else if (
            obj.donatePayInput_1.length < 2 ||
            obj.donatePayInput_2.length < 2 ||
            obj.donatePayInput_3.length < 2 ||
            obj.donatePayInput_4.length < 2
        ) {
            obj.donateErrText_4.style.display = "unset";
        } else {
            donate.style.display = "none";
            location.reload();
        }
    }
});
