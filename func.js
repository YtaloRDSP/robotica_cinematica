function modo(){
    md = document.getElementById("modo_R").value;
    if(md == 1){
        document.getElementById("direta_R").classList.add("visible");
        document.getElementById("direta_R").classList.remove("invisible");
        document.getElementById("inversa_R").classList.add("invisible");
        document.getElementById("inversa_R").classList.remove("visible");  
        console.log("Direto") 
    } else{
        document.getElementById("direta_R").classList.add("invisible");
        document.getElementById("direta_R").classList.remove("visible");
        document.getElementById("inversa_R").classList.add("visible");
        document.getElementById("inversa_R").classList.remove("invisible");
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
    if(unidade_a == 1) d = d * (Math.PI/180)

    document.getElementById("results_direta_R").classList.remove("invisible");
    document.getElementById("results_direta_R").classList.add("visible");

    x = (Number(d) * Math.cos(Number(a))).toFixed(5)
    y = (Number(d) * Math.sin(Number(a))).toFixed(5)

    document.getElementById("results_xR").value = x + " " + unidade_d
    document.getElementById("results_yR").value = y + " " + unidade_d

    // if(unidade_a == 1) document.getElementById("results_yR").value = y + "\xB0"
    // else document.getElementById("results_yR").value = y + " rad"
    console.log("Distancia: " + d + " Angulo: " + a)
    console.log("X: " + x + " Y: " + y)
}

function R_inversa(){
    x = document.getElementById("x_R").value;
    y = document.getElementById("y_R").value;
    if(x == '' || y == ''){
        alert("Insira valores para o calculo")
        return null        
    } 
    unidade_d = document.getElementById("unidade_xR").value;
    unidade_a = document.getElementById("unidade_yR").value;

    document.getElementById("results_inversa_R").classList.remove("invisible");
    document.getElementById("results_inversa_R").classList.add("visible");

    a = Math.atan(y/x)

    document.getElementById("results_aR").value = a + "\xB0"

    // if(unidade_a == 1) document.getElementById("results_yR").value = y + "\xB0"
    // else document.getElementById("results_yR").value = y + " rad"
    console.log(" Y: " + a)
}