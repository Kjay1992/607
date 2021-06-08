const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


      function initMap() {
        var location = {lat:-35.26149540934921, lng:174.1231824896602};
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom:15,
            center:location
    });
    var marker = new google.maps.Marker({
        position: location,
        map:map
    });