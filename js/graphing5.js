
function selectPatient(){
    console.log("Entered selectPatient Function");
    var patient = document.querySelector("#selectPatient").value;
    console.log("The selected Patient is " + patient);
        if (patient === "BodenR") {
            window.location.href = "http://www.westada.tech/a1/bodenr/projects/medicalchart.html";
        }
        else if (patient === "NoPatientSelected") {
            alert("You need to select a patient first Doc!");
        }
       else if (patient === "AlexA") {
            window.location.href = "http://www.westada.tech/a1/alexzandera/p/patientdata/index.html";
        }
       else if (patient === "AndyR") {
            window.location.href = "http://www.westada.tech/a1/andyr/projects/graphing4.html";
        }
        else if (patient === "CameronR") {
            window.location.href = "http://westada.tech/a1/cameronr/projects/patientdata/";
        } 
        else if (patient === "AlexK") {
            window.location.href = "http://westada.tech/a1/alexk/projects/medicalgraph/medical.html";
            
        }
       else if (patient === "FenixD") {
            window.location.href = "http://westada.tech/a1/fenixd/projects/healthGraph/patientdata.html";
       }
        else if (patient === "GavinO") {
            window.location.href = "http://westada.tech/a1/gavino/patient.html";
        }
        else if (patient === "HannahS") {
            window.location.href = "http://westada.tech/a1/hannahs/projects/medChart/";
        }
       else if (patient === "JulianF") {
            window.location.href = "http://westada.tech/a1/julianf/projects/patientdata/";
       }
        else if (patient === "JulianneG") {
            window.location.href = "http://westada.tech/a1/julianneg/projects/patientdata/index.html";
        }
        else if (patient === "KamlynO") {
            window.location.href = "http://westada.tech/a1/kamlyno/projects/patientdata/index.html";
        }
       else if (patient === "LucaP") {
            window.location.href = "http://westada.tech/a1/lucap/projects/patientdata/index.html";
        }
        else if (patient === "ThomasP") {
            window.location.href = "http://westada.tech/a1/thomasp/projects/bloodPressureChart/";
        } 
        else {
            alert("What? You shouldn't be seeing this error message Doc!")
        }
}

