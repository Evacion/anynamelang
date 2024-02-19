function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mymodule = require("./mymodule")
// const apiUrl = "https://api.atlasacademy.io/export/NA/nice_servant.json"
const apiUrl = "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"

var sortName = "á"
console.log(`[${mymodule.fullname}] Fetching Data for ${sortName}...`)
fetch (apiUrl).then(response => {
    if (!response.ok) {throw new Error("Network has no response!!!");}
    return response.json();
}).then(data => {
    data.forEach(servant => {
        if (servant.name.toUpperCase().includes(sortName.toUpperCase())) {
            console.log(`[${servant.collectionNo}][${capitalizeFirstLetter(servant.className)}] ${servant.name}:`); // ${servant.originalName}
            var skillNames = [];
            servant.skills.forEach(skill => {
                var skillTemp = `${skill.name}`;
                for (var x = 0; x < skillNames.length; x++){
                    // console.log(`${skillNames[x][0]}`)
                    if (skillNames[x][0] == skill.num){
                        skillTemp = `${skill.name} [UPGRADED]`
                        // skillNames.shift(skillNames[x])
                    }
                }
                skillNames.push([skill.num, `${skillTemp}`]); //: ${skill.detail}
            });
            skillNames.sort(function(a,b){return a[0]-b[0];});
            console.log(skillNames);
        }
    });
}).catch(error => {console.log("Unexpected Error Encountered!", error)});