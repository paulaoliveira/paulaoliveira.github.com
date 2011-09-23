$(document).ready(function() {
  var staff = 
    [ { name        : "Isabel Soares"
      , title       : "Principal Investigator"
      , image       : "static/img/face.png"
      , description : "<p>I'm super lame</p>"
      }
    , { name        : "Paula Oliveira"
      , title       : "PhD Student"
      , image       : "static/img/face.png"
      , description : "<p>I'm super lame</p>"
      }
    , { name        : "Ines Fachada"
      , title       : "PhD Student"
      , image       : "static/img/face.png"
      , description : "<p>I'm super lame</p>"
      }
    , { name        : "Ines Fachada"
      , title       : "PhD Student"
      , image       : "static/img/face.png"
      , description : "<p>I'm super lame</p>"
      }
    , { name        : "Ines Fachada"
      , title       : "PhD Student"
      , image       : "static/img/face.png"
      , description : "<p>I'm super lame</p>"
      }
    , { name        : "Ines Fachada"
      , title       : "PhD Student"
      , image       : "static/img/face.png"
      , description : "<p>I'm super lame</p>"
      }
    ];
  var news =
    [ { title   : "Fake Plastic Trees"
      , date    : "May 4th, 2011"
      , by      : "Paula Oliveira"
      , body    : "<p>Party like it's your birthday</p>"
      }
    , { title   : "Preparations"
      , date    : "May 3rd, 2011"
      , by      : "Paula Oliveira"
      , body    : "<p>Ponies!</p>"
      }
    ];

  var model = 
    { staff                   : ko.observableArray(staff)
    , selected_person_name    : ko.observable()
    , selected_person         : ko.observable()
    , news                    : ko.observableArray(news) 
    , selected_news_permalink : ko.observable()
    , selected_news_item      : ko.observable()
    , route                   : ko.observable()
    };

  ko.dependentObservable(function() {
    ko.utils.arrayMap(this.news(),
      function (item) {
        var article_perma = item.title.replace(/\s/g, "-")
          , date_perma    = item.date.replace(/\s/g, "-").replace(",","")
          ;
        item.title     = ko.observable(item.title);
        item.date      = ko.observable(item.date);
        item.permalink = ko.observable(date_perma + "-" + article_perma);
        return item;
      });
  }, model);

  ko.dependentObservable(function() {
    var name = this.selected_person_name();
    if(!name) { return; }
    var person = ko.utils.arrayFilter(this.staff(),
      function(person) { return person.name === name; })[0];
    if(!person) { return; }
    model.selected_person(person);
    return;
  }, model);

  ko.dependentObservable(function() {
    var permalink = this.selected_news_permalink();
    if(!permalink) { return; }
    var news_item = ko.utils.arrayFilter(this.news(),
      function(item) {
        return item.permalink() === permalink; 
      })[0];
    if(!news_item) { return; }
    model.selected_news_item(news_item);
    return;
  }, model);

  ko.kickstart_ss(model);

  ko.applyBindings(model);
});