function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                let destination = "3890 W Commercial Blvd #220, Tamarac, FL 33309";
                window.location.href = "https://www.google.com/maps/dir/?api=1&origin=" + lat + "," + lng + "&destination=" + encodeURIComponent(destination);
            },
            function (error) {
                alert("Unable to retrieve location.\nPlease turn on location services and try again.\n\nError: " + error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
