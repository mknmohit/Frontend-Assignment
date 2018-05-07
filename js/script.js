function htmldata(data){
var content = "<div class='comment_body'><div class='comment_pic'><img src='img/profile.png' alt='profile' height='50px'></div><div class='comment_data'><div class='comment_name'>Mohit</div><div class='comment_text'>"+data.commentText+"</div></div><div class='comment_info'><div class='comment_timestamp'><img src='img/clock.png' alt='Clock icon' width='20px' height='20px'><div class='comment_time'>"+data.date+"</div></div><div class='comment_likes'><div class='heart fa fa-heart'></div><div class='comment_likes_count'>0</div></div></div></div>";
$('#comment_container').append(content);
}

$(document).ready(function(){

	var comment = [
		{"commentText": "This is a sample comment", "date": "Apr 3, 8:20pm"}
	];

	if(!localStorage.commentData){
		localStorage.commentData =[];
	}
	else{
		comment = JSON.parse(localStorage.commentData);
	}

	for(var i=0; i<comment.length;i++){
		htmldata(comment[i]);
	}







	$('#submit').click(function(){

		var d = new Date(),
	    minutes = d.getMinutes(),
	    hours = d.getHours(),
	    ampm = d.getHours() >= 12 ? 'pm' : 'am',
	    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	    
	    hours = hours % 12;
	  	hours = hours ? hours : 12;
	    minutes = minutes < 10 ? '0'+minutes : minutes;
		var date = months[d.getMonth()]+' '+d.getDate()+', '+hours+':'+minutes+ampm;
		console.log(date);



		var addobj = {
			"commentText": $('#comment_value').val(),
			"date":	date
		};

		comment.push(addobj);
		localStorage.commentData = JSON.stringify(comment);
		htmldata(addobj);
		$('#comment_text').val('');
		$(date).val('');
	});
});






