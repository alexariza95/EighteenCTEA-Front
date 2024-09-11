if (typeof window !== 'undefined'){
  function initMap() {
    if (typeof window !== 'undefined'){
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.88547, lng: -4.779306 },
        mapId: 'ed71ed6ac9dcac8f',
        zoom: 13
      });
    
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat: 37.8854267, lng: -4.779344621 },
        map: map,
        title: '18Ctea Cordoba'
      });
    }
  }
    
  window.initMap = initMap;
}