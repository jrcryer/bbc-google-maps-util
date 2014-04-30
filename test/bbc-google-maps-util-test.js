var map;

module( "BBCGoogleMapsUtil", {
  setup: function () {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 8,
      hideLegalNotices: true
    });
  }, teardown: function () {
    // Destroy Google maps instance
  }
});

test("should define method named prepareMap", function () {
  ok(typeof BBCGoogleMapsUtil.prepareMap === 'function', "BBCGoogleMapsUtil.prepareMap should be a method");
});

test("should throw error if instance of google.maps.Map is not passed to prepareMap", function () {
  raises(
    function () { BBCGoogleMapsUtil.prepareMap({}); },
    TypeError,
    "raised error message contains 'description'"
  );
});

asyncTest("should add Google attribution to map", function () {
  google.maps.event.addListenerOnce(map, 'idle', function () {
    var mapUtil = BBCGoogleMapsUtil.prepareMap(map);
    var attribution = document.getElementsByClassName('bbcGoogleAttribution');
    equal(attribution.length, 1, "Should add bbcGoogleAttribution to DOM");
    start();
  });
});
