let skillList = [{
        skillName: "HTML",
        uniqueNo: 1,
    },
    {
        skillName: "CSS",
        uniqueNo: 2,
    },
    {
        skillName: "JavaScript",
        uniqueNo: 3,
    },
     {
        skillName: "C++",
        uniqueNo: 3,
    },
     {
        skillName: "Node",
        uniqueNo: 4,
    },
     {
        skillName: "python",
        uniqueNo: 5,
    }
];

let container = document.getElementById("skillsContainer");
let head = document.createElement("h1");
head.textContent = "Mark your Skills";
container.appendChild(head);

let ulEl = document.createElement("ul");
container.appendChild(ulEl);

for (let item of skillList) {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = "checkbox" + item.uniqueNo;

    let label = document.createElement("label");
    label.id = "label" + item.uniqueNo;
    label.textContent = item.skillName;
    label.setAttribute("for", input.id);


    input.addEventListener("change", function() {
        if (input.checked) {
            label.style.color = "green";
        } else {
            label.style.color = "black";
        }
    });


    li.appendChild(input);
    li.appendChild(label);
    ulEl.appendChild(li);
}