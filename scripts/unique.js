//import DataTable from "datatables.net-bs5";

const sortInput = document.getElementById("sortInput")
const tableLoc = document.getElementById("tableLoc");

function test(e) { tableLoc.innerHTML = `Test Successful. ${e}` }
function capitalizeFirstLetter(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function getRarity(rarity) {
    switch(rarity) {
        case 1:
        case 2: return 1;
        case 3: return 2;
        case 4:
        case 5: return 3;
        default: return 0;
    };
}

async function getServants() {
    // const apiUrl = "https://api.atlasacademy.io/export/NA/nice_servant.json"
    const apiUrl = "https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json"
    const sortName = ""
    // if (sortName.length > 0) { console.log(`Fetching Data for "${sortName}" in ${apiUrl}...`) }
    // else { console.log(`Search will not proceed.`) }

    // searchButton.disabled = true
    try {
        const response = await fetch(apiUrl, {})
        if (response.status >= 200 && response.status < 300) {
            data = await response.json();
            // console.log(data)
            const table = document.createElement("table")
            const thead = document.createElement("thead")
            const tbody = document.createElement("tbody")
    
            const head1 = document.createElement("th")
            const head2 = document.createElement("th")
            const head3 = document.createElement("th")
            const head4 = document.createElement("th")
            const head5 = document.createElement("th")

            const thRow = document.createElement("tr")
            
            head1.innerHTML = "#"
            head2.innerHTML = "Class"
            head3.innerHTML = "Name"
            head4.innerHTML = "Image"
            head5.innerHTML = "Rarity"
    
            thRow.appendChild(head1)
            thRow.appendChild(head2)
            thRow.appendChild(head3)
            thRow.appendChild(head4)
            thRow.appendChild(head5)

            thead.appendChild(thRow)
    
            table.appendChild(thead)
            table.appendChild(thead)
            // table.appendChild(tfoot)
            // tbody.setAttribute('class' , 'tbody-dark')

            data.forEach(item => {
                if (item.name.toLowerCase().includes(sortName)) {
                    // console.log(item)
                    const row = document.createElement("tr")

                    const col1 = document.createElement("td")
                    col1.innerHTML = item.collectionNo
                    row.appendChild(col1);

                    const classImg = document.createElement("img")
                    classImg.src = `https://static.atlasacademy.io/JP/ClassIcons/class${getRarity(item.rarity)}_${item.classId == 22 ? 21 : item.classId == 26 ? 24 : item.classId}.png`
                    classImg.setAttribute('style' , 'height: 50px;')
                    const col2 = document.createElement("td")
                    col2.appendChild(classImg) 
                    col2.innerHTML += ` ${capitalizeFirstLetter(item.className).replace(/([a-z])([A-Z])/g, '$1 $2')}`
                    row.appendChild(col2);

                    const col3 = document.createElement("td")
                    col3.innerHTML = item.name
                    row.appendChild(col3);

                    const col4 = document.createElement("td")
                    const face = document.createElement("img")
                    face.src = item.face
                    face.setAttribute('style' , 'height: 50px;')
                    col4.appendChild(face)
                    row.appendChild(col4);

                    const col5 = document.createElement("td")
                    col5.innerHTML = item.rarity
                    row.appendChild(col5);
                    

                    tbody.appendChild(row)
                }
            })
            table.appendChild(tbody)
            tableLoc.innerHTML = ""
            
            table.setAttribute('id', 'servantTable')
            table.setAttribute('class', 'table align-middle table-hover table-sm table-striped')
            table.setAttribute('class', 'display')
            table.setAttribute('data-toggle', 'table')
            table.setAttribute('data-search', 'true')
            table.setAttribute('data-toolbar', 'sortInput')
            table.setAttribute('data-pagination', 'true')
            table.setAttribute('data-page-list', '[10, 20, 50, 100, all]')
            thead.setAttribute('class' , 'h5')

            if (tbody.innerHTML == "") {
                tableLoc.innerHTML = "<p>No Results.</p>"
            } else {
                // dtTable = new DataTable(table)
                tableLoc.append(table)
            }
            // console.log(table)
        } else {
            tableLoc.innerHTML = "<p>No Results.</p>"
        }
    } catch (err) {
        console.log(err)
        tableLoc.innerHTML = `<p>Error with API.</p><p>${err}</p>`
    }
    // searchButton.disabled = false
}

async function getPokemons() {
    const sortName = ""
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

    try {
        console.log("WHAT")
        const pokeCount = 0
        const response = await fetch(apiUrl, {})
        if (response.status >= 200 && response.status < 300) {
            const data = await response.json()
            console.log(data)
            
            const table = document.createElement("table")
            const thead = document.createElement("thead")
            const tbody = document.createElement("tbody")
            
            const thRow = document.createElement("tr")
            const headers = ["Dex #", "Sprite", "Name", "Type 1", "Type 2", "HP", "Attack", "Defense", "Sp. Attack", "Sp. Defense", "Speed"]
            headers.forEach(header => {
                const head = document.createElement("th")
                head.innerHTML = header
                thRow.appendChild(head)
            })
            thead.appendChild(thRow)
            table.appendChild(thead)

            data.forEach(item => {
                console.log(item)
                pokeCount += 1
                try {
                    const pokemonResponse = fetch(`${item.url}`, {})
                    if (pokemonResponse.status >= 200 && pokemonResponse.status < 300) {
                        pokemon = pokemonResponse.json()
                        pokemon.forEach(pokeData => {
                            const row = document.createElement("tr")
                            const pdID = document.createElement("td")   //ID
                            pdID.innerHTML = pokeData.id
                            row.appendChild(pdID);

                            const pdImg = document.createElement("td")   //Image
                            const image = document.createElement("img")
                            image.src = `pokeData.sprites.front_default`
                            pdImg.appendChild(image)
                            row.appendChild(pdImg);

                            const pdName = document.createElement("td")   //Name
                            pdName.innerHTML = pokeData.name
                            row.appendChild(pdName);

                            pokeData.types.forEach(type => {    //Type 1, Type 2
                                const pdType = document.createElement("td")
                                pdType.innerHTML = type
                                row.appendChild(pdType)
                            })

                            pokeData.stats.forEach(stat => {    //HP, ATK, DEF, SPA, SPD, SPE
                                const pdStat = document.createElement("td")
                                pdStat.innerHTML = stat
                                row.appendChild(pdStat)
                            })
                            tbody.appendChild(row)
                        })
                    }
                } catch(err) { console.log(err) }
            })
            table.appendChild(tbody)
            tableLoc.innerHTML = ""
            table.setAttribute('id', 'pokeTable')
            table.setAttribute('class', 'table align-middle table-hover table-sm table-striped')
            table.setAttribute('class', 'display')
            table.setAttribute('data-toggle', 'table')
            table.setAttribute('data-search', 'true')
            table.setAttribute('data-toolbar', 'sortInput')
            table.setAttribute('data-pagination', 'true')
            table.setAttribute('data-page-list', '[10, 20, 50, 100, all]')
            thead.setAttribute('class' , 'h5')

            if (tbody.innerHTML === "") { tableLoc.innerHTML = "<p>No Results.</p>" } 
            else { tableLoc.append(table) }
        } else { tableLoc.innerHTML = "<p>No Results.</p>" }
    } catch (err) {
        console.log(err)
        tableLoc.innerHTML = `<p>Error with API.</p><p>${err}</p>`
    }
}