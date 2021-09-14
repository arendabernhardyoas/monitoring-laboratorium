	function loadData1(){
		let dataHandler = $("#data_labs1");
		dataHandler.html("");
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "loadData1",
		success : function(result){
		  $.each(result,function(key, val){
                        function toIsoString(date) {
                        let tzo = -date.getTimezoneOffset(),
                           dif = tzo >= 0 ? '+' : '-',
                           pad = function(num) {
                               let norm = Math.floor(Math.abs(num));
                               return (norm < 10 ? '0' : '') + norm;
                           };
                        return date.getFullYear() +
                           '-' + pad(date.getMonth() + 1) +
                           '-' + pad(date.getDate()) +
                           ' ' + pad(date.getHours()) +
                           ':' + pad(date.getMinutes()) +
                           ':' + pad(date.getSeconds());
                        }
                        let dt = new Date(val['date']);
                        let time = toIsoString(dt);
			let array=time.split(" ");
			if(val['temperature']>=25||val['humidity']>64){
				let newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:red'>"+"Alert"+"</td>");
				dataHandler.append(newRow);
			}
			else if(val['temperature']>=23||val['humidity']>62){
				let newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:yellow'>"+"Attention"+"</td>");
				dataHandler.append(newRow);
			}
			else{
				let newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:green'>"+"Normal"+"</td>");
				dataHandler.append(newRow);
			}
		  });
		  }
		});
		setTimeout(loadData1, 5000);
	}

	function loadData2(){
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "loadData2?microcontroller_labs=microcontroller_labs1",
		success : function(result){
		  if(result==""){
		  document.getElementById('data_labs_micro1').innerHTML = "microcontroller_labs1"+"<br>"+"172.17.17.251"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  $.each(result,function(key, val){
                        function toIsoString(date) {
                        let tzo = -date.getTimezoneOffset(),
                           dif = tzo >= 0 ? '+' : '-',
                           pad = function(num) {
                               let norm = Math.floor(Math.abs(num));
                               return (norm < 10 ? '0' : '') + norm;
                           };
                        return date.getFullYear() +
                           '-' + pad(date.getMonth() + 1) +
                           '-' + pad(date.getDate()) +
                           ' ' + pad(date.getHours()) +
                           ':' + pad(date.getMinutes()) +
                           ':' + pad(date.getSeconds());
                        }
                        let dt = new Date(val['date']);
                        let time = toIsoString(dt);
			document.getElementById('data_labs_micro1').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+time;
		  });
		  }
		}
		});
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "loadData2?microcontroller_labs=microcontroller_labs2",
		success : function(result){
		  if(result==""){
		  document.getElementById('data_labs_micro2').innerHTML = "microcontroller_labs2"+"<br>"+"172.17.17.252"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  $.each(result,function(key, val){
                        function toIsoString(date) {
                        let tzo = -date.getTimezoneOffset(),
                           dif = tzo >= 0 ? '+' : '-',
                           pad = function(num) {
                               let norm = Math.floor(Math.abs(num));
                               return (norm < 10 ? '0' : '') + norm;
                           };
                        return date.getFullYear() +
                           '-' + pad(date.getMonth() + 1) +
                           '-' + pad(date.getDate()) +
                           ' ' + pad(date.getHours()) +
                           ':' + pad(date.getMinutes()) +
                           ':' + pad(date.getSeconds());
                        }
                        let dt = new Date(val['date']);
                        let time = toIsoString(dt);
			document.getElementById('data_labs_micro2').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+time;
		  });
		  }
		}
		});
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "loadData2?microcontroller_labs=microcontroller_labs3",
		success : function(result){
		  if(result==""){
		  document.getElementById('data_labs_micro3').innerHTML = "microcontroller_labs3"+"<br>"+"172.17.17.253"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  $.each(result,function(key, val){
                        function toIsoString(date) {
                        let tzo = -date.getTimezoneOffset(),
                           dif = tzo >= 0 ? '+' : '-',
                           pad = function(num) {
                               let norm = Math.floor(Math.abs(num));
                               return (norm < 10 ? '0' : '') + norm;
                           };
                        return date.getFullYear() +
                           '-' + pad(date.getMonth() + 1) +
                           '-' + pad(date.getDate()) +
                           ' ' + pad(date.getHours()) +
                           ':' + pad(date.getMinutes()) +
                           ':' + pad(date.getSeconds());
                        }
                        let dt = new Date(val['date']);
                        let time = toIsoString(dt);
			document.getElementById('data_labs_micro3').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+time;
		  });
		  }
		}
		});
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "loadData2?microcontroller_labs=microcontroller_labs4",
		success : function(result){
		  if(result==""){
		  document.getElementById('data_labs_micro4').innerHTML = "microcontroller_labs4"+"<br>"+"172.17.17.254"+"<br>"+"SHUTDOWN";
		  }
		  else{
		  $.each(result,function(key, val){
                        function toIsoString(date) {
                        let tzo = -date.getTimezoneOffset(),
                           dif = tzo >= 0 ? '+' : '-',
                           pad = function(num) {
                               let norm = Math.floor(Math.abs(num));
                               return (norm < 10 ? '0' : '') + norm;
                           };
                        return date.getFullYear() +
                           '-' + pad(date.getMonth() + 1) +
                           '-' + pad(date.getDate()) +
                           ' ' + pad(date.getHours()) +
                           ':' + pad(date.getMinutes()) +
                           ':' + pad(date.getSeconds());
                        }
                        let dt = new Date(val['date']);
                        let time = toIsoString(dt);
			document.getElementById('data_labs_micro4').innerHTML = val['device_name']+"<br>"+val['device_ipaddr']+"<br>"+
			val['temperature']+" &#8451&emsp;"+val['humidity']+" %"+"<br>"+time;
		  });
		  }
		}
		});
		setTimeout(loadData2,5000);
	}

	function loadData3(){
		let dataHandler = $("#data_labs2");
		dataHandler.html("");
		$.ajax({
		type : "GET",
		data : "",
		async: false,
		url  : "loadData3?date1="+$("[name='date1']").val()+"&date2="+$("[name='date2']").val(),
		success : function(result){
		  $.each(result,function(key, val){
                        function toIsoString(date) {
                        let tzo = -date.getTimezoneOffset(),
                           dif = tzo >= 0 ? '+' : '-',
                           pad = function(num) {
                               let norm = Math.floor(Math.abs(num));
                               return (norm < 10 ? '0' : '') + norm;
                           };
                        return date.getFullYear() +
                           '-' + pad(date.getMonth() + 1) +
                           '-' + pad(date.getDate()) +
                           ' ' + pad(date.getHours()) +
                           ':' + pad(date.getMinutes()) +
                           ':' + pad(date.getSeconds());
                        }
                        let dt = new Date(val['date']);
                        let time = toIsoString(dt);
			let array=time.split(" ");
			if(val['temperature']>=25||val['humidity']>64){
				let newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:red'>"+"Alert"+"</td>");
				dataHandler.append(newRow);
			}
			else if(val['temperature']>=23||val['humidity']>62){
				let newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:yellow'>"+"Attention"+"</td>");
				dataHandler.append(newRow);
			}
			else{
				let newRow=$("<tr>");
				newRow.html("<td>"+array[0]+"</td><td>"+array[1]+"</td><td>"+val['device_name']+"</td><td>"+val['device_ipaddr']+"</td><td>"+
				val['temperature']+" &#8451"+"</td><td>"+val['humidity']+" %"+"</td><td style='color:green'>"+"Normal"+"</td>");
				dataHandler.append(newRow);
			}
		  });
		  }
		});
		setTimeout(loadData3,5000);
	}



