function checkUniqueViaDoubleForLoop(arr){
    for (var i = 0; i < arr.length; i++){ 
        var isUnique = true;
        for (var j = 0; j < arr.length; j++){ if (i != j && arr[i] == arr[j]){ isUnique = false; } }
        if (isUnique) return arr[i]
    } //Works wth any Array Type
    return null;
}

function checkPrevAndNextVariables(arr){
    arr.sort(); 
    for (var i = 0; i < arr.length; i++){ if (arr[i] != arr[i-1] && arr[i] != arr[i+1]){ return arr[i]; } } //Works only with Numbers
    return null;
}

function wackShit(arr){
    var prev = null;
    var prevprev = null
    arr.sort().forEach(val => {
        if (prevprev != prev && prev != val){ return prev; };
        prevprev = prev;
        prev = val;
    })
    if (prevprev != prev){ return prev; };
}

let x = [0, 0, 1, 2, 1, 3, 3, 5, 5] //gets 2
let y = [1, 1, 1, 2, 2, 3, 3, 4, 4, 9] //gets 9
console.log(checkUniqueViaDoubleForLoop(x))
console.log(checkUniqueViaDoubleForLoop(y))
console.log(checkPrevAndNextVariables(x))
console.log(checkPrevAndNextVariables(y))
console.log(wackShit(x));
console.log(wackShit(y));