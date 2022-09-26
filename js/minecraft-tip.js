var mcTip = document.getElementById("minecraft-tip");
var itemGlow = document.getElementById("item-glow");

$('.slot-item').mouseover(function(event) {
        var $PosTop = $(this).position().top;
        var $PosLeft = $(this).position().left;
        $(itemGlow).insertAfter($(this)).css({display: 'block', top: $PosTop + 2, left: $PosLeft + 2});
		$(itemGlow).attr("data-mctitle", $(this).attr("data-mctitle"));
		if($(this).attr("data-mclore") != undefined) {
			$(itemGlow).attr("data-mclore", $(this).attr("data-mclore"));
		} else {
			$(itemGlow).removeAttr("data-mclore");
		}
});
$('.item-wrapper').mouseover(function() {
        $(itemGlow).css("display", "block");
});
$('.item-wrapper').mouseout(function() {
        $(itemGlow).css("display", "none");
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
  // Sets X position of the tip, considering possible overflow to the right
  if (window.innerWidth - event.pageX - 17 - event.pageX % 2 < $(mcTip).outerWidth(true)) {
	var x = event.pageX - event.pageX % 2 - $(mcTip).outerWidth(true);  
  } else {
	var x = event.pageX + 9 - event.pageX % 2;
  }
  // Sets Y position of the tip, considering possible overflow to the top
  if (event.pageY - 28 - event.pageY % 2 - breakCount * 22 < $(document).scrollTop()) {
	  var y = event.pageY + 20 - event.pageY % 2 - $(document).scrollTop();
  } else {
	  var y = event.pageY - 28 - event.pageY % 2 - breakCount * 22 - $(document).scrollTop();
  }
  $(mcTip).css("left", x);
  $(mcTip).css("top", y);
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
  // Sets X position of the tip, considering possible overflow to the right
  if (window.innerWidth - event.pageX - 17 - event.pageX % 2 < $(mcTip).outerWidth(true)) {
	var x = event.pageX - event.pageX % 2 - $(mcTip).outerWidth(true);  
  } else {
	var x = event.pageX + 9 - event.pageX % 2;
  }
  // Sets Y position of the tip, considering possible overflow to the top
  if (event.pageY - 28 - event.pageY % 2 - breakCount * 22 < $(document).scrollTop()) {
	  var y = event.pageY + 20 - event.pageY % 2 - $(document).scrollTop();
  } else {
	  var y = event.pageY - 28 - event.pageY % 2 - breakCount * 22 - $(document).scrollTop();
  }
  $(mcTip).css("left", x);
  $(mcTip).css("top", y);
});

$(".minecraft-item").mouseout(function(event) {
  $(mcTip).css("display", "none");
});