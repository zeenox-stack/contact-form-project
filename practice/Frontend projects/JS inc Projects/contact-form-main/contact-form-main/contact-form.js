const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname"); 
const emailInp = document.querySelector("#email"); 
const messageInp = document.querySelector("#message");
const genQuery = document.querySelector("#query");
const supQuery = document.querySelector("#query-two");
const button = document.querySelector("button");
const consent = document.querySelector("#consent");
const form = document.querySelector("form");
const messageBox = document.querySelector(".messagebox");
const genSupport = document.querySelector(".support-one"); 
const supSupport = document.querySelector(".support-two");

const divFirstName = document.querySelector(".firstname"); 
const divLastName = document.querySelector(".lastname");
const divEmail = document.querySelector(".email");
const divQuery = document.querySelector(".query-options");
const divMessage = document.querySelector(".message"); // Add a class for message div
const divConsent = document.querySelector(".consent"); // Add a class for consent div


// logic

form.addEventListener("submit", (event) => { 

    event.preventDefault();

    let errorFlag = false;

    divFirstName.querySelectorAll('p').forEach(p => p.remove());
    divLastName.querySelectorAll('p').forEach(p => p.remove());
    divEmail.querySelectorAll('p').forEach(p => p.remove()); 
    divQuery.querySelectorAll('p').forEach(p => p.remove());
    divMessage.querySelectorAll('p').forEach(p => p.remove()); 
    divConsent.querySelectorAll('p').forEach(p => p.remove());

    if (firstName.value === "") { 
        const pFirstName = document.createElement("p");
        pFirstName.textContent = "This field is required *"; 
        divFirstName.appendChild(pFirstName); 
        firstName.style.borderColor = "red";
        errorFlag = true;
    } else { 
        firstName.style.borderColor = "lightgray";
    }

    if (lastName.value === "") { 
        const pLastName = document.createElement("p");
        pLastName.textContent = "This field is required *"; 
        divLastName.appendChild(pLastName); 
        lastName.style.borderColor = "red";
        errorFlag = true;
    } else { 
        lastName.style.borderColor = "lightgray";
    }

    if (emailInp.value === "") { 
        const pEmail = document.createElement("p");
        pEmail.textContent = "Please enter a valid email address *"; 
        divEmail.appendChild(pEmail); 
        emailInp.style.borderColor = "red";
        errorFlag = true;
    } else { 
        emailInp.style.borderColor = "lightgray";
    }

    if (!genQuery.checked && !supQuery.checked) { 
        const pQuery = document.createElement("p");
        pQuery.textContent = "Please select a query type *"; 
        divQuery.appendChild(pQuery); 
        genSupport.style.borderColor = "red";
        supSupport.style.borderColor = "red";
        errorFlag = true;
    } else { 
        genSupport.style.borderColor = "lightgray";
        supSupport.style.borderColor = "lightgray";
    }

    if (messageInp.value === "") { 
        const pMessage = document.createElement("p");
        pMessage.textContent = "This field is required *"; 
        divMessage.appendChild(pMessage); 
        messageInp.style.borderColor = "red";
        errorFlag = true;
    } else { 
        messageInp.style.borderColor = "lightgray";
    }

    if (!consent.checked) { 
        const pConsent = document.createElement("p");
        pConsent.textContent = "To submit this form, please consent to being contacted *"; 
        divConsent.appendChild(pConsent); 
        errorFlag = true;
    }

    if (!errorFlag) {
        messageBox.style.display = "block";
        setTimeout(() => { 
            messageBox.style.display = "none";
        }, 3000);
    }
});
