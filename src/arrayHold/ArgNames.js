import Radio from "../Components/Radio";

const Malenames = [
    "tom", "robert"
]
const femaleNames = [
   "debbie", "patty"

]





export const getRandomFA = () => {
    let names = [];
    for(let i = 0; i < 5; i++) {
        names.push(femaleNames[Math.floor(Math.random()*femaleNames.length)]);
    }
    return names;
}


export const getRandom = () => {
    let names = [];
    for(let i = 0; i < 5; i++) {
        names.push(Malenames[Math.floor(Math.random()*Malenames.length)]);
    }
    return names;
}