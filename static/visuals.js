$(document).ready(function() {  
  ko.visuals = {};
  ko.visuals.show_person = function (name_observable) {
      return function show_person(name) {
        name = unescape(name);
        $("#people_list").hide();
        if(name_observable  && name_observable()  !== name)  { name_observable(name); }
        $("#people_show").show();
      };
    };

  ko.visuals.list_staff = 
    function list_staff() {
      $("#people_list").show();
      $("#people_show").hide();
    };

  ko.visuals.show_news = function (permalink_observable) {
      return function show_news(permalink) {
        $("#news_list").hide();
        if(permalink_observable  && permalink_observable()  !== permalink)  { permalink_observable(permalink); }
        $("#news_show").show();
      };
    };

  ko.visuals.list_news = 
    function list_snews() {
      $("#news_list").show();
      $("#news_show").hide();
    };

  ko.visuals.show_sections = function (router) {
      return function show_sections() {
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