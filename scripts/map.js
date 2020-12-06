function initMap() {
    const myLatLng = {
      lat: 25.1988,
      lng: 55.2796
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true
    });
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "our location"
    });
  }