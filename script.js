var url = window.location.href;
var s_name = url.includes('name=');
if (s_name == false)
{
	location.href ="https://google.com";
}
var split_url = url.split("?");
var s_url = false;
for (var i = 0; i < split_url.length; i++) {
	s_url = split_url[i].includes('name=');
	if (s_url == false)
	{
		//location.href ="https://google.com";
	}
	else
	{
		var name = split_url[i].replace("name=", "");
		var name = name.replace("%20", " ");
		document.getElementById("name_student").innerHTML = name;
		break;
	}
}
