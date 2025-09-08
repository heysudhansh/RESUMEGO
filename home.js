
        
const users = [];


function showSection(section) {
    const sections = ['home', 'templates'];
    sections.forEach(sec => {
        document.getElementById(sec).style.display = sec === section ? 'block' : 'none';
    });
}

function addNewWEField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",4);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

function generateResume(){

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1")
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT")
    contactT.innerHTML = contactField;

    let addressField = document.getElementById("addressField").value;
    let addressT = document.getElementById("addressT")
    addressT.innerHTML = addressField;

    let linkedinField = document.getElementById("linkedinField").value;
    let linkT = document.getElementById("linkT")
    linkT.innerHTML = linkedinField;

    let leetcodeField = document.getElementById("leetcodeField").value;
    let leetT = document.getElementById("leetT")
    leetT.innerHTML = leetcodeField;

    let gitField = document.getElementById("gitField").value;
    let gitT = document.getElementById("gitT")
    gitT.innerHTML = gitField;

    let objectiveField = document.getElementById("objectiveField").value;
    let objectiveT = document.getElementById("objectiveT")
    objectiveT.innerHTML = objectiveField;

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str += `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = `<ul>${str}</ul>`;

    let aqs = document.getElementsByClassName("aqField");
    let str1 = "";
    for (let e of aqs) {
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = `<ul>${str1}</ul>`;

    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";
    
}
function printResume(){
    window.print();
}


