ko.kickstart_ss = function (v) {
  var routes          =
      { '/home'           : { on: function() {} }
      , '/people'         : { on: show_staff    }
      , '/people/:person' : { on: show_person   }
      , '/research'       : { on: function() {} }
      , '/publications'   : { on: function() {} }
      , '/news'           : { on: function() {} }
      , '/contact'        : { on: function() {} }
      }
    , router          = Router(routes).use({ on: show_sections })
    , person_name     = v.selected_person_name
    ;

  function show_person(name) {
    name = unescape(name);
    $("#list_staff").hide();
    if(person_name  && person_name()  !== name)  { person_name(name); }
    $("#person").show();
  }

  function show_staff() {
    $("#list_staff").show();
    $("#person").hide();
  }

  function show_sections() {
    $('section').hide();
    var main_sections = 
      'section[data-route-0="' + router.getRoute(0) + '"]';
    $(main_sections).show();
  }

  router.init("/home");
};