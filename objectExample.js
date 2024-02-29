let dog = {
    name: "",
    color: "",
    speak: ""
}

dog.name = "Rover";

console.log(dog.name);

dog.color = "brown";

console.log(dog.color);

dog.speak = () => {
    console.log("Woof!");
}

dog.speak();

dog.age = 1;

console.log(dog.age);