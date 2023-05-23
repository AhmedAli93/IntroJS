const cookie = {
    name: "Choclate Chip",
    isGlutenFree: false,


};

cookie.name = "Chip choclate"
cookie.isGlutenFree = true
console.log(cookie);

class Cookie{
    constructor(name, isGlutenFree){
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
}
const myCookie = new Cookie("Iced Oatmeal", false);

console.log(myCookie);