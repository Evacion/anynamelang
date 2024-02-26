// console.log("NAVBAR.JS LOADED")
// console.log(`${window.location.pathname} == ' is ${window.location.pathname === '/'}`)
// $("#homeButton").click(function(){ 
//     window.location = `/`; 
// })
// $("#uniqueButton").click(function(){ 
//     window.location = `/unique`; 
// })
// $("#aboutButton").click(function(){ 
//     window.location = `/about`; 
// })


$.get(`./navbar.html`, function(data){
    console.log("WHAT")
    $("#navbarLocation").replaceWith(data);
    const navbarBtns = ['', 'about', 'unique']

    navbarBtns.forEach(btn => {
        const btnId = `${btn.length != 0 ? btn : "home"}Button`
        if (window.location.pathname === `/${btn}`){ 
            document.getElementById(btnId).setAttribute('disabled', '')
            document.getElementById(btnId).setAttribute('class', 'nav-link disabled')
        } else {
            $(btnId).click(function(){
                window.location = `/${navbarBtns}`
            })
        }
        console.log(document.getElementById(`${btn.length != 0 ? btn : "home"}Button`) )
    })
});
