$(document).ready(function(){
    $('#question-1').click(function(){
        $('#answer-1').slideToggle()
        $('#answer-2').css("display", "none")
        $('#answer-3').css("display", "none")
    })
    $('#question-2').click(function(){
        $('#answer-2').slideToggle()
        $('#answer-1').css("display", "none")
        $('#answer-3').css("display", "none")
    })
    $('#question-3').click(function(){
        $('#answer-3').slideToggle()
        $('#answer-1').css("display", "none")
        $('#answer-2').css("display", "none")
    })

})