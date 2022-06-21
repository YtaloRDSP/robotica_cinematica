function modo(mec){
    md = document.getElementById("modo_"+mec).value;
    if(md == 1){
        document.getElementById("direta_"+mec).classList.add("visible");
        document.getElementById("direta_"+mec).classList.remove("invisible");
        document.getElementById("inversa_"+mec).classList.add("invisible");
        document.getElementById("inversa_"+mec).classList.remove("visible");  
        console.log("Direto") 
    } else{
        document.getElementById("direta_"+mec).classList.add("invisible");
        document.getElementById("direta_"+mec).classList.remove("visible");
        document.getElementById("inversa_"+mec).classList.add("visible");
        document.getElementById("inversa_"+mec).classList.remove("invisible");
        console.log("Inverso")
    }
}

function R_direta(){
    d = document.getElementById("d_R").value;
    a = document.getElementById("a_R").value;
    if(d == '' || a == ''){
        alert("Insira valores para o calculo")
        return null        
    } 
    unidade_d = document.getElementById("unidade_dR").value;
    unidade_a = document.getElementById("unidade_aR").value;
    if(unidade_a == 1) a = a * (Math.PI/180)

    document.getElementById("results_direta_R").classList.remove("invisible");
    document.getElementById("results_direta_R").classList.add("visible");

    x = (Number(d) * Math.cos(Number(a))).toFixed(5)
    y = (Number(d) * Math.sin(Number(a))).toFixed(5)

    document.getElementById("results_xR").value = x + " " + unidade_d
    document.getElementById("results_yR").value = y + " " + unidade_d
}

function R_inversa(){
    x = document.getElementById("x_R").value;
    y = document.getElementById("y_R").value;
    if(x == '' || y == ''){
        alert("Insira valores para o calculo")
        return null        
    } 
    unidade = document.getElementById("unidade_xR").value;

    document.getElementById("results_inversa_R").classList.remove("invisible");
    document.getElementById("results_inversa_R").classList.add("visible");

    d = (Math.sqrt((x*x)+(y*y))).toFixed(5)
    a = ((Math.atan(y/x)*180)/Math.PI).toFixed(5)

    document.getElementById("results_dR").value = d + " " + unidade
    document.getElementById("results_aR").value = a + "\xB0"

}

function RR_direta(){
    l1 = document.getElementById("l1_RR").value;
    l2 = document.getElementById("l2_RR").value;
    a1 = document.getElementById("a1_RR").value;
    a2 = document.getElementById("a2_RR").value;
    if(l1 == '' || l2 == '' || a1 == '' || a2 == ''){
        alert("Insira valores para o calculo")
        return null        
    } 
    unidade_d = document.getElementById("unidade_lRR").value;
    unidade_a = document.getElementById("unidade_aRR").value;
    if(unidade_a == 1){
        a1 = a1 * (Math.PI/180)
        a2 = a2 * (Math.PI/180)
    }

    document.getElementById("results_direta_RR").classList.remove("invisible");
    document.getElementById("results_direta_RR").classList.add("visible");

    x = (Number(l1) * Math.cos(Number(a1)) + Number(l2)*Math.cos(Number(a1)+Number(a2))).toFixed(5)
    y = (Number(l1) * Math.sin(Number(a1)) + Number(l2)*Math.sin(Number(a1)+Number(a2))).toFixed(5)

    document.getElementById("results_xRR").value = x + " " + unidade_d
    document.getElementById("results_yRR").value = y + " " + unidade_d
}

function RR_inversa(){
    l1 = document.getElementById("l1_iRR").value;
    l2 = document.getElementById("l2_iRR").value;
    x = document.getElementById("x_RR").value;
    y = document.getElementById("y_RR").value;
    if(l1 == '' || l2 == '' || x == '' || y == ''){
        alert("Insira valores para o calculo")
        return null        
    }

    l1 = Number(l1)
    l2 = Number(l2)
    x = Number(x)
    y = Number(y)

    document.getElementById("results_inversa_RR").classList.remove("invisible");
    document.getElementById("results_inversa_RR").classList.add("visible");

    a2 = Math.acos(((x*x)+(y*y)-(l1*l1)-(l2*l2))/(2*l1*l2)).toFixed(5)
    a1 = Math.atan((y*(l1+l2*Math.cos(a2))-x*l2*Math.sin(a2))/(x*(l1+l2*Math.cos(a2))+y*l2*Math.sin(a2))).toFixed(5)

    document.getElementById("results_a1RR").value = a1 + " rad"
    document.getElementById("results_a2RR").value = a2 + " rad"
}