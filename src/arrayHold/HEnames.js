import Radio from "../Components/Radio";

const Malenames = [
    "dave","rob", "pete"
]
const femaleNames = ["debbie","donna", "becky"]

export const getRandom = () => {
    return Malenames[Math.floor(Math.random()*Malenames.length)];
}
export const getRandomF = () => {
    return femaleNames[Math.floor(Math.random()*femaleNames.length)];
}


