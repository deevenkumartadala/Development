console.log("JavaScript connected");
setupForm();
renderProjects();
renderUsers();

function setupForm(){
    let form=document.getElementById("contact-form");
    let status=document.getElementById("status");

    if (!form) return;
    
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
            renderUsers();
        }
    });
}

function renderProjects(){
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
                <div class="card">
                    <h3>${project.title}</h3>
                    <p>${project.desc}</p>
                </div>
            `;
        });
    }
}

function renderUsers(){
    let userList=document.getElementById("user-list");

    if (!userList) return;

    let users=JSON.parse(localStorage.getItem("users")) || [];

    userList.innerHTML="";
    users.forEach(function(user){
        userList.innerHTML+=`
            <div class="card">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p>${user.num}</p>
            </div>
        `;
    });
}