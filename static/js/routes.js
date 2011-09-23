ko.kickstart_ss = function (v) {
  var routes          =
      { '/home'           : { on: function() {} }
      , '/people'         : { on: ko.visuals.list_staff  }
      , '/people/:person' : { on: ko.visuals.show_person(v.selected_person_name) }
      , '/research'       : { on: function() {} }
      , '/publications'   : { on: function() {} }
      , '/news'           : { on: ko.visuals.list_news }
      , '/news/:perma'    : { on: ko.visuals.show_news(v.selected_news_permalink) }
      , '/contact'        : { on: function() {} }
      }
    , router          = Router(routes)
    ;

  router.use({ on: ko.visuals.show_sections(router) });
  router.init("/home");
};