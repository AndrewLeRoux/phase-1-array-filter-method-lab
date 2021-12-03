// findMatching

function findMatching (driversNames, string) {
    return driversNames.filter(function (obj) {
        return obj.toLowerCase() === string.toLowerCase()
    })
}
// fuzzyMatch
function fuzzyMatch (driversNames, letters) {
    return driversNames.filter(function (obj) {
        return obj.substring(0, letters.length) === letters
    })
}

// matchName
function matchName (driversObjs, string) {
    return driversObjs.filter(function (obj) {
        return obj.name === string
    })
}