document.addEventListener("DOMContentLoaded", function () {
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById("location").innerText = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // You can use these coordinates to reverse geocode and get the location information
    reverseGeocode(latitude, longitude);
}

function showError(error) {
    let errorMessage = "Error retrieving location information: ";
    
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage += "User denied the request for geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage += "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage += "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage += "An unknown error occurred.";
            break;
    }

    document.getElementById("location").innerText = errorMessage;
}

function reverseGeocode(latitude, longitude) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const city = data.address.city || data.address.village || data.address.town || data.address.hamlet || '';
            const state = data.address.state || '';
            const zipCode = data.address.postcode || '';

            const locationInfo = `${city}, ${state} ${zipCode}`;
            document.getElementById("location").innerText = locationInfo;
        })
        .catch(error => {
            console.error("Error fetching location information:", error);
            document.getElementById("location").innerText = "Error fetching location information.";
        });
}
