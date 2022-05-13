let btnSubmitMessage = document.getElementById("btnSubmitMessage");

btnSubmitMessage.addEventListener('click', function (event) { // envoie du formulaire au click du bouton
    let formContact = document.getElementById("formContact");
    event.preventDefault();

    if( formContact.reportValidity() == true) {//verification si le formulaire est correctement rempli
        const regexName = /[A-z-_ çàâéèeîïù]{2,30}$/;
        if(!regexName.test(document.getElementById("username").value)){
            alert( "Votre nom doit contenir entre 2 et 30 caractères sans caractère spéciaux. Merci d'effectuer les modifications nécessaires.")
            return false
        }

        const regexContent = /^[^><#!${}]{15,500}$/;
        if(!regexContent.test(document.getElementById("message").value)){
            alert( "Votre message doit contenir entre 15 et 500 caractères sans caractère spéciaux comme ><#!$/{}. Merci d'effectuer les modifications nécessaires.")
            return false
        }
        const regexMail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}$/ ;
        if(!regexMail.test(document.getElementById("email").value)){
            alert( "Votre email doit être valide. Merci d'effectuer les modifications nécessaires.")
            return false
        } 
        const regexPhone = /^0[1-7][0-9]{8}$/ ;
        if(!regexPhone.test(document.getElementById("phone").value)){
            alert( "Votre numéro de téléphone doit contenir 10 chiffres. Merci d'effectuer les modifications nécessaires. Jean-Pierre")
            return false
        }         
        emailjs.sendForm('my_gmail','template_solly',formContact)
        .then(function() {
           alert('Votre message a bien été envoyé à Angélina Bike! Merci ')
                    document.getElementById("username").value = "";
                    document.getElementById("email").value= "";
                    document.getElementById("message").value= "";
                    document.getElementById("phone").value= "";
        }, function(error) {
            console.log('FAILED...', error);
        });

    }

});