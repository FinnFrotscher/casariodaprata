(function() {
  $(document).foundation();
  function myMap() {
    var position = new google.maps.LatLng(38.4672221, -9.1783877, 18);
    var mapOptions = {
      center: position,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({ position: position, map: map });
  }

  myMap();
})();
