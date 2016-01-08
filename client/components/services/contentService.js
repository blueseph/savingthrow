(function() {
  angular.module("saving-throw")
    .service("contentService", function($meteor) {
    var service = {};
    var content = $meteor.collection(Content).subscribe('content')[0];

    var loadContent = function() {
      content = $meteor.collection(Content).subscribe('content')[0];
    };

    service.getContentFromCulture = function(culture) {
      if (_.isUndefined(content)) { loadContent(); }
      return content[culture];
    };

    return service;

  });
})();
