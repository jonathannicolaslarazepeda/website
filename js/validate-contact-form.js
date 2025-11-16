let contacts = [
    {
        name: "Kacper",
        email: "kacper@gmail.com",
        subject: "Hola",
        content: "Pos eso, hola."
    },
    {
        name: "Iván",
        email: "ivan@gmail.com",
        subject: "Adios",
        content: "Adios muchachos, compañeros de mi vida."
    }
];

function listenToEvents() {
    let contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", ValidityContactForm);
}

function ValidityContactForm(event) {
    let contactName = event.target['contact-name'].value;
    let contactEmail = event.target['contact-email'].value;
    let contactSubject = event.target['contact-subject'].value;
    let contactContent = event.target['contact-content'].value;

    let error = false;

    if (contactName == "") {
        error = true;
        const CONTACT_NAME_REQUIRED_ERROR = document.getElementById("contact-name-required-error");
        CONTACT_NAME_REQUIRED_ERROR.style.visibility = "visible";
    }

    if (contactEmail == "") {
        error = true;
        const CONTACT_EMAIL_REQUIRED_ERROR = document.getElementById("contact-email-required-error");
        CONTACT_EMAIL_REQUIRED_ERROR.style.visibility = "visible";
    }

    if (contactSubject == "") {
        error = true;
        const CONTACT_SUBJECT_REQUIRED_ERROR = document.getElementById("contact-subject-required-error");
        CONTACT_SUBJECT_REQUIRED_ERROR.style.visibility = "visible";
    }

    if (contactContent == "") {
        error = true;
        const CONTACT_CONTENT_REQUIRED_ERROR = document.getElementById("contact-content-required-error");
        CONTACT_CONTENT_REQUIRED_ERROR.style.visibility = "visible";
    }
    if (error) {
        console.log("ocurrio un error")
        event.preventDefault();
    }
}

function showContactList() {
    let contactList = "";
    for (let i = 0; i < contacts.length; i++) {
        contactList = contactList +
            `<p>${contacts[i].name}</p>
        <p>${contacts[i].email}</p>
        <p>${contacts[i].subject}</p>
        <p>${contacts[i].content}</p>`
    }
    document.getElementById("contact-list").innerHTML = contactList;
}

showContactList();
listenToEvents()