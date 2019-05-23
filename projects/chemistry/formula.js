function chemicalform() {
    console.log("A Link between files has been established");
    var chem1 = document.getElementById("chem1").value;
    var chem2 = document.getElementById("chem2").value;
    var chem1index;
    console.log("Chem1 is: ", chem1, "and Chem2 is: ", chem2);
    
     if (chem1 == 'H' || chem1 == 'Li' || chem1 == 'Na' ||  chem1 == 'K' || chem1 == 'Rb' || chem1 == 'Cs' || chem1 == 'Fr' || chem1 == 'Ag'){
        chem1index = 1;
        console.log("Chem1index is: ", chem1index);
    }  else if (chem1 == 'Be' || chem1 == 'Mg' || chem1 == 'Ca' ||  chem1 == 'Sr' || chem1 == 'Ba' || chem1 == 'Ra' || chem1 == 'Za' || chem1 == 'Cd'){
        chem1index = 2;
        console.log("Chem1index is: ", chem1index);
    } else if (chem1 == 'Al' || chem1 == 'Ga'){
        chem1index = 3;
        console.log("Chem1index is: ", chem1index);
    } else if (chem1 == 'N' || chem1 == 'P'){
        chem1index = 5;
        console.log("Chem1index is: ", chem1index);
    }else if (chem1 == 'O' || chem1 == 'S' || chem1 == 'Se'){
        chem1index = 6;
        console.log("Chem1index is: ", chem1index);
    }else if (chem1 == 'F' || chem1 == 'Cl' || chem1 == 'Br' || chem1 == 'I'){
        chem1index = 7;
        console.log("Chem1index is: ", chem1index);
    }else if(chem1 =='He' || chem1 == 'Ne' || chem1 == 'Ar' || chem1 == 'Kr' || chem1 == 'Xe' || chem1 == 'Rn'){
        chem1index = 8;
        console.log("Chem1index is: ", chem1index);
    } else{
        console.log("Chemical 1 does not exist, or is not constant");
        document.querySelector("#silent").innerHTML = "Chemical 1 does not exist, or is not constant";
    }
    var chem2index;
    if (chem2 == 'H' || chem2 == 'Li' || chem2 == 'Na' ||  chem2 == 'K' || chem2 == 'Rb' || chem2 == 'Cs' || chem2 == 'Fr' || chem2 == 'Ag'){
        chem2index = 1;
        console.log("Chem2index is: ", chem2index);
    }  else if (chem2 == 'Be' || chem2 == 'Mg' || chem2 == 'Ca' ||  chem2 == 'Sr' || chem2 == 'Ba' || chem2 == 'Ra' || chem2 == 'Za' || chem2 == 'Cd'){
        chem2index = 2;
        console.log("Chem2index is: ", chem2index);
    } else if (chem2 == 'Al' || chem2 == 'Ga'){
        chem2index = 3;
        console.log("Chem2index is: ", chem2index);
    } else if (chem2 == 'N' || chem2 == 'P'){
        chem2index = 5;
        console.log("Chem2index is: ", chem2index);
    }else if (chem2 == 'O' || chem2 == 'S' || chem2 == 'Se'){
        chem2index = 6;
        console.log("Chem2index is: ", chem2index);
    }else if (chem2 == 'F' || chem2 == 'Cl' || chem2 == 'Br' || chem2 == 'I'){
        chem2index = 7;
        console.log("Chem2index is: ", chem2index);
    }else if(chem2 =='He' || chem2 == 'Ne' || chem2 == 'Ar' || chem2 == 'Kr' || chem2 == 'Xe' || chem2 == 'Rn'){
        chem2index = 8;
        console.log("Chem2index is: ", chem2index);
    }else{
        console.log("Chemical 2 does not exist, or is not constant");
        document.querySelector("#silent2").innerHTML = "Chemical 2 does not exist, or is not constant";
    }
    if (chem1index == 5){
        chem1index = -3;
        console.log("chem1index is: ", chem1index);
    } else if (chem1index == 6){
        chem1index = -2;
        console.log("chem1index is: ", chem1index);
    }else if (chem1index == 7){
        chem1index = -1;
        console.log("chem1index is: ", chem1index);
    } else if (chem1index == 8){
        chem1index = 0;
        console.log("Chemical 1 is a noble gas, and doesn't react");
        document.querySelector("#silent").innerHTML = "Chemical 1 is a noble gas, and doesn't react"
    }
    if (chem2index == 5){
        chem2index = -3;
        console.log("chem2index is: ", chem2index);
    } else if (chem2index == 6){
        chem2index = -2;
        console.log("chem2index is: ", chem2index);
    }else if (chem2index == 7){
        chem2index = -1;
        console.log("chem2index is: ", chem2index);
    } else if (chem2index == 8){
        chem2index = 0;
        console.log("Chemical 2 is a noble gas, and doesn't react");
        document.querySelector("#silent2").innerHTML = "Chemical 2 is a noble gas, and doesn't react"
    }
    var onechem;
    var twochem;
    var oneindex;
    var twoindex;
    if (chem1index > 0){
        oneindex = chem2index;
        twoindex = chem1index;
    }
    if (chem1index >= 1 && chem2index >= 1 || chem1index <= -1 && chem2index <= -1){
        console.log("Chem1 and Chem2 do not react, without extra chemicals");
        document.querySelector("#silent").innerHTML = "Chemical 1 and Chemical 2 do not react without extra chemicals";
    } else if (chem1index > chem2index){
        onechem = chem1;
        twochem = chem2;
    } else if (chem2index > chem1index){
        onechem = chem2;
        twochem = chem1;
    } console.log("onechem is ", onechem, ", twochem is ", twochem);
    if (oneindex == -twoindex){
        oneindex = oneindex / oneindex;
        twoindex = twoindex / twoindex;
    }
    document.querySelector("#one").innerHTML = onechem;
    if (oneindex != 1){
        document.querySelector("#two").innerHTML = Math.abs(oneindex);
    }
    
    document.querySelector("#three").innerHTML = twochem;
    if (twoindex != 1){
    document.querySelector("#four").innerHTML = twoindex;
    }
}
