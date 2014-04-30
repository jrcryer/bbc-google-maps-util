window.BBCGoogleMapsUtil = (function () {
  var BBCGoogleMapsUtil = {

    /**
     * Prepare the Google map instance with some BBC agreed settings
     *
     * @param {google.maps.Map} map
     */
    prepareMap: function (map) {
      if (map instanceof google.maps.Map === false) {
        throw new TypeError("argument `map` must be of type `google.maps.Map`");
      }
      this.map = map;
      this.updateAttribution();
      this.addLegalNotices();
    },

    /**
     * Update the Google logo with a smaller BBC version
     *
     */
    updateAttribution: function () {
      var attributionControl = document.createElement('div');
      attributionControl.className = 'bbcGoogleAttribution';
      this.map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(attributionControl);
    },

    /**
     * Update the Google terms of use link
     *
     */
    addLegalNotices: function () {
      var legalNotices = document.createElement('div');
      legalNotices.className = 'bbcGoogleLegalNotices';
      this.map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(legalNotices);


      google.maps.event.addListener(this.map, "mapdataproviders_changed", function () {
        var dataProviders = this.get('mapDataProviders');
        if (dataProviders) {
          dataProviders += ' - ';
        }
        setMarkup(legalNotices, dataProviders);
      });

      setMarkup(legalNotices);
    }
  };

  var setMarkup = function(dom, withHtml) {
    var googleTermsURL = "http://www.google.com/help/terms_maps_no_navigation.html";
    dom.innerHTML = (withHtml || '') + '<a href="' + googleTermsURL + '" target="_blank">Terms of use</a>';
  };

  return BBCGoogleMapsUtil;

})();

if (typeof module !== "undefined" && module !== null) {
  module.exports = BBCGoogleMapsUtil;
}
