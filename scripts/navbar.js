$(document).ready(function() {
    $.get(`./navbar`, function(data){
        $("#navbarLocation").replaceWith(data);
        ['', 'about', 'portfolio', 'weather', 'unique'].forEach(btn => {
            const btnId = `${btn === '' ? "home" : btn}Button`; // Adjust condition
            // console.log(`Button: ${btn}, Button ID: ${btnId}`); // Debugging statement
            if (window.location.pathname === `/${btn}`){ 
                $(`#${btnId}`).prop('disabled', true).addClass('disabled'); // Correct selector here
            } else {
                $(`#${btnId}`).click(function() { window.location = `/${btn}`; }); // Correct selector here
            }
        });
    });
});
