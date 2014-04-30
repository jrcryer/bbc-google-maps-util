var BBCGoogleMapsUtil = {};

/**
 * Prepare the Google map instance with some BBC agreed settings
 *
 * @param {google.maps.Map} map
 */
BBCGoogleMapsUtil.prepareMap = function (map) {
  if (map instanceof google.maps.Map === false) {
    throw new TypeError("argument `map` must be of type `google.maps.Map`");
  }
  this.map = map;
  this.updateAttribution();
};


BBCGoogleMapsUtil.updateAttribution = function () {
  var attributionControl = document.createElement('div');
  attributionControl.className = 'bbcGoogleAttribution';
  this.map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(attributionControl);
};


if (typeof module !== "undefined" && module !== null) {
  module.exports = BBCGoogleMapsUtil;
}
