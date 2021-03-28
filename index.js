function findMatching(drivers, firstName){
    return drivers.filter(driver => {return driver.toLowerCase() == firstName.toLowerCase()})
}
function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.indexOf(letters) == 0)
}
function matchName(drivers, name){
    return drivers.filter(matches => matches.indexOf(name))
}

