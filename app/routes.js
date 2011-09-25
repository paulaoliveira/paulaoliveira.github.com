$(document).ready(function() {
  ko.app.kickstart_router = function (v) {
    var routes          =
        { '/home'                : { on: function() {} }
        , '/people'              : { on: ko.app.visuals.list_people  }
        , '/people/:perma'       : { on: ko.app.visuals.show_people(v.people.selected_permalink) }
        , '/research'            : { on: function() {} }
        , '/publications'        : { on: ko.app.visuals.list_publications }
        , '/publications/:perma' : { on: ko.app.visuals.show_publications(v.publications.selected_permalink) }
        , '/news'                : { on: ko.app.visuals.list_news }
        , '/news/:perma'         : { on: ko.app.visuals.show_news(v.news.selected_permalink) }
        , '/contact'             : { on: function() {} }
        }
      , router          = Router(routes)
      ;
  
    router.use({ on: ko.app.visuals.show_section(router) });
    router.init("/home");
  };
  
  function article(date,title) {
    if(typeof date !== 'string') {
      title = date.title();
      date = date.date();
    }
    var title_perma   = title.replace(/\s/g, "-")
      , date_perma    = date.replace(/\s/g, "-").replace(",","")
      ;
    return date_perma + "-" + title_perma;    
  }

  ko.app.permalinks = {};
  ko.app.permalinks.people = function (name) {
    if(typeof name !== 'string') { name = name.name(); } // we got an item
    return "#/people/" + escape(name);
  };
  ko.app.permalinks.publications = function(date,title) {
    return "#/publications/" + article(date,title);
  };
  ko.app.permalinks.news = function(date,title) {
    return "#/news/" + article(date,title);
  };

});