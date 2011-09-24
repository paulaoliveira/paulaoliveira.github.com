$(document).ready(function() {
  ko.app.visuals = {};

  $.each(ko.app.model_names, function(_,name) {
    ko.app.visuals['show_' + name] = function (permalink_observable) {
        return function (route_parameter) {
          var permalink = "#/" + name + "/" + route_parameter;
          $("#" + name + "_list").hide();
          if(permalink_observable  && permalink_observable()  !== permalink)  { 
            permalink_observable(permalink); 
          }
          $("#" + name + "_show").show();
        };
      };
    ko.app.visuals['list_'+name] = function () {
        $("#" + name + "_list").show();
        $("#" + name + "_show").hide();
      };
  });

  ko.app.visuals.show_section = function (router) {
      return function () {
        var current_section = router.getRoute(0)
          , main_sections   = $('section[data-route="' + current_section + '"]')
          , nav_current     = $('#nav #nav_' + current_section)
          ;
        $('section').hide();
        main_sections.show();
        $("#nav li").removeClass();
        nav_current.addClass(current_section+'_active');
      };
    };
});