console.dir(profiles)

// get reference
let profileBank = document.querySelector("#profiles");


// function to display profile
function setupProfile(personNum) {
    // create elements
    let newDiv = document.createElement("div");
    let profilePic = document.createElement("img");
    let description = document.createElement("p");

    let person = profiles.results[personNum]

    profilePic.src = person.picture.large;
    description.innerHTML = "Name: " + person.name.first + " " + person.name.last + "<br>" + "Age: " + person.dob.age + "<br>" + "Phone #: " + person.phone + "<br> Gender: " + person.gender + "<br> I live in " + person.location.country;
    // add items to parent elements
    newDiv.appendChild(profilePic);
    newDiv.appendChild(description);
    profileBank.appendChild(newDiv);
}

// loop through every single person from data
for (let i = 0; i <= 99; i++) {
    setupProfile(i);
}

// grab img elements
let lineBreak = "\r\n";

let image = document.querySelectorAll("img");
profileBank.onmouseover = function() {
    for (let i = 0; i <= 99; i++) {
        image[i].onclick = function() {
            alert("Name: " + profiles.results[i].name.first + " " + profiles.results[i].name.last + lineBreak + "Location: " + profiles.results[i].location.street.number + " " + profiles.results[i].location.street.name + " St, " + 
            profiles.results[i].location.city + "," + profiles.results[i].location.country + lineBreak + "Email: " + profiles.results[i].email);
        }
    }
}