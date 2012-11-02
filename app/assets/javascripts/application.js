// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .

function overlay(innerHTML){
  var overlayContent = $("<div id='videoSessionOverlay' />");
  overlayContent.append(innerHTML);
  overlayContent.css({
    width: "80%",
    background: "white",
    position: "absolute",
    left: "50%",
    top: "50%",
    padding: "30px",
    border: "1px black solid"
  });
  var body = $('body').css('position', 'relative');
  body.append(overlayContent);
  var overlayHeight = overlayContent.height();
  var overlayWidth = overlayContent.width();
  overlayContent.css({
    marginTop: -parseInt(overlayHeight, 10)/2,
    marginLeft: -parseInt(overlayWidth, 10)/2
  });

// overlay = {
// 
  // build: function(innerHTML) {
// 
    // var calculateOverlay = function() {
      // var windowHeight = $(window).height();
      // var bodyHeight = $('body').height();
//       
      // if (bodyHeight < windowHeight) {
          // overlayBackground.height(windowHeight);
      // }
// 
      // var bodyWidth = $('body').width();
      // var windowWidth = $(window).width();
      // var overlayHeight = overlayContent.height();
      // var overlayWidth = overlayContent.width();
      // var minMarginTop = 30;
      // var images = overlayContent.find("img, iframe");
// 
      // function set() {
        // overlayContent.css({
          // marginTop: -overlayContent.height()/2,
          // marginLeft: -overlayContent.width()/2,
          // width: overlayContent.width()
        // });
        // if (bodyHeight < windowHeight && overlayContent.height() < windowHeight) {
          // overlayBackground.height(windowHeight);
        // } else if (overlayContent.height() > windowHeight) {
          // overlayBackground.height((overlayContent.height() + minMarginTop) * 1.05);
          // overlayContent.css({
            // marginTop: 0,
            // top: minMarginTop
          // });
        // };
        // if (bodyWidth < windowWidth && overlayContent.width() < windowWidth) {
          // overlayBackground.width(windowWidth);
        // } else if (overlayContent.width() > windowWidth) {
          // overlayBackground.width((overlayContent.width() + minMarginTop) * 1.05);
          // overlayContent.css({
            // marginLeft: 0,
            // left: minMarginTop
          // });
        // };
        // overlayContent.fadeIn("fast");
      // };
// 
      // if (images) {
        // images.on("load", function() {
          // set();
        // });
      // }
       // else {
          // set();
        // }
    // };
    // var body = $('body').css({
        // position: 'relative'
      // });
// 
    // if (!$('.overlayBackground')) {
      // var overlayBackground = $("<div />", {"class": "overlay-background"}).appendTo(body);
      // var overlayContent = $("<div />", {"class": "overlay-content"}).appendTo(overlayBackground).hide();
    // } else {
      // var overlayBackground = $('.overlay-background')[0];
      // var overlayContent = overlayBackground.find('.overlay-content:first-child');
    // };
// 
    // overlayContent.html(innerHTML);
    // overlayContent.find("button[data-function=closeOverlay], input[data-function=closeOverlay], a[data-function=closeOverlay]").on("click", function(e) {
      // overlay.close(overlayBackground);
    // });
//     
    // calculateOverlay();
  // },
};

function closeOverlay(){
	$('#videoSessionOverlay').remove();
};

$('body').on('click', '#close_overlay_link', function(event){
		closeOverlay();
	});

function fitText(jquerySelector) {
  var text = $(jquerySelector);
  var calculateSize = function() {
    var text = $(jquerySelector);
    $.each(text, function(){
      var text = $(this).css({
        lineHeight: 0,
        fontSize: 0
      });
      var targetHeight = text.height();
      var targetWidth = text.width();
      //console.log("targetWidth: " + targetWidth)
      var inner = $("<div />").css({
        display: "inline-block",
        lineHeight: 1.5
      });
      text.wrapInner(inner);
      inner = text.find("div");
      var currentFontSize = parseInt(text.css("font-size"), 10);
      //console.log(inner.text());
      while (inner.height() < targetHeight) {
          currentFontSize++;
          text.css("font-size", currentFontSize + "px");
          //console.log("font-size: " + text.css("font-size") + " height: " + inner.height() + " width: " + inner.width());
      };
      while (inner.height() > targetHeight || inner.width() > targetWidth) {
        currentFontSize--;
        text.css("font-size", currentFontSize + "px");
        //console.log("font-size: " + text.css("font-size") + " height: " + inner.height() + " width: " + inner.width());
      };
      inner.css("padding-top", (targetHeight - inner.height())/2 + "px");
    });
  };
  calculateSize();
  setTimeout(calculateSize, 150);
  setTimeout(calculateSize, 500);
  setTimeout(calculateSize, 1000);
};