$(document).ready(function() {
  var staff = 
    [ { name        : "Isabel Soares"
      , title       : "Principal Investigator"
      , image       : "static/img/face.png"
      , email       : "fake_email@psi.uminho.pt"
      , description : "<p>I'm super lame</p>"
      }
    , { name        : "Paula Oliveira"
      , title       : "PhD Student"
      , image       : "static/img/face.png"
      , email       : "fake_email@psi.uminho.pt"
      , description : "<p>Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.</p>"
      }
    , { name        : "Ines Fachada"
      , title       : "PhD Student"
      , image       : "static/img/face.png"
      , email       : "fake_email@psi.uminho.pt"
      , description : "<p>I'm super lame</p>"
      }
    ];
  var news =
    [ { title       : "Fake Plastic Trees in Boston for the Time of the Year"
      , date        : "May 4th, 2011"
      , author      : "Paula Oliveira"
      , description : "Party like..."
      , body        : "<p>Party like it's your birthday</p>"
      }
    , { title       : "Preparations"
      , date        : "May 3rd, 2011"
      , author      : "Paula Oliveira"
      , description : "Ponies"
      , body        : "<p>Ponies!</p>"
      }
    ];
  var publications =
    [ { title          : "Bla Bla Bla Bla Bla"
      , date           : "June 4th, 2011"
      , apa            : "Something really boring that conforms to APA, 2008, et al."
      , member_authors : ["Isabel Soares", "Paula Oliveira"]
      , abstract       : "<p>We talk about bla</p>"
      , download       : "http://optional.com/download"
      }
    , { title          : "Another one bites the dust"
      , date           : "July 4th, 2011"
      , apa            : "Something really boring that conforms to APA, 2008, et al."
      , member_authors : ["Ines Fachada", "Paula Oliveira"]
      , abstract       : "<p>We talk about issues related to something. Can't download this thing is published and you need to pay to get</p>"
      , download       : "http://optional.com/buyme"
      }
    ];

  ko.app = {}; // start our namespace
  ko.app.models = 
    { staff:
      { collection         : ko.observableArray(staff)
      , selected           : ko.observable()
      , selected_permalink : ko.observable()
      }
    , news:
      { collection         : ko.observableArray(news)
      , selected           : ko.observable()
      , selected_permalink : ko.observable()
      }
    , publications:
      { collection         : ko.observableArray(publications)
      , selected           : ko.observable()
      , selected_permalink : ko.observable()
      }
    };

  // array with all the model names
  ko.app.model_names = $.map(ko.app.models, function(_,key) { return key; } );
});