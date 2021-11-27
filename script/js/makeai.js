
  $('#next').click(function() {
  $('.current').removeClass('current').hide()
    .next().show().addClass('current');  $('.current1').removeClass('current1').removeClass('active').next().addClass('active').addClass('current1');
    $( "li.current1" ).prevAll().find('span').addClass('active1');
if ($('.current').hasClass('first')) {
    $('#next').css('display', 'none');
  }

  if ($('.current').hasClass('last')) {
    $('#next').css('display', 'none');
  }
  $('#prev').css('display', 'none');

  if ($('.current').hasClass('finish')) {
    $('#prev').css('display', 'none');
  }

   if ($('.current').hasClass('finish1')) {
    $('#prev').css('display', 'none');
  }

});




$('#prev').click(function() {
  $('.current').removeClass('current').hide()
    .prev().show().addClass('current');
  $('.current1').removeClass('current1').removeClass('active').prev().addClass('active').addClass('current1');

  $("li.current1").find('span').removeClass('active1'); 
  
  if ($('.current').hasClass('first')) {
    $('#prev').css('display', 'none');
  }
  $('#next').css('display', 'none');
});




/*--------------------------------*/


  (function() {

  // getElementById
  function $id(id) {
    return document.getElementById(id);
  }

  // output information
  function Output(msg) {
    var m = $id("messages");
    m.innerHTML = msg + m.innerHTML;
  }

  // file drag hover
  function FileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
  }

  // file selection
  function FileSelectHandler(e) {

    // cancel event and hover styling
    FileDragHover(e);

    // fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      ParseFile(f);
    }

  }

  // output file information
  function ParseFile(file) {

 
    Output("<div class='oo'><img src='../script/image/mp3.png' class='aa'/>"+"<div class='xx'><input type='button' id='btn1' value='×' class='x' /></div> "+"<h5 class='mw'><strong>" + file.name +"</strong></h5></div>");

  }

  // initialize
  function Init() {

    var fileselect = $id("fileselect"),
      filedrag = $id("filedrag"),
      submitbutton = $id("submitbutton");

    // file select
    fileselect.addEventListener("change", FileSelectHandler, false);

    // is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {

      // file drop
      filedrag.addEventListener("dragover", FileDragHover, false);
      filedrag.addEventListener("dragleave", FileDragHover, false);
      filedrag.addEventListener("drop", FileSelectHandler, false);
      filedrag.style.display = "block";

      // remove submit button
      submitbutton.style.display = "none";
    }

  }

  // call initialization file
  if (window.File && window.FileList && window.FileReader) {
    Init();
  }

})();





     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

