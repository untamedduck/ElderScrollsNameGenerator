import Radio from "../Components/Radio";

const Malenames = [
    "dave","rob", "pete" , "davis" , "Mac", "Tom"
]
const femaleNames = ["debbie","donna", "becky"]





export const getRandomF = () => {
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