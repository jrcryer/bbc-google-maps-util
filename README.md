BBC / Google Maps Utility
=========================

A Javascript Bower component to add some BBC agreed defaults to a Google map instance.

[![Build Status](https://travis-ci.org/BBC-Location-Services/bbc-google-maps-util.svg?branch=master)](https://travis-ci.org/BBC-Location-Services/bbc-google-maps-util)


Developing
----------

To start development make sure node is installed and run:

    npm install


### QUnit Tests

To run the unit tests use:

    grunt qunit

### Javascript Linting

To lint the javascipt files use:

    grunt jshint

### Quick Start

Once you have the component loaded onto your page you can load up an instance of a `google.maps.Map` object using the following.

```
var map = BBCGoogleMapsUtil.Map(document.getElementById("map"), {
  center: new google.maps.LatLng(-34.397, 150.644),
  zoom: 8
});
```

Alternatively you can load up an instance of a Google map manually and apply the BBC settings using the `BBCGoogleMapUtil.prepareMap` method.

````
var map = new google.maps.Map(document.getElementById("map"), {
  center: new google.maps.LatLng(-34.397, 150.644),
  zoom: 8,
  hideLegalNotices: true
});
BBCGoogleMapsUtil.prepareMap(map);
````
