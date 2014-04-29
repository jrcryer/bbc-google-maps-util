var map;

module( "BBCGoogleMapsUtil", {
  setup: function () {
    // Setup a Gooogle map instance
  }, teardown: function () {
    // Destroy Google maps instance
  }
});

test("should define method named prepareMap", function () {
  ok(typeof BBCGoogleMapsUtil.prepareMap === 'function', "BBCGoogleMapsUtil.prepareMap should be a method");
});
