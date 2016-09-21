function Conversion(source, cible) {
  this.source=document.getElementById(source);
  this.cible=document.getElementById(cible);
  this.creneaux = new Array;
};

Conversion.prototype.handleEvent = function (event){
  this.demarrer();
};

Conversion.prototype.demarrer = function() {
  var icsData=this.source.value;
  this.Conversion(icsData);
  this.cible.value = JSON.stringify(this.creneaux);

};

  Conversion.prototype.Conversion = function(icsData) {
    var icsData_inArray = icsData.split("BEGIN:VEVENT");
    icsData_inArray.shift();
    for (var index=0;index<icsData_inArray.length; index++){
        var creneau = new Creneau();
        var champs = icsData_inArray[index].split(String.fromCharCode(10));
        champs.shift();
        for (var indexChamp=0;indexChamp<champs.length; indexChamp++){
          this.ConversionChamp(creneau, champs[indexChamp]);
          this.creneaux.push(creneau);
        }
    }

  };

Conversion.prototype.ConversionChamp = function(creneau, champs){
  if (champs.indexOf(':') != -1) {
    var couple = champs.split(':');
    if (couple[0].startsWith("DTSTART"))
      creneau.debut = couple[1];
      else if (couple[0].startsWith("DTEND"))
      creneau.fin = couple[1];
      else if (couple[0].startsWith("SUMMARY"))
      creneau.resume = couple[1];
      else if (couple[0].startsWith("LOCATION"))
      creneau.lieu = couple[1];

      }

  };
