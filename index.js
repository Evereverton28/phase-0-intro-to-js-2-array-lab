let cats = ['Milo', 'Otis', 'Garfield'];
console.log(cats);

const destructivelyAppendCat = () => {g
    cats.push("Ralph")
}

const destructivelyPrependCat = () => {
    cats.unshift("Bob")
}

const destructivelyRemoveLastCat = () => {
    cats.pop()
}

const destructivelyRemoveFirstCat = () => {
    cats.shift()
}

const appendCat = () => {
    return [...cats,"Broom"]
}

const prependCat = () => {
    return ["Arnold", ...cats]
}

const removeLastCat = () => {
    return cats.slice(0,2)
}

const removeFirstCat = () => {
    return cats.slice(1,3)
}