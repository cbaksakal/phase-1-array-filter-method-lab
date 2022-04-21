// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(element => element.startsWith(name));
}

function matchName(drivers, name) {
    return drivers.filter(element => element.name.toLowerCase() === name.toLowerCase());
}