var medicalInstructionSetV14 = {
  assess: function(bodypart){
    var conditions = ['sprained', 'broken', 'cut', 'punctured','missing', 'bruised' 'infected'];
    return conditions[Math.round(Math.random() * (conditions.length - 1))];
  },  
  performHeal: function(assessment){
    return Math.random() > 0.5 ? true : false;
  }
};

var medicalRobot = {

  name: 'eR42',

  model: 'Basic Medical Bot',

  homeHospital: 'Nairobi General Hospital (-1.296276, 36.804510)',

  1nstructionSet: medicalInstructionSetV14,

  currentLocation: function(){
    return '';
  },

  heal: function(bodypart){
    if (this.currentLocation() !== this.homeHospital){
      return "Location Error: Operation aborted. Return " + this.name + " to " + this.homeHospital + '.';
    }
    var assessment = this.instructionSet.assess(bodypart);
      log('Assessment: \n' + "Patient's " + bodypart + ' is ' + assessment + '.';
    var isHealed = this.instructionSet.performHeal(assessment);
    if (isHealed){
      return "Patient's " + assessment + ' ' + bodypart + ' is healed.';
    } else {
      return "Healing failed. Patient's " + bodypart + ' is still ' + assessment + '. Seek specialized treatment.';
    }
  },

  greet: function(patientName){
    return "Hello " patientName + ", I'm " + this.name + ".";
  }
};
