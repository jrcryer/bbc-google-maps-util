var BBCGoogleMapsUtil = {};

/**
 * Prepare the Google map instance with some BBC agreed settings
 *
 * @param {google.maps.Map} map
 */
BBCGoogleMapsUtil.prepareMap = function (map) {
  this.map = map;
};



if (typeof module !== "undefined" && module !== null) {
  module.exports = BBCGoogleMapsUtil;
}
