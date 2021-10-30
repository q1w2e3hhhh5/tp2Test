let min=1;
let max=100;
let nbEssais=1;
let nbMystere=Math.floor(Math.random()*max)+1;
let nbEntre;

    do{
        nbEntre=window.prompt("Essais #"+nbEssais+"\n"+"Entrer un chiffre entre "+min+" et "+max)
        if(!(nbEntre==null)){
            if(isNaN(nbEntre)){
                alert("oi what the hell bro")
            }else{
                parseInt(nbEntre);
                if((nbEntre<min) ||(nbEntre>max)){
                    alert("ama let this one slide but be serious")
                }else{
                    nbEssais++
                    if(nbEntre<nbMystere){
                        min=nbEntre+1;
                    }else if(nbEntre>nbMystere){
                        max=nbEntre-1;
                    }else if(nbEntre==nbMystere){
                        alert("bravo")
                    }
                }
            }
        }else{
            alert("you quitted okay here is your score "+"\n"+"nombre essaie: "+nbEssais+"\n"+"nombre mystere: "+nbMystere)
        }
    }while((!(nbEntre==nbMystere))&&(!(nbEntre==null)))