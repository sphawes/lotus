function load(){
	
	var totalDays = plantsByKind[plant][node].temp.first[1] + plantsByKind[plant][node].temp.second[1] + plantsByKind[plant][node].temp.third[1];
	var percentThrough = plantsByKind[plant][node].daysElapsed / totalDays * 100;
	percentThrough = Math.ceil(percentThrough);
	var daysLeft = totalDays - plantsByKind[plant][node].daysElapsed;
	
	var initializedTag = "Off";
	var initLabel = "label-danger";
	if(plantsByKind[plant][node].initialized == true){
		initializedTag = "On";
		initLabel= "label-success";
	}
	
	document.getElementById("title").innerHTML=plantsByKind[plant][node].name;
		
	var contentAll = "";
	
	contentAll += "<div style='margin:5px;' class='row'>";
	
	contentAll += "<div id='toggleButton' class='col-md-4'><h3>Initialized Status: <span onclick='toggleInit();' class='toggle label "+ initLabel +"'>"+ initializedTag +"</span></h3></div>";

	contentAll += "<div class='col-md-3 col-md-offset-5'><h3 style='color:green;text-align:right;'>Plant: " + plantsByKind[plant][node].plant + "</h3></div>";
	
	contentAll += "</div>";
	
	
	
	contentAll += "<div style='margin:5px;'class='row'><div class='col-md-12'><h3>" + daysLeft + " Days Until Harvest - " + plantsByKind[plant][node].daysElapsed + "/" + totalDays + " Days</h3></div></div>";
	
	contentAll += "<div class='progress' style='margin:20px;' ><div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='min-width: 3em; width: "+ percentThrough +"%;'>"+percentThrough+"%</div></div>";
	
	
	//temperature panel
	contentAll += "<div class='col-md-6'><h1>Temperature</h1>";
	
	contentAll += "<div class='row' style='margin-top:20px;'>";
	
	contentAll += "<div class='col-md-6' style='text-align:right;'><h2>Span 1:</h2>";
	
	
	contentAll += "</div>";
	
	
	contentAll += "<div class='col-md-6'>";
	
	contentAll += "<div class='input-group' style='width:60%;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].temp.first[0] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>&deg;F</span></div>";
	
	contentAll += "<div class='input-group' style='width:60%;margin-top:10px;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].temp.first[1] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>Days</span></div>";
	
	contentAll += "</div>";
	
	contentAll += "</div><hr />";
	
	contentAll += "<div class='row' style='margin-top:20px;'>";
	
	contentAll += "<div class='col-md-6' style='text-align:right;'><h2>Span 2:</h2>";
	
	
	contentAll += "</div>";
	
	
	contentAll += "<div class='col-md-6'>";
	
	contentAll += "<div class='input-group' style='width:60%;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].temp.second[0] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>&deg;F</span></div>";
	
	contentAll += "<div class='input-group' style='width:60%;margin-top:10px;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].temp.second[1] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>Days</span></div>";
	
	contentAll += "</div>";
	
	contentAll += "</div><hr />";
	
	
	
	
	contentAll += "<div class='row' style='margin-top:20px;'>";
	contentAll += "<div class='col-md-6' style='text-align:right;'><h2>Span 3:</h2>";
	contentAll += "</div>";
	contentAll += "<div class='col-md-6'>";
	
	contentAll += "<div class='input-group' style='width:60%;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].temp.third[0] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>&deg;F</span></div>";
	
	contentAll += "<div class='input-group' style='width:60%;margin-top:10px;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].temp.third[1] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>Days</span></div>";
	
	contentAll += "</div>";
	
	contentAll += "</div>";
	
	contentAll += "</div>";
	
	
	//humidity panel
	contentAll += "<div class='col-md-6'><h1>Humidity</h1>";
	
	
	contentAll += "<div class='row' style='margin-top:20px;'>";
	
	contentAll += "<div class='col-md-6' style='text-align:right;'><h2>Span 1:</h2>";
	
	
	contentAll += "</div>";
	
	
	contentAll += "<div class='col-md-6'>";
	
	contentAll += "<div class='input-group' style='width:60%;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].hum.first[0] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>%</span></div>";
	
	contentAll += "<div class='input-group' style='width:60%;margin-top:10px;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].hum.first[1] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>Days</span></div>";
	
	contentAll += "</div>";
	
	contentAll += "</div><hr />";
	
	contentAll += "<div class='row' style='margin-top:20px;'>";
	
	contentAll += "<div class='col-md-6' style='text-align:right;'><h2>Span 2:</h2>";
	
	
	contentAll += "</div>";
	
	
	contentAll += "<div class='col-md-6'>";
	
	contentAll += "<div class='input-group' style='width:60%;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].hum.second[0] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>%</span></div>";
	
	contentAll += "<div class='input-group' style='width:60%;margin-top:10px;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].hum.second[1] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>Days</span></div>";
	
	contentAll += "</div>";
	
	contentAll += "</div><hr />";
	
	
	
	
	contentAll += "<div class='row' style='margin-top:20px;'>";
	contentAll += "<div class='col-md-6' style='text-align:right;'><h2>Span 3:</h2>";
	contentAll += "</div>";
	contentAll += "<div class='col-md-6'>";
	
	contentAll += "<div class='input-group' style='width:60%;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].hum.third[0] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>%</span></div>";
	
	contentAll += "<div class='input-group' style='width:60%;margin-top:10px;'><input type='text' class='form-control' placeholder='" + plantsByKind[plant][node].hum.third[1] + "' aria-describedby='basic-addon2'><span class='input-group-addon' id='basic-addon2'>Days</span></div>";
	
	contentAll += "</div>";
	
	contentAll += "</div>";

	
	
	contentAll += "</div>";
	
	//end of input fields for temp and humidity
	//start of submission button
	
	contentAll += "<div class='row'>";
	
		contentAll += "<div class='col-md-4 col-md-offset-4' style='margin-top:20px;'><button type='button' style='width:100%;' onclick='updateValues();' class='btn btn-primary'>Update</button></div>";
	
	contentAll += "</div>";
	
	
	
	
	
	document.getElementById("nodeContent").innerHTML=contentAll;
} 

function toggleInit(){
	
	var number = plantsByKind[plant][node].number;
	
	for(var i = 0; i<nodesObj.nodes.length; i++){
		if(nodesObj.nodes[i].number == number){
			var toggledValue = true;
			if(nodesObj.nodes[i].initialized){
				toggledValue = false;
			}
			nodesObj.nodes[i].initialized = toggledValue;
			if(toggledValue){
				
				document.getElementById("toggleButton").innerHTML="<h3>Initialized Status: <span onclick='toggleInit();' class='toggle label label-success'>On</span></h3>";
				window.alert("Node now initialized."+nodesObj.nodes[i].initialized);
			}
			else{
				document.getElementById("toggleButton").innerHTML="<h3>Initialized Status: <span onclick='toggleInit();' class='toggle label label-danger'>Off</span></h3>";
				window.alert("Node no longer initialized."+nodesObj.nodes[i].initialized);
			}
			
			break;
		}
	}
		
}

function updateValues(){
	window.alert("updating values");
}