const heading=document.querySelector("#heading");
const description=document.querySelector("#description");
const button=document.querySelector("#changeButton");

button.addEventListener("click",()=>{
    console.log("1.Button Clicked!");

    heading.textContent="DOM Updated";
    description.textContent=
        "JavaScript changed the document in the browser.";
    document.body.style.backgroundColor = "#dbeafe";

console.log("Background:", document.body.style.backgroundColor);

console.log("Body element:", document.body);
});