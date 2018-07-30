$('#bold').click(function(){
      $('#para').toggleClass('bold');
})
$('#it').click(function(){
      $('#para').toggleClass('italic');
})

$('#und').click(function(){
      $('#para').toggleClass('underlined');
})
$('#font').change(function(){
      $('#para').css('font-family',$('#font').val())
})

$('#size').change(function(){
      $('#para').css('font-size' ,$('#size').val())
})
