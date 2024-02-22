const searchButton = document.getElementById("searchButton")
const sortInput = document.getElementById("sortInput")

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getServants(sortName) {
    // const apiUrl = "https://api.atlasacademy.io/export/NA/nice_servant.json"
    const apiUrl = "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"
    let tableData = []

    console.log(`Fetching Data for ${sortName}...`)
    //let servantDataRaw = 
    fetch(apiUrl).then(response => {
        if (!response.ok) {throw new Error("Network has no response!!!");}
        return response.json();
    }).then(data => {
        data.forEach(servant => {
            if (servant.name.toUpperCase().includes(sortName.toUpperCase())) {
                var servantData = `[${servant.collectionNo}][${capitalizeFirstLetter(servant.className)}] ${servant.name}:`;
                // console.log(servantData); // ${servant.originalName}
                rawData = [servant.collectionNo, servant.extraAssets.faces.ascension[3] , servant.className, servant.name]
                rawData.forEach(dt => { tableData.push(dt) })
                // console.log(rawData)
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
    if (tableData.length > 0) { createTable(tableData) }
    return tableData;
}

function createTable(tableData) {
    let rawHTML = ""
    let tableHeaders = ["Collection No.", "Image", "Servant Class", "Servant Name"]
    //make table
    rawHTML+="<table>"
    rawHTML+="<tr>"
    tableHeaders.forEach(th => {rawHTML+=`<th>${th}</th>`})
    rawHTML+="</tr>"
    for (let x=0; x<tableData.length; x++) {
        rawHTML+="<tr>"
        for (let y=0; y<tableHeaders.length; y++) {
            rawHTML+=`<td>${tableData[x++]}</td>`
        }
        rawHTML+="</tr>"
    }
    rawHTML+="</table>"
    console.log(rawHTML)
    tableLoc.write(rawHTML)
}

searchButton.addEventListener('click', getServants(sortInput.value))
// sortInput.addEventListener('change', function() { console.log(sortInput.value) })