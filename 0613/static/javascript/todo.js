function addList(text){
    $("#list").append('<li>'+text+'</li>');
}

$(function(){
    var userwork=$("#work").val();
    var userstate=$("#state").val();
    var isCheck=allInputCheck(userwork,userstate);

});