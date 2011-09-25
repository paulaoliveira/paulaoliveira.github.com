$(document).ready(function() {
  function create_permalink(item,type) {
    item.permalink = ko.observable(ko.app.permalinks[type](item));
  }
  
  function make_observable(item) {
    $.each(item, function(key) {
      if(typeof item[key] !== 'function') {
        item[key] = ko.observable(item[key]);
      }
    });
  }
  
  function make_observable_and_create_permalink(model_name) {
    return function(item) {
        make_observable(item);
        create_permalink(item,model_name);
        return item;
      };
  }
  
  function find_selected(permalink, collection, item_observable) {
    var item = ko.utils.arrayFilter(collection,
      function(e) {
        return e.permalink() === permalink; 
      })[0];
    if(!item) { return; }
    item_observable(item);
    return;
  }

  // initialize models dependent observables
  $.each(ko.app.model_names, function(i,m){
    // create permalinks
    ko.dependentObservable(function() {
        ko.utils.arrayMap(this[m].collection(), make_observable_and_create_permalink(m)); }
    , ko.app.models);
    // update selected item to whatever is pointed by selected_permalink
    ko.dependentObservable(function() {
        var current_model  = this[m]
          , selected_perma = current_model.selected_permalink()
          ;
        if(!selected_perma) { return; }
        find_selected(selected_perma, current_model.collection(), current_model.selected);
      }
    , ko.app.models);
    // get the newest element of each model
    ko.app.models[m].newest = ko.dependentObservable(function() {
      return this[m].collection()[0];
    }, ko.app.models);
    // get the oldest element of each model
    ko.app.models[m].oldest = ko.dependentObservable(function() {
      return this[m].collection()[this[m].collection().length-1];
    }, ko.app.models);
  });

  // lazy evaluation of the router, bindings are ready so let's go
  ko.app.kickstart_router(ko.app.models);

  // render
  ko.applyBindings(ko.app.models);
});