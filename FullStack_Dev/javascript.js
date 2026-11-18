console.log("JavaScript connected");
let form = document.getElementById("contact-form");
let status = document.getElementById("status");
if (form){
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let user={
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            num:document.getElementById("tel").value,
            message:document.getElementById("message").value
        };
        if (user.name==="" || user.email==="" || user.num==="" || user.message===""){
            status.textContent="Please fill all fields";
        }
        else{
            let users=JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users",JSON.stringify(users));
            status.textContent="Message sent successfully";
            form.reset();
            document.getElementById("name").focus();
        }
    });
}

let projects=[
    {
        title:"My-Website",
        desc:"Built with HTML CSS JS",
    },
    {
        title:"Contact Form",
        desc:"Form validation with localStorage"
    }
];
let projectList=document.getElementById("project-list");
if (projectList){
    projects.forEach(function(project){
        projectList.innerHTML +=`
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
       `;
    });
}
localStorage.clear();