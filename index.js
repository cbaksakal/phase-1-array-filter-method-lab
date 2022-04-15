// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(element => element[0].toLowerCase() === name[0].toLowerCase());
}

function matchName(drivers, name) {
    return drivers.filter(element => element.name.toLowerCase() === name.toLowerCase());
}