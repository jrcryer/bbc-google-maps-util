(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(factory({})); // AMD
  } else {
    global.BBCGoogleMapsUtil = factory({}); // <script>
  }
}(this, function (bbcGoogleMapUtil) {

  bbcGoogleMapUtil = {

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
     * Load a new instance if a google.maps.Map with BBC preferences applied.
     *
     * @param {DOM element} element
     * @param {Object} options
     */
    Map: function (element, options) {
      var defaults = {
        hideLegalNotices: true
      },
      mapInstance = new google.maps.Map(element, mergeOptions(defaults, options));

      this.prepareMap(mapInstance);

      return mapInstance;
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

  var mergeOptions = function (objectOne, objectTwo) {
    for (var prop in objectTwo) {
      objectOne[prop] = objectTwo[prop];
    }
    return objectOne;
  };

  var setMarkup = function(dom, withHtml) {
    var googleTermsURL = "http://www.google.com/help/terms_maps_no_navigation.html";
    dom.innerHTML = (withHtml || '') + '<a href="' + googleTermsURL + '" target="_blank">Terms of use</a>';
  };

  return bbcGoogleMapUtil;

}));
