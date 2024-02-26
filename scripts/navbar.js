$.get(`./navbar.html`, function(data){
    // console.log("WHAT")
    $("#navbarLocation").replaceWith(data);
    ['', 'about', 'unique'].forEach(btn => {
        const btnId = `${btn.length != 0 ? btn : "home"}Button`
        if (window.location.pathname === `/${btn}`){ 
            document.getElementById(btnId).setAttribute('disabled', '')
            document.getElementById(btnId).setAttribute('class', 'nav-link disabled')
        } else {
            $(btnId).click(function(){ window.location = `/${btn}` })
        }
        // console.log(document.getElementById(`${btn.length != 0 ? btn : "home"}Button`) )
    })
});
