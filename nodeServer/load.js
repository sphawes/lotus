var currentTab = "0";

function load(){
	
	
	//generate html for tabs in navigation
	var tabHtml = "";
	for(var i = 0; i<plants.length; i++){
		var firstElementClass = "class='active'";
		if(i!=0){
			firstElementClass = '';
		}
		var link = "<li " + firstElementClass + "><a data-toggle='tab' href='#"+ i +"'>" + plants[i] + "</a></li>";
		tabHtml += link;
	}
	document.getElementById("nav").innerHTML = tabHtml;
	
	var contentAll = "";
	
	for(var i = 0; i<plantsByKind.length; i++){
		var firstElementClasses = " in active";
		if(i!=0){
			firstElementClasses = '';
		}
		var contentForPlantTab = "<div class='tabContent tab-pane fade" + firstElementClasses + "' id='" + i + "'>";
		for(var j = 0; j<plantsByKind[i].length; j++){
			contentForPlantTab += generateNodeHtml(i,j,plantsByKind);
		}
		contentAll += contentForPlantTab + "</div>";
	}
	
	document.getElementById("content").innerHTML = contentAll;
	
}

function generateNodeHtml(i,j,plantsByKind){
	var initializedTag = "Off";
	var initLabel = "label-danger";
	if(plantsByKind[i][j].initialized == true){
		initializedTag = "On";
		initLabel= "label-success";
	}
	var content = 
		"<div class='nodePanel'>" +
			"<a href='node.php?plant="+ i +"&node="+ j +"'><h3>" +
				plantsByKind[i][j].name +
			"</h3></a>" +
			"<h3><span class='label "+ initLabel +"'>"+ initializedTag +"</span></h3>" +
		"</div>"

	return content;
}

function switchTab(clickedTab){
	document.getElementById(currentTab).style.visibility = "hidden";
	document.getElementById(clickedTab).style.visibility = "visible";
	currentTab = clickedTab;
	
	
}