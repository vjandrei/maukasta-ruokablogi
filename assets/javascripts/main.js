$(document).ready(function() {
  function getText(element) {
    var ret = '';
    var length = element.childNodes.length;
    for (var i = 0; i < length; i++) {
      var node = element.childNodes[i];
      if (node.nodeType != 8) {
        ret += node.nodeType != 1 ? node.nodeValue : getText(node);
      }
    }
    return ret;
  }

  function estimateReadingTime() {
    var content = document.getElementById('js-post-content');
    if (content) {
      var words = getText(content);
      var count = words.split(/\s+/).length;
      var readTime = Math.ceil((count / 150));
      var readTimeNode = document.createTextNode(readTime + ' min read');
      document.getElementById('js-reading-time').appendChild(readTimeNode);
    }
  }

  estimateReadingTime();
  
	$('.gridder-list').GridderAjax({
		scrollOffset: 200,
		rootUrl: "/gridder-ajax/"
	});
	
	
		$.ajaxSetup ({
	    cache: false
	  });

    $(".inner").click(function(e) { 
    e.preventDefault(); 

        var url = "data/index.html";
        $(".text").html("<p>loading...</p>").load(url);

    });
	
});
