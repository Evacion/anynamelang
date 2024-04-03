const servants = [
    {name: "Altria Pendragon", className: "Saber", series: "F/GO"},
    {name: "Chiron", className: "Archer", series: "F/Apocrpha"},
    {name: "Joan D'Arc", className: "Lancer", series: "F/GO"},
    {name: "Medusa", className: "Rider", series: "F/SN"},
    {name: "Leonardo Davinci", className: "Caster", series: "F/GO"},
    {name: "EMIYA", className: "Assassin", series: "F/GO"},
    {name: "Herakles", className: "Berserker", series: "F/SN"},
    {name: "Jeanne D'Arc", className: "Ruler", series: "F/Apocrypha"},
    {name: "Edmond Dantes", className: "Avenger", series: "F/GO"},
    {name: "Abigail Williams", className: "Foreigner", series: "F/GO"},
]

const hello = function(name = "lmao") {
    return (`Hello ${name}`)
}

module.exports = {servants, hello}