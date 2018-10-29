$('.clickDelete').click(function(event){
    var name = event.target.name;
    console.log("Button name "+ name);
    $('#exampleModalCenter').modal('show');
    $("#deleteId").attr("href", "/user/deletepost/"+name)
});
