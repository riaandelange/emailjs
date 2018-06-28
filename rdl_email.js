// email.js v1.0 - Copyright Riaan de Lange 2018
// Download the latest version from https://github.com/riaandelange/emailjs
// Fixes the default email editor on the CRM form Email from 288px to 800px height so you can see more details in the Email control.

function FormOnLoad() {
    ExpandEmailDescription();
}

function FormOnSave() {
    ExpandEmailDescription();
}

function ExpandEmailDescription() {
    parent.document.getElementById("description_d").style.height = "800px";
    parent.document.getElementById("description_d").setAttribute("data-height", 800);
}

// EoF
