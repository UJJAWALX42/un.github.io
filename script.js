const people = [
    {
        name: "Tejus Pandey",
        hobby: "Photography",
        image: "images/tejus_pandey.jpg"
    },
    {
        name:"Rajat Trehan",
        hobby:"Gymming",
        image:"images/rajat_trehan.jpg"
    },
    {
        name:"Gaurav Singh Bhakuni",
        hobby:"lorem5",
        image:"images/gaurav_singh_bhakuni.jpg"
    },
    {
        name:"Nikhil Giri",
        hobby:"lorem ",
        image:"images/nikhil_giri.jpg"
    },
    {
        name:"Charlie Chaplin",
        hobby:"Silent Comedy",
        image:"images/charlie_chaplin.gif"
    },
    {
        name:"Andrew Tate",
        hobby:"Kick Boxing",
        image:"images/andew_tate.jpg"
    },
    {
        name:"Puneet Kumar AKA Puneet Superstar",
        hobby:"Comedy",
        image:"images/puneet_kumar.gif"
    },
    {
        name:"Nick Jones",
        hobby:"Singer",
        image:"images/Nick_Jones.gif"
    },
    {
        name:"R Praggnanandhaa",
        hobby:"Chess",
        image:"images/Praggnanandhaa.png"
    },
    {
        name:"Rahul Gandhi",
        hobby:"Martial Arts",
        image:"images/rahul-gandhi.jpg"
    }
];

// Generate cards dynamically and append them to the container
const container = document.querySelector(".container");

people.forEach(person => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const image = document.createElement("img");
    image.src = person.image;
    
    const name = document.createElement("h2");
    name.textContent = person.name;
    
    const hobby = document.createElement("p");
    hobby.textContent = "Hobby: " + person.hobby;
    
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(hobby);
    
    container.appendChild(card);
});
