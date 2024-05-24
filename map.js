const person = "tu he to muje fir or kya chahiye"
const str = "Beautiful"
const answer = person.toLowerCase().split(" ").map((items) => 
    items.charAt(0).toUpperCase() + items.slice(1)
).join(" ")

const newans = Array.from(str)
const update = newans.reverse().join("")

console.log(update);

// console.log(answer);