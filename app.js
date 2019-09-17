$(document).ready(function(){
	fetch();
	//add
	$('#addnew').click(function(){
		$('#add').modal('show');
	});
	$('#addForm').submit(function(e){
		e.preventDefault();
		var addform = $(this).serialize();
		//console.log(addform);
		$.ajax({
			method: 'POST',
			url: 'add.php',
			data: addform,
			dataType: 'json',
			success: function(response){
				$('#add').modal('hide');
				if(response.error){
					$('#alert').show();
					$('#alert_message').html(response.message);
				}
				else{
					$('#alert').show();
					$('#alert_message').html(response.message);
					fetch();
				}
			}
		});
	});
	//

	//edit
	$(document).on('click', '.edit', function(){
		var id = $(this).data('id');
		getDetails(id);
		$('#edit').modal('show');
	});
	$('#editForm').submit(function(e){
		e.preventDefault();
		var editform = $(this).serialize();
		$.ajax({
			method: 'POST',
			url: 'edit.php',
			data: editform,
			dataType: 'json',
			success: function(response){
				if(response.error){
					$('#alert').show();
					$('#alert_message').html(response.message);
				}
				else{
					$('#alert').show();
					$('#alert_message').html(response.message);
					fetch();
				}

				$('#edit').modal('hide');
			}
		});
	});
	//

	//review
	$(document).on('click', '.review', function(){
		var id = $(this).data('id');
		getDetails(id);
		$('#review').modal('show');
	});
	$('#reviewForm').submit(function(e){
		e.preventDefault();
		var editform = $(this).serialize();
		$.ajax({
			method: 'POST',
			url: 'review.php',
			data: editform,
			dataType: 'json',
			success: function(response){
				if(response.error){
					$('#alert').show();
					$('#alert_message').html(response.message);
				}
				else{
					$('#alert').show();
					$('#alert_message').html(response.message);
					fetch();
				}

				$('#review').modal('hide');
			}
		});
	});
	//



	//locker
	$(document).on('click', '.locker', function(){
		var id = $(this).data('id');
		getDetails(id);
		$('#locker').modal('show');
	});

	$('.id').click(function(){
		var id = $(this).val();
		$.ajax({
			method: 'POST', 
			url: 'locker.php',
			data: {id:id},
			dataType: 'json',
			success: function(response){
				if(response.error){
					$('#alert').show();
					$('#alert_message').html(response.message);
				}
				else{
					$('#alert').show();
					$('#alert_message').html(response.message);
					fetch();
				}
				
				$('#locker').modal('hide');
			}
		});
	});
	//

	//hide message
	$(document).on('click', '.close', function(){
		$('#alert').hide();
	});

});

function fetch(){
    $(document).ready(function(){
        function getData(){
            $.ajax({
                type: 'POST',
                url: 'fetch.php',
                success: function(data){
                    $('#tbody').html(data);
                }
            });
        }
        getData();
        setInterval(function () {
            getData(); 
        }, 30000);  // it will refresh your data every 1 sec

    });
}



function getDetails(id){
	$.ajax({
		method: 'POST',
		url: 'fetch_row.php',
		data: {id:id},
		dataType: 'json',
		success: function(response){
			if(response.error){
				$('#edit').modal('hide');
				$('#review').modal('hide');
				$('#locker').modal('hide');
				$('#alert').show();
				$('#alert_message').html(response.message);
			}
			else{
				$('#id').val(response.data.id);
				$('.id').val(response.data.id);
				$('.munkalap_id').val(response.data.munkalap_id);
				$('.keszulek').val(response.data.keszulek);
				$('.tetel_1').val(response.data.tetel_1);
				$('.tetel_2').val(response.data.tetel_2);
				$('.tetel_3').val(response.data.tetel_3);
				$('.tetel_4').val(response.data.tetel_4);
				$('.tetel_5').val(response.data.tetel_5);
				$('.tetel_6').val(response.data.tetel_6);
				$('.tetel_7').val(response.data.tetel_7);
				$('.tetel_8').val(response.data.tetel_8);
				$('.tetel_9').val(response.data.tetel_9);
				$('.tetel_10').val(response.data.tetel_10);
				$('.statusz').val(response.data.statusz);
				$('.szervizinfo').val(response.data.szervizinfo);
				$('.ugyintezoinfo').val(response.data.ugyintezoinfo);
				$('.felhasznalo').val(response.data.felhasznalo);
				$('.bolt_id').val(response.data.bolt_id);

			}
		}
	});
}