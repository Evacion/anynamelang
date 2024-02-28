function convertTime(time) {
    timeData = time.split(":")
    timeData[0] = (parseInt(timeData[0]) != 12) ? (timeData[2].split("")[2] == 'P') ? parseInt(timeData[0]) + 12 : parseInt(timeData[0]) : (timeData[2].split("")[2] == 'A') ? parseInt(timeData[0]) + 12 : parseInt(timeData[0])
    timeData[0] = timeData[0] == 24 ? 0 : timeData[0]
    return `${parseInt(timeData[0]) < 10 ? `0${timeData[0]}` : timeData[0]}:${timeData[1]}:${timeData[2].slice(0, 2)}`
}

console.log(`Ignore this Console Lmao`)

a = "07:05:45PM"
b = "12:00:00AM"
c = "12:45:54PM"
d = "09:30:16AM"
e = "11:59:59PM"

console.log(convertTime(a))
console.log(convertTime(b))
console.log(convertTime(c))
console.log(convertTime(d))
console.log(convertTime(e))









    // console.log(timeIndicator)
    // if (parseInt(timeData[0]) != 12) {
    //     if(timeIndicator == 'P'){
    //         timeData[0] =  parseInt(timeData[0]) + 12
    //     }else{
    //         timeData[0] =  parseInt(timeData[0])
    //     }
    // } else {
    //     if(timeIndicator == 'A'){
    //         timeData[0] =  parseInt(timeData[0]) + 12
    //     }else{
    //         timeData[0] =  parseInt(timeData[0])
    //     }
    // }