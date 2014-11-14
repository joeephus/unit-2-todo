//Unit 2 todo list

// adding items to list


$(document).ready(function() 	{

//Creating list items
 	$(".theInput").keypress(function(e)	{
 		if 	(e.keyCode === 13) 	{
 		var apps = $("input").val();
 		var toss = "<span>" + " Toss it " + "</span>"
 		$(".list").append(" <li class='item'> " + apps +  " <button> " + toss + " </button> </li> ");
 		};
 	});


//removing list items 
	$(document).on("click", ".item button", function () {
        $(this).parent().remove();
    });

//Toggling a class that creates line-through

	$(document).on("click", '.item', function() {
		console.log("run");
		$(this).toggleClass("line_through").fadeIn(500);
	});



});

	

