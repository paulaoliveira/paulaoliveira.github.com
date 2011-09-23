$(document).ready(function() {  
  ko.visuals = {};
  ko.visuals.show_person = function (person_name) {
      return function show_person(name) {
        name = unescape(name);
        $("#list_staff").hide();
        if(person_name  && person_name()  !== name)  { person_name(name); }
        $("#person").show();
      };
    };

  ko.visuals.show_staff = 
    function show_staff() {
      $("#list_staff").show();
      $("#person").hide();
    };
  
  ko.visuals.show_sections = function (router) {
      return function show_sections() {
        var current_section = router.getRoute(0)
          , main_sections   = $('section[data-route-0="' + current_section + '"]')
          , nav_current     = $('#nav #nav_' + current_section)
          , nav_current_a   = $('#nav #nav_' + current_section)
          ;
        $('section').hide();
        main_sections.show();
        $("#nav li").removeClass();
        nav_current.addClass(current_section+'_active');
      };
    };
});