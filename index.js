// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    return [...cats, name]
}
function prependCat(name) {
    return [name, ...cats]
}
const newcats = [...cats]
function removeLastCat(name) {
    return newcats.slice(0,newcats.length-1)
}
function removeFirstCat(name) {
    return newcats.slice(1)
}