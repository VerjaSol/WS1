var person = {
    firstName:"John",
    lastName:"Doe",
    adressPhone:"Korkeakatu 3, 04401234",
    age:50,
    eyeColor:"blue",
    printInfo: function() {
    return this.firstName + " " + this.lastName+ " " + this.age+ " " + this.eyeColor+ " " + this.adressPhone;
}
}
console.log(person.printInfo());

var person1 = {
    firstName:"John",
    lastName:"Doe",
    adressPhone:"Korkeakatu 3, 04401234",
    age:50
};
var person2 = {
    firstName:"Pasi",
    lastName:"Simonen",
    adressPhone:"Pitkäkatu 3, 04401234",
    age:56
};
var person3 = {
    firstName:"Jussi",
    lastName:"Lahti",
    adressPhone:"Isokatu 3, 04401234",
    age:34
};
var person4 = {
    firstName:"Jani",
    lastName:"Metso",
    adressPhone:"Uusikatu 3, 04401234",
    age:47
};
var list = [person1, person2, person3, person4];

for (i=0; i<=3; i++){
document.writeln(list[i].firstName+ " " + list[i].lastName)
}