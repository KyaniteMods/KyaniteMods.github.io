var mcTip = document.getElementById("minecraft-tip");

$('.slot-item').mouseover(function(event) {
		$('#item-glow').css("display", "block");
        var $PosTop = $(this).position().top;
        var $PosLeft = $(this).position().left;
		console.log($PosTop);
        console.log($PosLeft);
        $('#item-glow').insertAfter($(this)).css({display: 'block', top: $PosTop, left: $PosLeft});
		$('#item-glow').attr("data-mctitle", $(this).attr("data-mctitle"));
		if($(this).attr("data-mclore") != undefined) {
			$('#item-glow').attr("data-mclore", $(this).attr("data-mclore"));
		} else {
			$('#item-glow').removeAttr("data-mclore");
		}
    });
$('#item-glow').mouseout(function() {
        $(this).css({display: 'none'});
    });
	
	

$(".minecraft-item").mouseover(function(event) {
  $(mcTip).css("display", "block");
  if (event.target.dataset.mclore != null && typeof event.target.dataset.mclore != undefined) {
	  if (event.target.dataset.mclore.match("<br>") != null) {
		var breakCount = 1 + [...event.target.dataset.mclore.matchAll("<br>")].length;
	  } else {
		var breakCount = 1
	  }
  } else {
	var breakCount = 0
  }
  if (event.target.dataset.mclore) {
	mcTip.innerHTML = event.target.dataset.mctitle + "<br><span style='color: #aaaaaa; text-shadow: 0.125em 0.125em #2a2a2a' id='minecraft-lore'>" + event.target.dataset.mclore + "</span>";
  } else {
	mcTip.innerHTML = event.target.dataset.mctitle;
  }
  var x = event.pageX + 10 - event.pageX % 2;
  var y = event.pageY - 28.5 - event.pageY % 2 - breakCount * 22;
  $(mcTip).css("marginLeft", x);
  $(mcTip).css("marginTop", y);
});

$(".minecraft-item").mousemove(function(event) {
  if (event.target.dataset.mclore != null && typeof event.target.dataset.mclore != undefined) {
	  if (event.target.dataset.mclore.match("<br>") != null) {
		var breakCount = 1 + [...event.target.dataset.mclore.matchAll("<br>")].length;
	  } else {
		var breakCount = 1
	  }
  } else {
	var breakCount = 0
  }
  var x = event.pageX + 10 - event.pageX % 2;
  var y = event.pageY - 28.5 - event.pageY % 2 - breakCount * 22;
  $(mcTip).css("marginLeft", x);
  $(mcTip).css("marginTop", y);
});

$(".minecraft-item").mouseout(function(event) {
  $(mcTip).css("display", "none");
});