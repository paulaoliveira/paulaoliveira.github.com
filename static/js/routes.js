ko.kickstart_ss = function (v) {
  var routes          =
      { '/home'           : { on: function() {} }
      , '/people'         : { on: ko.visuals.show_staff  }
      , '/people/:person' : { on: ko.visuals.show_person(v.selected_person_name) }
      , '/research'       : { on: function() {} }
      , '/publications'   : { on: function() {} }
      , '/news'           : { on: function() {} }
      , '/contact'        : { on: function() {} }
      }
    , router          = Router(routes)
    ;

  router.use({ on: ko.visuals.show_sections(router) });
  router.init("/home");
};