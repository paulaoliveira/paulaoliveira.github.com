$(document).ready(function() {
  var people = 
    [ { name        : "Isabel Soares"
      , title       : "Principal Investigator"
      , image       : "static/img/face.png"
      , email       : "fake_email@psi.uminho.pt"
      , description : "<p>Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.</p>"
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
      , description : "<p>Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam.</p>"
      }
    ];
  var news =
    [ { title       : "De Finibus Bonorum et Malorum"
      , date        : "May 4th, 2011"
      , author      : "Isabel Soares"
      , description : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ..."
      , body        : "<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>"
      }
    , { title       : "Lorem Ipsum"
      , date        : "May 3rd, 2011"
      , author      : "Paula Oliveira"
      , description : "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis ..."
      , body        : "<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>"
      }
    ];
  var publications =
    [ { title           : "Tincidunt dictum, in tincidunt viverra id ipsum dignissim"
      , date            : "June 4th, 2011"
      , apa             : "Boorstin, D. (1992). The creators: A history of the heroes of the imagination. New York: Random House."
      , members_authors : ["Isabel Soares", "Paula Oliveira", "Ines Fachada"]
      , abstract        : "<p>Lacinia fusce eleifend maecenas iaculis, est sodales aenean lacinia, sem erat suspendisse sed, in wisi ullamcorper felis, netus ac vestibulum. Cum eget, ut semper aenean aenean ipsum quis metus, dui non egestas et cursus lorem nunc, vitae sed vestibulum nunc, dapibus inceptos ultrices massa neque anim ut. Dis in aliquam scelerisque arcu. Vestibulum et consectetuer morbi ultricies fringilla eu. In etiam purus aenean wisi leo tincidunt, arcu scelerisque curabitur, ut faucibus accumsan wisi in, velit vitae, dolor lectus aliquam placerat pharetra. Suscipit aliquam pellentesque semper et, ipsum nibh amet mauris etiam eget est, ultrices facilisi libero eu arcu amet, nihil tincidunt duis velit rutrum. Sed dolor wisi volutpat nullam, scelerisque in, pellentesque mauris. Cursus sit ligula tellus quisque, wisi aliquet egestas rhoncus semper, recusandae dui arcu lorem class, tincidunt dictum, in tincidunt viverra id ipsum dignissim.</p>"
      , download        : "http://google.com"
      }
    , { title           : "Risus"
      , date            : "July 4th, 2011"
      , apa             : "Hilts, P. J. (1999, February 16). In forecasting their emotions, most people flunk out. New York Times. Retrieved November 21, 2000, from http://www.nytimes.com"
      , members_authors : []
      , abstract        : "<p>Risus orci at ipsum euismod risus, pariatur etiam sapien morbi id erat orci, varius ipsum rhoncus vitae volutpat mi. Nulla platea suscipit dolor duis. Pede vivamus purus at consectetuer, neque wisi faucibus faucibus velit, a hendrerit ornare. Neque ac eleifend vivamus rerum, turpis id dictumst at, in leo vivamus vestibulum habitasse, amet in aliquam, nulla ipsum. Mattis amet imperdiet lacus vivamus, non tellus sit, donec vestibulum pharetra nulla, eget semper nisl quam, donec nulla fermentum mi sit elit suscipit. Pretium odio curabitur ut ac vestibulum, vitae magnis, scelerisque fusce ultricies et. Sodales commodo. Ac sed.</p>"
      }
    ];

  ko.app = {}; // start our namespace
  ko.app.models = 
    { people:
      { collection         : ko.observableArray(people)
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