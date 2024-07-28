let myName = "Hitesh     ";
console.log(myName.truelength);

let myHeros = ["Thor", "Spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy Power is ${this.spiderman}`);
    },
};

Object.prototype.aswin = function () {
    console.log("sarwam aswin mayamm");
};

Array.prototype.heyAswin = function () {
    console.log(`Aswin says hello`);
};

heroPower.aswin();
myHeros.heyAswin();

const Teacher = {
    makeVideo: true,
};

const TeachingSupport = {
    isAvailable: false,
};

const TASupport = {
    makeAssignement: "JS Assignement",
    fullTime: true,
    __proto__: TeachingSupport,
};
