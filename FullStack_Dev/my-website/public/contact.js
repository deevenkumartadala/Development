let form = document.getElementById("contact-form");
let status = document.getElementById("status");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let user = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        tel:document.getElementById("tel").value,
        message:document.getElementById("message").value
    };

    fetch("http://localhost:3000/contact",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        status.textContent=data.message;
    });
});