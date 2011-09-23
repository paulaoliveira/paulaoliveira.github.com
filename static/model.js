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

  var model = 
    { staff                : ko.observableArray(staff) 
    , selected_person_name : ko.observable()
    , route                : ko.observable()
    , selected_person      : ko.observable()
    };

  ko.dependentObservable(function() {
    var name = this.selected_person_name();
    if(!name) { return; } // no change
    var person = ko.utils.arrayFilter(this.staff(),
      function(person) { return person.name === name; })[0];
    if(!person) { return; }
    model.selected_person(person);
    return;
  }, model);

  ko.kickstart_ss(model);

  ko.applyBindings(model);
});