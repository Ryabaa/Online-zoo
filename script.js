import variables from "./assets/others/variables.js";

document.querySelector(".header-container__search").addEventListener("click", function () {
    document.querySelector(".header-container__input").style.display = "unset";
});
//-------------------------------------------Contact pop-up

variables.contactOpen.addEventListener("click", function () {
    variables.contact.style.display = "flex";
});

variables.contactClose.addEventListener("click", function () {
    variables.contact.style.display = "none";
    location.reload();
});

variables.contactSend.addEventListener("click", function () {
    if (variables.contactInput_1.value.length < 2) {
        variables.contactErrText_1.style.display = "unset";
    } else if (variables.contactInput_2.value.length < 2) {
        variables.contactErrText_2.style.display = "unset";
    } else if (variables.contactInput_3.value.length < 2) {
        variables.contactErrText_3.style.display = "unset";
    } else {
        variables.contact.style.display = "none";
        location.reload();
    }
});

//-----------------------------------------------Feedback pop-up
if (variables.feedbackOpen !== null) {
    variables.feedbackOpen.addEventListener("click", function () {
        variables.feedback.style.display = "flex";
    });

    variables.feedbackClose.addEventListener("click", function () {
        variables.feedback.style.display = "none";
        location.reload();
    });

    variables.feedbackSend.addEventListener("click", function () {
        if (variables.feedbackInput_1.value.length < 2) {
            variables.feedbackErrText_1.style.display = "unset";
        } else if (variables.feedbackInput_2.value.length < 2) {
            variables.feedbackErrText_2.style.display = "unset";
        } else if (variables.feedbackInput_3.value.length < 2) {
            variables.feedbackErrText_3.style.display = "unset";
        } else {
            variables.feedback.style.display = "none";
            location.reload();
        }
    });
}

//-------------------------------Donate pop-up
if (variables.donateOpen !== null) {
    variables.donateClose.addEventListener("click", function () {
        variables.donate.style.display = "none";
        location.reload();
    });
    document.getElementById("donate-open").addEventListener("click", function () {
        variables.donate.style.display = "unset";
    });

    variables.donateSend.addEventListener("click", function () {
        let animals = ["pandas", "eagles", "gorillas", "alligators"];
        function checkAnimalsType(type) {
            type = type.toLowerCase();
            let animalIndex = animals.indexOf(type);
            if (animalIndex === -1) {
                return "uncorrect";
            }
        }

        function checkCardNumber(number) {
            let length = true;
            let elemLength = true;
            let num = number.split(" ");
            if (num.length !== 4) {
                length = false;
            }
            for (let i = 0; i < num.length; i++) {
                if (num[i].length !== 4) {
                    elemLength = false;
                }
            }
            if (length && elemLength) {
                return "correct";
            } else {
                return "bruh!";
            }
        }

        if (checkAnimalsType(variables.donateInput_1.value) === "uncorrect") {
            variables.donateErrText_1.style.display = "unset";
        } else if (variables.donateInput_2.value.length < 2) {
            variables.donateErrText_2.style.display = "unset";
        } else if (variables.donateInput_3.value.length < 2) {
            variables.donateErrText_3.style.display = "unset";
        } else if (
            variables.donatePayInput_1.value.length < 2 ||
            variables.donatePayInput_2.value.length < 2 ||
            variables.donatePayInput_3.value.length < 2 ||
            variables.donatePayInput_4.value.length < 2
        ) {
            variables.donateErrText_4.style.display = "unset";
        } else if (checkCardNumber(variables.donatePayInput_1.value) !== "correct") {
            variables.donateErrText_5.style.display = "unset";
        } else {
            donate.style.display = "none";
            location.reload();
        }
    });
}
