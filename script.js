/*document.getElementById ("convertir").addEventListener(
"Click",
function (evenement){alert{bonjour};}
);
body.addEventListener("click",...)
*/
document.getElementById("convertir").addEventListener(
  "click",
  {handleEvent : function (event){
    text=document.getElementById("icsData").value;
    transform = text.split('\n');

    tableauResultat =[];
    tableauResultat += "{";
    for (var index=0; index<transform.length; index++){
    transform2 = transform[index].split(":");
    tableauResultat += transform2[0] + ":" + " '"+ transform2[1] + "'";
    if (index != transform.length-1)
    tableauResultat += ", ";
    }
    tableauResultat += "}";
    document.getElementById("jsonData").value=tableauResultat;
  //  alert(tableauResultat);
  }
}
);
