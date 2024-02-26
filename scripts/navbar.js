// console.log("NAVBAR.JS LOADED")
// console.log(`${window.location.pathname} == ' is ${window.location.pathname === '/'}`)

$.get(`./navbar.html`, function(data){
    console.log("WHAT")
    $("#navbarLocation").replaceWith(data);
    const navbarBtns = ['', 'about', 'unique']

    navbarBtns.forEach(btn => {
        if (window.location.pathname === `/${btn}`){ 
            document.getElementById(`${btn.length != 0 ? btn : "home"}Button`).setAttribute('disabled', '')
            console.log(document.getElementById(`${btn.length != 0 ? btn : "home"}Button`) )
        }
    })
});

$("#homeButton").click(function(){ 
    window.location = `/`; 
})
$("#uniqueButton").click(function(){ 
    window.location = `/unique`; 
})
$("#aboutButton").click(function(){ 
    window.location = `/about`; 
})
