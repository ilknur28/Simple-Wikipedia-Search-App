var displayWikipediaData = ($linksElement) => {
   $linksElement = $('#links');
  var searchString = $('#searchString').val();

  var wikipediaUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=wikiCallback";
  $.ajax({
    url: wikipediaUrl,
    dataType: "jsonp",
    jsonp: "callback",
    success: function(data) {
      var linkLists = data[1];
      $linksElement.empty();
      linkLists.forEach((item) => {
        var itemURL = 'https://en.wikipedia.org/wiki/' + item;
        $linksElement.append('<li><a target="_blank" href="' + itemURL + '">' + item + '</a></li>');
        return itemURL;
      });

    }
  });
  return false;
};

$('#form').submit(displayWikipediaData);
