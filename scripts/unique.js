const mymodule = require("./mymodule")

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// const apiUrl = "https://api.atlasacademy.io/export/NA/nice_servant.json"
function getServant(sortName) {const apiUrl = "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"
    let tableHeaders = ["Collection No.", "Servant Class", "Servant Name"]
    let tableData = []

    console.log(`[${mymodule.fullname}] Fetching Data for ${sortName}...`)
    fetch (apiUrl).then(response => {
        if (!response.ok) {throw new Error("Network has no response!!!");}
        return response.json();
    }).then(data => {
        data.forEach(servant => {
            if (servant.name.toUpperCase().includes(sortName.toUpperCase())) {
                var servantData = `[${servant.collectionNo}][${capitalizeFirstLetter(servant.className)}] ${servant.name}:`;
                console.log(servantData); // ${servant.originalName}
                tableData.append(servant.collectionNo, servant.className, servant.name)
                // var skillNames = [];
                // servant.skills.forEach(skill => {
                //     var skillTemp = `${skill.name}`;
                //     for (var x = 0; x < skillNames.length; x++){
                //         if (skillNames[x][0] == skill.num){
                //             skillTemp = `${skill.name} [UPGRADED]`
                //         }
                //     }
                //     skillNames.push([skill.num, `${skillTemp}`]); //: ${skill.detail}
                // });
                // skillNames.sort(function(a,b){return a[0]-b[0];});
                // console.log(skillNames);
            }
        });
    }).catch(error => {console.log("Unexpected Error Encountered!", error)});
    return tableData;
}

function createTable(tableData) {

}