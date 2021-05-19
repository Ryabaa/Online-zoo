import variables from "./variables.js";

variables.headerSearch.addEventListener("click", function () {
    if (variables.headerInput.style.width !== "140px") {
        variables.headerInput.style.width = "140px";
        variables.headerInput.style.visibility = "visible";
    } else {
        variables.headerInput.style.width = "0px";
        variables.headerInput.style.visibility = "hidden";
    }
});

variables.menuOpen.addEventListener("click", function () {
    variables.menu.classList.toggle("menu-visible");
});

function closeGratitude() {
    variables.gratitude.classList.remove("gratitude-visible");
    variables.substrate.style.display = "none";
}

function locationReload() {
    location.reload();
}

//-------------------------------------------Contact pop-up

variables.contactOpenHeader.addEventListener("click", function () {
    variables.contact.style.display = "flex";
    variables.substrate.style.display = "unset";
});

variables.contactOpenMenu.addEventListener("click", function () {
    variables.contact.style.display = "flex";
    variables.substrate.style.display = "unset";
});

variables.contactOpenFooter.addEventListener("click", function () {
    variables.contact.style.display = "flex";
    variables.substrate.style.display = "unset";
});

variables.contactClose.addEventListener("click", function () {
    variables.contact.style.display = "none";
    variables.substrate.style.display = "none";
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
        variables.gratitudeSpan.textContent =
            "For contacting us, wait and we will answer your questions and suggestions";
        variables.gratitude.classList.toggle("gratitude-visible");
        setTimeout(locationReload, 6500);
        setTimeout(closeGratitude, 6000);
    }

    if (variables.contactInput_1.value.length > 2) {
        variables.contactErrText_1.style.display = "none";
    }
    if (variables.contactInput_2.value.length > 2) {
        variables.contactErrText_2.style.display = "none";
    }
    if (variables.contactInput_3.value.length > 2) {
        variables.contactErrText_3.style.display = "none";
    }
});

//-----------------------------------------------Feedback pop-up
if (variables.feedbackOpen !== null) {
    variables.feedbackOpen.addEventListener("click", function () {
        variables.feedback.style.display = "flex";
        variables.substrate.style.display = "unset";
    });

    variables.feedbackClose.addEventListener("click", function () {
        variables.feedback.style.display = "none";
        variables.substrate.style.display = "none";
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
            variables.gratitudeSpan.textContent = "for your feedback";
            variables.gratitude.classList.toggle("gratitude-visible");
            setTimeout(locationReload, 3500);
            setTimeout(closeGratitude, 3000);
        }

        if (variables.feedbackInput_1.value.length > 2) {
            variables.feedbackErrText_1.style.display = "none";
        }
        if (variables.feedbackInput_2.value.length > 2) {
            variables.feedbackErrText_2.style.display = "none";
        }
        if (variables.feedbackInput_3.value.length > 2) {
            variables.feedbackErrText_3.style.display = "none";
        }
    });
}

//-------------------------------Donate pop-up
if (variables.donateOpen !== null) {
    variables.donateClose.addEventListener("click", function () {
        variables.donate.style.display = "none";
        variables.substrate.style.display = "none";
        location.reload();
    });
    variables.donateOpen.addEventListener("click", function () {
        variables.donate.style.display = "unset";
        variables.substrate.style.display = "unset";
    });

    variables.donateSend.addEventListener("click", function () {
        function checkCardNumber() {
            if (
                variables.donatePayCardNumber_1.value.length < 4 ||
                variables.donatePayCardNumber_2.value.length < 4 ||
                variables.donatePayCardNumber_3.value.length < 4 ||
                variables.donatePayCardNumber_4.value.length < 4
            ) {
                return false;
            } else {
                return true;
            }
        }

        if (variables.donateInput_2.value.length < 2) {
            variables.donateErrText_2.style.display = "unset";
        } else if (variables.donateInput_3.value.length < 2) {
            variables.donateErrText_3.style.display = "unset";
        } else if (checkCardNumber() === false) {
            variables.donateErrText_5.style.display = "unset";
        } else if (
            variables.donatePayInput_2.value.length < 2 ||
            variables.donatePayInput_3.value.length < 2 ||
            variables.donatePayInput_4.value.length < 2
        ) {
            variables.donateErrText_4.style.display = "unset";
        } else {
            donate.style.display = "none";
            variables.gratitudeSpan.textContent = "for your payment";
            variables.gratitude.classList.toggle("gratitude-visible");
            setTimeout(locationReload, 3500);
            setTimeout(closeGratitude, 3000);
        }

        if (variables.donateInput_2.value.length > 2) {
            variables.donateErrText_2.style.display = "none";
        }
        if (variables.donateInput_3.value.length > 2) {
            variables.donateErrText_3.style.display = "none";
        }
        if (
            variables.donatePayCardNumber_1.value.length === 4 &&
            variables.donatePayCardNumber_2.value.length === 4 &&
            variables.donatePayCardNumber_3.value.length === 4 &&
            variables.donatePayCardNumber_4.value.length === 4
        ) {
            variables.donateErrText_5.style.display = "none";
        }
    });
}

variables.donatePayCardNumber_1.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
};
variables.donatePayCardNumber_2.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
};
variables.donatePayCardNumber_3.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
};
variables.donatePayCardNumber_4.oninput = function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
};
variables.donatePayInput_2.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
};
variables.donatePayInput_3.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
};
variables.donatePayInput_4.oninput = function () {
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }
};

//----------------------SignUp Pop-up-------------------------
if (variables.signupOpen !== null) {
    variables.signupOpen.addEventListener("click", function () {
        variables.substrate.style.display = "unset";
        variables.signup.style.display = "flex";
    });

    variables.signupClose.addEventListener("click", function () {
        variables.signup.style.display = "none";
        variables.substrate.style.display = "none";
        location.reload();
    });

    variables.signupSend.addEventListener("click", function () {
        let checkboxChecked = variables.signupCheckbox.checked;
        if (variables.signupInput_1.value.length < 2) {
            variables.signupErrText_1.style.display = "unset";
        } else if (variables.signupInput_2.value.length < 2) {
            variables.signupErrText_2.style.display = "unset";
        } else if (variables.signupInput_3.value.length < 6) {
            variables.signupErrText_3.style.display = "unset";
        } else if (checkboxChecked === false) {
            variables.signupErrUnderline.style.borderBottom = "red 3px dotted";
        } else {
            variables.signup.style.display = "none";
            variables.gratitudeSpan.textContent = "for sign up. Welocme!";
            variables.gratitude.classList.toggle("gratitude-visible");
            setTimeout(locationReload, 4500);
            setTimeout(closeGratitude, 4000);
        }

        if (variables.signupInput_1.value.length > 2) {
            variables.signupErrText_1.style.display = "none";
        }
        if (variables.signupInput_2.value.length > 2) {
            variables.signupErrText_2.style.display = "none";
        }
        if (variables.signupInput_3.value.length > 6) {
            variables.signupErrText_3.style.display = "none";
        }
        if (checkboxChecked !== false) {
            variables.signupErrUnderline.style.borderBottom = "unset";
        }
    });

    variables.rightToggler.addEventListener("click", function () {
        variables.signup.style.display = "none";
        variables.login.style.display = "flex";
    });
}

//-----------------------------LogIn Pop-Up---------------------------
if (variables.loginOpen !== null) {
    variables.loginOpen.addEventListener("click", function () {
        variables.login.style.display = "flex";
        variables.substrate.style.display = "unset";
    });

    variables.loginOpen2.addEventListener("click", function () {
        variables.login.style.display = "flex";
        variables.substrate.style.display = "unset";
    });

    variables.loginClose.addEventListener("click", function () {
        variables.login.style.display = "none";
        variables.substrate.style.display = "none";
        location.reload();
    });

    variables.loginSend.addEventListener("click", function () {
        if (variables.loginInput_1.value.length < 2) {
            variables.loginErrText_1.style.display = "unset";
        } else if (variables.loginInput_2.value.length < 2) {
            variables.loginErrText_2.style.display = "unset";
        } else {
            variables.login.style.display = "none";
            variables.gratitudeText.textContent = "Welcome back!";
            variables.gratitude.classList.toggle("gratitude-visible");
            setTimeout(locationReload, 3000);
            setTimeout(closeGratitude, 2500);
        }

        if (variables.loginInput_1.value.length > 2) {
            variables.loginErrText_1.style.display = "none";
        }
        if (variables.loginInput_2.value.length > 2) {
            variables.loginErrText_2.style.display = "none";
        }
    });

    variables.leftToggler.addEventListener("click", function () {
        variables.login.style.display = "none";
        variables.signup.style.display = "flex";
    });
}

variables.substrate.addEventListener("click", function () {
    variables.substrate.style.display = "none";
    variables.gratitude.style.display = "none";
    if (variables.signupOpen !== null) {
        variables.signup.style.display = "none";
    }
    if (variables.loginOpen !== null) {
        variables.login.style.display = "none";
    }
    if (variables.donateOpen !== null) {
        variables.donate.style.display = "none";
    }
    if (variables.feedbackOpen !== null) {
        variables.feedback.style.display = "none";
    }
    if (variables.contactOpen !== null) {
        variables.contact.style.display = "none";
    }
});
