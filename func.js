var R = {
    x: 0,
    y: 0,
    d: 0,
    a: 0,
    delta_x: 0,
    delta_y: 0,
    direta: function(){
        this.d = document.getElementById("d_R").value;
        this.a = document.getElementById("a_R").value;
        if(this.d == '' || this.a == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        let unidade_d = document.getElementById("unidade_dR").value;
        let unidade_a = document.getElementById("unidade_aR").value;
        if(unidade_a == 1) this.a = this.a * (Math.PI/180)

        document.getElementById("results_direta_R").classList.remove("invisible");
        document.getElementById("results_direta_R").classList.add("visible");

        this.x = (Number(this.d) * Math.cos(Number(this.a))).toFixed(5)
        this.y = (Number(this.d) * Math.sin(Number(this.a))).toFixed(5)

        document.getElementById("results_xR").value = this.x + " " + unidade_d
        document.getElementById("results_yR").value = this.y + " " + unidade_d
    },
    inversa: function(){
        this.x = document.getElementById("x_R").value;
        this.y = document.getElementById("y_R").value;
        if(this.x == '' || this.y == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        let unidade = document.getElementById("unidade_xR").value;

        document.getElementById("results_inversa_R").classList.remove("invisible");
        document.getElementById("results_inversa_R").classList.add("visible");

        this.d = (Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))).toFixed(5)
        this.a = ((Math.atan(this.y/this.x)*180)/Math.PI).toFixed(5)

        document.getElementById("results_dR").value = this.d + " " + unidade
        document.getElementById("results_aR").value = this.a + "\xB0"
    },
    precisao: function(){
        let a_linha = document.getElementById("pc_aR").value;
        if(a_linha == ''){
            alert("Insira valores para o calculo")
            return null        
        } 

        document.getElementById("results_precisao_R").classList.remove("invisible");
        document.getElementById("results_precisao_R").classList.add("visible");

        this.delta_x = (Math.abs(this.d*Math.sin(this.a))*(a_linha-this.a)).toFixed(5)
        this.delta_y = (Math.abs(this.d*Math.cos(this.a))*(a_linha-this.a)).toFixed(5)
        console.log(this.delta_x + " " + this.delta_y)
        document.getElementById("results_pcXR").value = this.delta_x
        document.getElementById("results_pcYR").value = this.delta_y
    }
}

var RR = {
    x: 0,
    y: 0,
    l1: 0,
    l2: 0,
    a1: 0,
    a2: 0,
    delta_x: 0,
    delta_y: 0,
    direta: function(){
        this.l1 = document.getElementById("l1_RR").value;
        this.l2 = document.getElementById("l2_RR").value;
        this.a1 = document.getElementById("a1_RR").value;
        this.a2 = document.getElementById("a2_RR").value;
        if(this.l1 == '' || this.l2 == '' || this.a1 == '' || this.a2 == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        unidade_d = document.getElementById("unidade_lRR").value;
        unidade_a = document.getElementById("unidade_aRR").value;
        if(unidade_a == 1){
            this.a1 = this.a1 * (Math.PI/180)
            this.a2 = this.a2 * (Math.PI/180)
        }
        this.l1 = Number(this.l1)
        this.l2 = Number(this.l2)
        this.a1 = Number(this.a1)
        this.a2 = Number(this.a2)
        document.getElementById("results_direta_RR").classList.remove("invisible");
        document.getElementById("results_direta_RR").classList.add("visible");

        this.x = (this.l1 * Math.cos(this.a1) + this.l2 * Math.cos(this.a1 + this.a2)).toFixed(5)
        this.y = (this.l1 * Math.sin(this.a1) + this.l2 * Math.sin(this.a1 + this.a2)).toFixed(5)

        document.getElementById("results_xRR").value = this.x + " " + unidade_d
        document.getElementById("results_yRR").value = this.y + " " + unidade_d
    },
    inversa: function(){
        this.l1 = document.getElementById("l1_iRR").value;
        this.l2 = document.getElementById("l2_iRR").value;
        this.x = document.getElementById("x_RR").value;
        this.y = document.getElementById("y_RR").value;
        if(this.l1 == '' || this.l2 == '' || this.x == '' || this.y == ''){
            alert("Insira valores para o calculo")
            return null        
        }

        this.l1 = Number(this.l1)
        this.l2 = Number(this.l2)
        this.x = Number(this.x)
        this.y = Number(this.y)

        document.getElementById("results_inversa_RR").classList.remove("invisible");
        document.getElementById("results_inversa_RR").classList.add("visible");

        this.a2 = Math.acos((Math.pow(this.x,2)+Math.pow(this.y,2)-Math.pow(this.l1,2)-Math.pow(this.l2,2))/(2*this.l1*this.l2))
        this.a1 = Math.atan((this.y*(this.l1+this.l2*Math.cos(this.a2))-this.x*this.l2*Math.sin(this.a2))/(this.x*(this.l1+this.l2*Math.cos(this.a2))+this.y*this.l2*Math.sin(this.a2)))

        this.unidade()
    },
    unidade: function(){
        let unidade_d = document.getElementById("result_unidade_aRR").value;
        if(unidade_d == 1){
            document.getElementById("results_a1RR").value = (((180 * this.a1)/Math.PI).toFixed(5)) + "\xB0"
            document.getElementById("results_a2RR").value = (((180 * this.a2)/Math.PI).toFixed(5)) + "\xB0"
        } else{
            document.getElementById("results_a1RR").value = (this.a1).toFixed(5) + " rad"
            document.getElementById("results_a2RR").value = (this.a2).toFixed(5) + " rad"
        }
    },
    precisao: function(){
        let a1_linha = document.getElementById("pc_a1RR").value;
        let a2_linha = document.getElementById("pc_a2RR").value;
        if(a1_linha == '' || a2_linha == ''){
            alert("Insira valores para o calculo")
            return null        
        } 

        a1_linha = Number(a1_linha)
        a2_linha = Number(a2_linha)
        let unidade_d = document.getElementById("result_unidade_aRR").value;
        if(unidade_d == 1){
            a1_linha = a1_linha * (Math.PI/180)
            a2_linha = a2_linha * (Math.PI/180)
        }
        console.log(a1_linha + " " + a2_linha)        
        
        document.getElementById("results_precisao_RR").classList.remove("invisible");
        document.getElementById("results_precisao_RR").classList.add("visible");

        this.delta_x = (Math.abs(this.l1*Math.sin(this.a1) + this.l2 * Math.sin(this.a1 + this.a2))*(a1_linha-this.a1) + Math.abs(this.l2 * Math.sin(this.a1 + this.a2))*(a2_linha-this.a2))
        this.delta_y = (Math.abs(this.l1*Math.cos(this.a1) + this.l2 * Math.cos(this.a1 + this.a2))*(a1_linha-this.a1) + Math.abs(this.l2 * Math.sin(this.a1 + this.a2))*(a2_linha-this.a2))
        console.log(this.delta_x + " " + this.delta_y)
        document.getElementById("results_pcXRR").value = this.delta_x.toFixed(5)
        document.getElementById("results_pcYRR").value = this.delta_y.toFixed(5)
    }
}

var RL = {
    x: 0,
    y: 0,
    d: 0,
    a: 0,
    delta_x: 0,
    delta_y: 0,
    direta: function(){
        this.d = document.getElementById("d_RL").value;
        this.a = document.getElementById("a_RL").value;
        if(this.d == '' || this.a == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        let unidade_d = document.getElementById("unidade_dRL").value;
        let unidade_a = document.getElementById("unidade_aRL").value;
        if(unidade_a == 1) this.a = this.a * (Math.PI/180)

        document.getElementById("results_direta_RL").classList.remove("invisible");
        document.getElementById("results_direta_RL").classList.add("visible");

        this.x = (Number(this.d) * Math.cos(Number(this.a))).toFixed(5)
        this.y = (Number(this.d) * Math.sin(Number(this.a))).toFixed(5)

        document.getElementById("results_xRL").value = this.x + " " + unidade_d
        document.getElementById("results_yRL").value = this.y + " " + unidade_d
    },
    inversa: function(){
        this.x = document.getElementById("x_RL").value;
        this.y = document.getElementById("y_RL").value;
        if(this.x == '' || this.y == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        let unidade = document.getElementById("unidade_xRL").value;

        document.getElementById("results_inversa_RL").classList.remove("invisible");
        document.getElementById("results_inversa_RL").classList.add("visible");

        this.d = (Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))).toFixed(5)
        this.a = ((Math.atan(this.y/this.x)*180)/Math.PI).toFixed(5)

        document.getElementById("results_dRL").value = this.d + " " + unidade
        document.getElementById("results_aRL").value = this.a + "\xB0"
    },
    precisao: function(){
        let a_linha = document.getElementById("pc_aRL").value;
        if(a_linha == ''){
            alert("Insira valores para o calculo")
            return null        
        } 

        document.getElementById("results_precisao_RL").classList.remove("invisible");
        document.getElementById("results_precisao_RL").classList.add("visible");

        this.delta_x = (Math.abs(this.d*Math.sin(this.a))*(a_linha-this.a)).toFixed(5)
        this.delta_y = (Math.abs(this.d*Math.cos(this.a))*(a_linha-this.a)).toFixed(5)
        console.log(this.delta_x + " " + this.delta_y)
        document.getElementById("results_pcXRL").value = this.delta_x
        document.getElementById("results_pcYRL").value = this.delta_y
    }
}

var RRR = {
    x: 0,
    y: 0,
    l1: 0,
    l2: 0,
    l3: 0,
    a1: 0,
    a2: 0,
    a3: 0,
    gama: 0,
    delta_x: 0,
    delta_y: 0,
    direta: function(){
        this.l1 = document.getElementById("l1_RRR").value;
        this.l2 = document.getElementById("l2_RRR").value;
        this.l3 = document.getElementById("l3_RRR").value;
        this.a1 = document.getElementById("a1_RRR").value;
        this.a2 = document.getElementById("a2_RRR").value;
        this.a3 = document.getElementById("a3_RRR").value;
        if(this.l1 == '' || this.l2 == '' || this.a1 == '' || this.a2 == '' || this.a3 == '' || this.l3 == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        let unidade_d = document.getElementById("unidade_lRRR").value;
        let unidade_a = document.getElementById("unidade_aRRR").value;
        if(unidade_a == 1){
            this.a1 = this.a1 * (Math.PI/180)
            this.a2 = this.a2 * (Math.PI/180)
            this.a3 = this.a3 * (Math.PI/180)
        }
        this.l1 = Number(this.l1)
        this.l2 = Number(this.l2)
        this.l3 = Number(this.l3)
        this.a1 = Number(this.a1)
        this.a2 = Number(this.a2)
        this.a3 = Number(this.a3)
        document.getElementById("results_direta_RRR").classList.remove("invisible");
        document.getElementById("results_direta_RRR").classList.add("visible");

        this.x = (this.l1 * Math.cos(this.a1) + this.l2 * Math.cos(this.a1 + this.a2) + this.l3 * Math.cos(this.a1 + this.a2 + this.a3))
        this.y = (this.l1 * Math.sin(this.a1) + this.l2 * Math.sin(this.a1 + this.a2) + this.l3 * Math.sin(this.a1 + this.a2 + this.a3))

        document.getElementById("results_xRRR").value = this.x.toFixed(5) + " " + unidade_d
        document.getElementById("results_yRRR").value = this.y.toFixed(5) + " " + unidade_d
    },
    inversa: function(){
        this.l1 = document.getElementById("l1_iRRR").value;
        this.l2 = document.getElementById("l2_iRRR").value;
        this.l3 = document.getElementById("l3_iRRR").value;
        this.gama = document.getElementById("gama_iRRR").value;
        this.x = document.getElementById("x_RRR").value;
        this.y = document.getElementById("y_RRR").value;
        if(this.l1 == '' || this.l2 == '' || this.l3 == '' || this.gama == '' || this.x == '' || this.y == ''){
            alert("Insira valores para o calculo")
            return null        
        }

        this.l1 = Number(this.l1)
        this.l2 = Number(this.l2)
        this.l3 = Number(this.l3)
        this.gama = Number(this.gama)
        this.x = Number(this.x)
        this.y = Number(this.y)

        let unidade_d = document.getElementById("result_unidade_aRRR").value;
        if(unidade_d == 1){
            this.gama = this.gama * (Math.PI/180)
        }

        document.getElementById("results_inversa_RRR").classList.remove("invisible");
        document.getElementById("results_inversa_RRR").classList.add("visible");

        let x3 = this.x - this.l3*Math.cos(this.gama)
        let y3 = this.y - this.l3*Math.sin(this.gama)
        console.log(x3 + ' ' + y3)
        this.a2 = Math.acos((Math.pow(x3,2)+Math.pow(y3,2)-Math.pow(this.l1,2)-Math.pow(this.l2,2))/(2*this.l1*this.l2))
        this.a1 = Math.atan((y3*(this.l1+this.l2*Math.cos(this.a2))-x3*this.l2*Math.sin(this.a2))/(x3*(this.l1+this.l2*Math.cos(this.a2))+y3*this.l2*Math.sin(this.a2)))
        this.a3 = this.gama - this.a1 - this.a2
        console.log(this.a2 + ' ' + this.a1)

        this.unidade()
    },
    unidade: function(){
        let unidade_d = document.getElementById("result_unidade_aRRR").value;
        if(unidade_d == 1){
            document.getElementById("results_a1RRR").value = (((180 * this.a1)/Math.PI).toFixed(5)) + "\xB0"
            document.getElementById("results_a2RRR").value = (((180 * this.a2)/Math.PI).toFixed(5)) + "\xB0"
            document.getElementById("results_a3RRR").value = (((180 * this.a3)/Math.PI).toFixed(5)) + "\xB0"
        } else{
            document.getElementById("results_a1RRR").value = (this.a1).toFixed(5) + " rad"
            document.getElementById("results_a2RRR").value = (this.a2).toFixed(5) + " rad"
            document.getElementById("results_a3RRR").value = (this.a3).toFixed(5) + " rad"
        }
    },
    precisao: function(){
        let a1_linha = document.getElementById("pc_a1RRR").value;
        let a2_linha = document.getElementById("pc_a2RRR").value;
        let a3_linha = document.getElementById("pc_a3RRR").value;
        if(a1_linha == '' || a2_linha == '' || a3_linha == ''){
            alert("Insira valores para o calculo")
            return null        
        } 

        a1_linha = Number(a1_linha)
        a2_linha = Number(a2_linha)
        a3_linha = Number(a3_linha)
        let unidade_d = document.getElementById("result_unidade_aRRR").value;
        if(unidade_d == 1){
            a1_linha = a1_linha * (Math.PI/180)
            a2_linha = a2_linha * (Math.PI/180)
            a3_linha = a3_linha * (Math.PI/180)
        }

        document.getElementById("results_precisao_RRR").classList.remove("invisible");
        document.getElementById("results_precisao_RRR").classList.add("visible");

        this.delta_x = Math.abs(-this.l1*Math.sin(this.a1) - this.l2 * Math.sin(this.a1 + this.a2) - this.l3 * Math.sin(this.a1 + this.a2 + this.a3))*(a1_linha-this.a1) + Math.abs(-this.l2 * Math.sin(this.a1 + this.a2) - this.l3 * Math.sin(this.a1 + this.a2 + this.a3))*(a2_linha-this.a2) + Math.abs(-this.l3 * Math.sin(this.a1 + this.a2 + this.a3))*(a3_linha-this.a3)
        this.delta_y = Math.abs(this.l1*Math.cos(this.a1) + this.l2 * Math.cos(this.a1 + this.a2) + this.l3 * Math.cos(this.a1 + this.a2 + this.a3))*(a1_linha-this.a1) + Math.abs(this.l2 * Math.sin(this.a1 + this.a2) + this.l3 * Math.cos(this.a1 + this.a2 + this.a3))*(a2_linha-this.a2) + Math.abs(this.l3 * Math.cos(this.a1 + this.a2 + this.a3))*(a3_linha-this.a3)
        document.getElementById("results_pcXRRR").value = this.delta_x.toFixed(5)
        document.getElementById("results_pcYRRR").value = this.delta_y.toFixed(5)
    }
}

var RLR = {
    x: 0,
    y: 0,
    l1: 0,
    l2: 0,
    l3: 0,
    a1: 0,
    a2: 0,
    a3: 0,
    gama: 0,
    delta_x: 0,
    delta_y: 0,
    direta: function(){
        this.l2 = document.getElementById("l2_RLR").value;
        this.l3 = document.getElementById("l3_RLR").value;
        this.a1 = document.getElementById("a1_RLR").value;
        this.a3 = document.getElementById("a3_RLR").value;
        if(this.l2 == '' || this.l3 == '' || this.a1 == '' || this.a3 == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        let unidade_d = document.getElementById("unidade_lRLR").value;
        let unidade_a = document.getElementById("unidade_aRLR").value;
        if(unidade_a == 1){
            this.a1 = this.a1 * (Math.PI/180)
            this.a3 = this.a3 * (Math.PI/180)
        }
        this.l2 = Number(this.l2)
        this.l3 = Number(this.l3)
        this.a1 = Number(this.a1)
        this.a3 = Number(this.a3)
        document.getElementById("results_direta_RLR").classList.remove("invisible");
        document.getElementById("results_direta_RLR").classList.add("visible");

        this.x = (this.l2 * Math.cos(this.a1) + this.l3 * Math.cos(this.a1 + this.a3))
        this.y = (this.l2 * Math.sin(this.a1) + this.l3 * Math.sin(this.a1 + this.a3))

        document.getElementById("results_xRLR").value = this.x.toFixed(5) + " " + unidade_d
        document.getElementById("results_yRLR").value = this.y.toFixed(5) + " " + unidade_d
    },
    inversa: function(){
        this.l3 = document.getElementById("l3_iRLR").value;
        this.gama = document.getElementById("gama_iRLR").value;
        this.x = document.getElementById("x_RLR").value;
        this.y = document.getElementById("y_RLR").value;
        if(this.l3 == '' || this.gama == '' || this.x == '' || this.y == ''){
            alert("Insira valores para o calculo")
            return null        
        }

        this.l3 = Number(this.l3)
        this.gama = Number(this.gama)
        this.x = Number(this.x)
        this.y = Number(this.y)

        let unidade_d = document.getElementById("result_unidade_aRLR").value;
        if(unidade_d == 1){
            this.gama = this.gama * (Math.PI/180)
        }

        document.getElementById("results_inversa_RLR").classList.remove("invisible");
        document.getElementById("results_inversa_RLR").classList.add("visible");

        let x3 = this.x - this.l3*Math.cos(this.gama)
        let y3 = this.y - this.l3*Math.sin(this.gama)
        
        this.a1 = Math.atan(y3/x3)
        this.a3 = this.gama - this.a1
        this.l2 = Math.sqrt(Math.pow((this.x - this.a3*Math.cos(this.gama)),2)+Math.pow((this.y - this.a3*Math.sin(this.gama)),2))
 
        this.unidade()
        let unidade_l = document.getElementById("unidade_xRLR").value;
        document.getElementById("results_l2RLR").value = (this.l2).toFixed(5) + " " + unidade_l
    },
    unidade: function(){
        let unidade_d = document.getElementById("result_unidade_aRLR").value;
        if(unidade_d == 1){
            document.getElementById("results_a1RLR").value = (((180 * this.a1)/Math.PI).toFixed(5)) + "\xB0"
            document.getElementById("results_a3RLR").value = (((180 * this.a3)/Math.PI).toFixed(5)) + "\xB0"
        } else{
            document.getElementById("results_a1RLR").value = (this.a1).toFixed(5) + " rad"
            document.getElementById("results_a3RLR").value = (this.a3).toFixed(5) + " rad"
        }
    },
    precisao: function(){
        let a1_linha = document.getElementById("pc_a1RLR").value;
        let l2_linha = document.getElementById("pc_l2RLR").value;
        let a3_linha = document.getElementById("pc_a3RLR").value;
        if(a1_linha == '' || l2_linha == '' || a3_linha == ''){
            alert("Insira valores para o calculo")
            return null        
        } 

        a1_linha = Number(a1_linha)
        l2_linha = Number(l2_linha)
        a3_linha = Number(a3_linha)
        let unidade_d = document.getElementById("result_unidade_aRLR").value;
        if(unidade_d == 1){
            a1_linha = a1_linha * (Math.PI/180)
            a3_linha = a3_linha * (Math.PI/180)
        }

        document.getElementById("results_precisao_RLR").classList.remove("invisible");
        document.getElementById("results_precisao_RLR").classList.add("visible");

        this.delta_x = Math.abs(-this.l2*Math.sin(this.a1) - this.l3 * Math.sin(this.a1 + this.a3))*(a1_linha-this.a1) + Math.abs(Math.cos(this.a1))*(l2_linha-this.l2) + Math.abs(-this.l3 * Math.sin(this.a1 + this.a3))*(a3_linha-this.a3)
        this.delta_y = Math.abs(this.l2*Math.cos(this.a1) + this.l3 * Math.cos(this.a1 + this.a3))*(a1_linha-this.a1) + Math.abs(Math.sin(this.a1))*(l2_linha-this.l2) + Math.abs(this.l3 * Math.cos(this.a1 + this.a3))*(a3_linha-this.a3)
        document.getElementById("results_pcXRLR").value = this.delta_x.toFixed(5)
        document.getElementById("results_pcYRLR").value = this.delta_y.toFixed(5)
    }
}

var TRR = {
    x: 0,
    y: 0,
    z: 0,
    l1: 0,
    l2: 0,
    l3: 0,
    a1: 0,
    a2: 0,
    a3: 0,
    gama: 0,
    delta_x: 0,
    delta_y: 0,
    delta_z: 0,
    direta: function(){
        this.l1 = document.getElementById("l1_TRR").value;
        this.l2 = document.getElementById("l2_TRR").value;
        this.l3 = document.getElementById("l3_TRR").value;
        this.a1 = document.getElementById("a1_TRR").value;
        this.a2 = document.getElementById("a2_TRR").value;
        this.a3 = document.getElementById("a3_TRR").value;
        if(this.l1 == '' || this.l2 == '' || this.l3 == '' || this.a1 == '' || this.a2 == '' || this.a3 == ''){
            alert("Insira valores para o calculo")
            return null        
        } 
        let unidade_d = document.getElementById("unidade_lTRR").value;
        let unidade_a = document.getElementById("unidade_aTRR").value;
        if(unidade_a == 1){
            this.a1 = this.a1 * (Math.PI/180)
            this.a2 = this.a2 * (Math.PI/180)
            this.a3 = this.a3 * (Math.PI/180)
        }
        this.l1 = Number(this.l1)
        this.l2 = Number(this.l2)
        this.l3 = Number(this.l3)
        this.a1 = Number(this.a1)
        this.a2 = Number(this.a2)
        this.a3 = Number(this.a3)
        document.getElementById("results_direta_TRR").classList.remove("invisible");
        document.getElementById("results_direta_TRR").classList.add("visible");

        let d = this.l2 * Math.cos(this.a2) + this.l3 * Math.cos(this.a2 + this.a3)
        this.x = d * Math.cos(this.a1)
        this.y = d * Math.sin(this.a1)
        this.z = this.l1 + this.l2 * Math.sin(this.a2) + this.l3 * Math.sin(this.a2 + this.a3)

        document.getElementById("results_xTRR").value = this.x.toFixed(5) + " " + unidade_d
        document.getElementById("results_yTRR").value = this.y.toFixed(5) + " " + unidade_d
        document.getElementById("results_zTRR").value = this.z.toFixed(5) + " " + unidade_d
    },
    inversa: function(){
        this.l1 = document.getElementById("l1_iTRR").value;
        this.l2 = document.getElementById("l2_iTRR").value;
        this.l3 = document.getElementById("l3_iTRR").value;
        this.gama = document.getElementById("gama_iTRR").value;
        this.x = document.getElementById("x_TRR").value;
        this.y = document.getElementById("y_TRR").value;
        this.z = document.getElementById("z_TRR").value;
        if(this.l1 == '' || this.l2 == '' || this.l3 == '' || this.gama == '' || this.x == '' || this.y == '' || this.z == ''){
            alert("Insira valores para o calculo")
            return null        
        }

        this.l1 = Number(this.l1)
        this.l2 = Number(this.l2)
        this.l3 = Number(this.l3)
        this.gama = Number(this.gama)
        this.x = Number(this.x)
        this.y = Number(this.y)
        this.z = Number(this.z)

        let unidade_d = document.getElementById("result_unidade_aTRR").value;
        if(unidade_d == 1){
            this.gama = this.gama * (Math.PI/180)
        }

        document.getElementById("results_inversa_TRR").classList.remove("invisible");
        document.getElementById("results_inversa_TRR").classList.add("visible");

        let d = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        let r = Math.sqrt(Math.pow(d, 2) + Math.pow((this.z - this.l1), 2))

        this.a3 = Math.acos((Math.pow(this.x,2) + Math.pow(this.y,2) + Math.pow((this.z - this.l1), 2)-Math.pow(this.l2,2)-Math.pow(this.l3,2))/(2*this.l2*this.l3))
        this.a2 = Math.atan(((this.z-this.l1)*(this.l2 + this.l3*Math.cos(this.a3))-d*this.l3*Math.sin(this.a3))/(d*(this.l2 + this.l3*Math.cos(this.a2))+(this.z-this.l1)*this.l3*Math.sin(this.a3)))
        this.a1 = Math.atan(this.x/this.y)

        this.unidade()
    },
    unidade: function(){
        let unidade_d = document.getElementById("result_unidade_aTRR").value;
        if(unidade_d == 1){
            document.getElementById("results_a1TRR").value = (((180 * this.a1)/Math.PI).toFixed(5)) + "\xB0"
            document.getElementById("results_a2TRR").value = (((180 * this.a2)/Math.PI).toFixed(5)) + "\xB0"
            document.getElementById("results_a3TRR").value = (((180 * this.a3)/Math.PI).toFixed(5)) + "\xB0"
        } else{
            document.getElementById("results_a1TRR").value = (this.a1).toFixed(5) + " rad"
            document.getElementById("results_a2TRR").value = (this.a2).toFixed(5) + " rad"
            document.getElementById("results_a3TRR").value = (this.a3).toFixed(5) + " rad"
        }
    },
    precisao: function(){
        let a1_linha = document.getElementById("pc_a1TRR").value;
        let a2_linha = document.getElementById("pc_a2TRR").value;
        let a3_linha = document.getElementById("pc_a3TRR").value;
        if(a1_linha == '' || a2_linha == '' || a3_linha == ''){
            alert("Insira valores para o calculo")
            return null        
        } 

        a1_linha = Number(a1_linha)
        a2_linha = Number(a2_linha)
        a3_linha = Number(a3_linha)
        let unidade_d = document.getElementById("result_unidade_aTRR").value;
        if(unidade_d == 1){
            a1_linha = a1_linha * (Math.PI/180)
            a2_linha = a2_linha * (Math.PI/180)
            a3_linha = a3_linha * (Math.PI/180)
        }

        document.getElementById("results_precisao_TRR").classList.remove("invisible");
        document.getElementById("results_precisao_TRR").classList.add("visible");

        this.delta_x = Math.abs(-this.l1*Math.sin(this.a1) - this.l2 * Math.sin(this.a1 + this.a2) - this.l3 * Math.sin(this.a1 + this.a2 + this.a3))*(a1_linha-this.a1) + Math.abs(-this.l2 * Math.sin(this.a1 + this.a2) - this.l3 * Math.sin(this.a1 + this.a2 + this.a3))*(a2_linha-this.a2) + Math.abs(-this.l3 * Math.sin(this.a1 + this.a2 + this.a3))*(a3_linha-this.a3)
        this.delta_y = Math.abs(this.l1*Math.cos(this.a1) + this.l2 * Math.cos(this.a1 + this.a2) + this.l3 * Math.cos(this.a1 + this.a2 + this.a3))*(a1_linha-this.a1) + Math.abs(this.l2 * Math.sin(this.a1 + this.a2) + this.l3 * Math.cos(this.a1 + this.a2 + this.a3))*(a2_linha-this.a2) + Math.abs(this.l3 * Math.cos(this.a1 + this.a2 + this.a3))*(a3_linha-this.a3)
        document.getElementById("results_pcXTRR").value = this.delta_x.toFixed(5)
        document.getElementById("results_pcYTRR").value = this.delta_y.toFixed(5)
    }
}

function start(){
    modo('R')
    modo('RR')
    modo('RL')
    modo('RRR')
    modo('RLR')
    modo('TRR')
}

function modo(mec){
    md = document.getElementById("modo_"+mec).value;
    if(md == 1){
        document.getElementById("direta_"+mec).classList.add("visible");
        document.getElementById("direta_"+mec).classList.remove("invisible");
        document.getElementById("inversa_"+mec).classList.add("invisible");
        document.getElementById("inversa_"+mec).classList.remove("visible");
    } else{
        document.getElementById("direta_"+mec).classList.add("invisible");
        document.getElementById("direta_"+mec).classList.remove("visible");
        document.getElementById("inversa_"+mec).classList.add("visible");
        document.getElementById("inversa_"+mec).classList.remove("invisible");
    }
}