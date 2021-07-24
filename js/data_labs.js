	function loadData1(){
		var dataHandler = $("#data_labs1");
		dataHandler.html("");
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "doGetData1.php",
		success : function(result){
		  var resultObj = JSON.parse(result);
		  $.each(resultObj,function(key, val){
			var time=val['date'];
			var array=time.split(" ");
			if(val['temperature']>=25||val['humidity']>64){
				var newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:red'>"+"Alert"+"</td>");
				dataHandler.append(newRow);
			}
			else if(val['temperature']>=23||val['humidity']>62){
				var newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:yellow'>"+"Attention"+"</td>");
				dataHandler.append(newRow);
			}
			else{
				var newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:green'>"+"Normal"+"</td>");
				dataHandler.append(newRow);
			}
		  });
		  }
		});
		setTimeout(loadData1, 500);
	}
	
	function loadData2(){
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "doGetData2.php?microcontroller_labs=microcontroller_labs1",
		success : function(result){
		  if(result=="[]"){
		  document.getElementById('data_labs_micro1').innerHTML = "microcontroller_labs1"+"<br>"+"172.17.17.251"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  var resultObj = JSON.parse(result);
		  $.each(resultObj,function(key, val){
			document.getElementById('data_labs_micro1').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+val['date'];
		  });
		  }
		}
		});
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "doGetData2.php?microcontroller_labs=microcontroller_labs2",
		success : function(result){
		  if(result=="[]"){
		  document.getElementById('data_labs_micro2').innerHTML = "microcontroller_labs2"+"<br>"+"172.17.17.252"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  var resultObj = JSON.parse(result);
		  $.each(resultObj,function(key, val){
			document.getElementById('data_labs_micro2').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+val['date'];
		  });
		  }
		}
		});
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "doGetData2.php?microcontroller_labs=microcontroller_labs3",
		success : function(result){
		  if(result=="[]"){
		  document.getElementById('data_labs_micro3').innerHTML = "microcontroller_labs3"+"<br>"+"172.17.17.253"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  var resultObj = JSON.parse(result);
		  $.each(resultObj,function(key, val){
			document.getElementById('data_labs_micro3').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+val['date'];
		  });
		  }
		}
		});
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "doGetData2.php?microcontroller_labs=microcontroller_labs4",
		success : function(result){
		  if(result=="[]"){
		  document.getElementById('data_labs_micro4').innerHTML = "microcontroller_labs4"+"<br>"+"172.17.17.254"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  var resultObj = JSON.parse(result);
		  $.each(resultObj,function(key, val){
			document.getElementById('data_labs_micro4').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+val['date'];
		  });
		  }
		}
		});
		setTimeout(loadData2,500);
	}
	
	function loadData3(){
		var dataHandler = $("#data_labs2");
		dataHandler.html("");
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "doGetData3.php?"+"date1="+$("[name='date1']").val()+"&date2="+$("[name='date2']").val(),
		success : function(result){
		  var resultObj = JSON.parse(result);
		  $.each(resultObj,function(key, val){
			var time=val['date'];
			var array=time.split(" ");
			if(val['temperature']>=25||val['humidity']>64){
				var newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:red'>"+"Alert"+"</td>");
				dataHandler.append(newRow);
			}
			else if(val['temperature']>=23||val['humidity']>62){
				var newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:yellow'>"+"Attention"+"</td>");
				dataHandler.append(newRow);
			}
			else{
				var newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:green'>"+"Normal"+"</td>");
				dataHandler.append(newRow);
			}
		  });
		  }
		});
		setTimeout(loadData3,500);
	}
