
// to get and load the xml file!
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        viewteam(this);
      }
    };
    xmlhttp.open("GET", "team.xml", true);
    xmlhttp.send();
  }

  // to create a table for the xml file to show!
  function viewteam(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table='<tr><th>Title</th><th>Name</th><th>Position</th></tr>';
    var x = xmlDoc.getElementsByTagName("members");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("position")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }