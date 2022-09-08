/*......................................................using input...............................................*/

// this code is written by Joydev Gorai... 

//we can print alert messege when the input value exceed its length 19

// function btn1(){
//     if(document.from.result.value.length>19)
//     {
//         alert("out of range...")
//     }
//     else{
//         document.getElementById("displaybox").value+= 1;
//     }
//     }






function btn1(){
        document.getElementById("displaybox").value+= 1;
    }


    
    function btn2(){
    document.getElementById("displaybox").value+= 2;
    }
    
    function btn3(){
        document.getElementById("displaybox").value+=3;
     }
    
     function btn4(){
        document.getElementById("displaybox").value+=4;
        }
    
    function btn5(){
            document.getElementById("displaybox").value+=5;
            }
    
    function btn6(){
    document.getElementById("displaybox").value+=6;
    }
    
    function btn7(){
        document.getElementById("displaybox").value+=7;
        }
    
    
    function btn8(){
    document.getElementById("displaybox").value+=8;
    }
    
    
    function btn9(){
        document.getElementById("displaybox").value+=9;
        }
    
    function btn0(){
        var value0=document.from.result.value;
        // if(value0[0]!=0)
        // {
        //     document.getElementById("displaybox").value+=0;
        // }
        // else if(value0[0]==0 && value0[1]!=0){
        //     document.getElementById("displaybox").value+=0;
        // }
        // else if(value0[0]==0){

        // }
        document.getElementById("displaybox").value+=0;
    }
    


    function btndot(){
        var dotitem=document.from.result.value;
        if(dotitem[dotitem.length-1]==".")
        {

        }
        else{
            document.getElementById("displaybox").value+=".";
        }
    }
    
    
    function plus(){
        var plusitem=document.from.result.value;
        if(plusitem[plusitem.length-1]=="+" || plusitem[plusitem.length-1]==".")
        {

        }
        else{
            document.getElementById("displaybox").value+="+";
           
        }
        }
    
    
    function minus(){
        var minusitem=document.from.result.value;
        if(minusitem[minusitem.length-1]=="-" || minusitem[minusitem.length-1]=="."  )
        {

        }
        else{
            document.getElementById("displaybox").value+="-";
        }
     }
    
    
    function multiply(){
        var mulitem=document.from.result.value;
        if(mulitem[mulitem.length-1]=="*" || mulitem[mulitem.length-1]=="." || mulitem[mulitem.length-1]=="/" || mulitem[mulitem.length-1]=="-" || mulitem[mulitem.length-1]=="+")
        {

        }
        else{
            document.getElementById("displaybox").value+="*";
        }
    }
    
    function div(){
        var divitem=document.from.result.value;
        if(divitem[divitem.length-1]=="/" || divitem[divitem.length-1]=="." || divitem[divitem.length-1]=="*" || divitem[divitem.length-1]=="+" || divitem[divitem.length-1]=="-")
        {

        }
        else{
            document.getElementById("displaybox").value+="/";
        }
            }
    

    function clearall(){
                document.getElementById("displaybox").value="";
            }

function clearsc(){
        var x=document.getElementById("displaybox").value;
        var y=x.length-1;
        document.getElementById("displaybox").value=x.slice(0,y);
    }


function inputvalid(){

        var item=document.from.result.value;


        if(item.length>=19){
            alert("Out Of Range....." );
        }


        else{


            try{
                var exp=document.from.result.value;
                var result=eval(exp);
                if(result.length>=19 ){
                    alert("Out Of Range.....");             //this part is use to evaluate
                }

                else{
                    if(isNaN(result)){                  //it will not diplay NaN on screen 00/00 = NaN
                        alert("Error.....");
                    }
                    else{
                            document.from.result.value = result;
                    }
                }
            }


            catch(error){
                alert("Syntax Error.....\n\nEnter Value Properly")      //this part is use to handle the error
            }


        }
    }

// --------------------------------------info button-----------------------------------------------------

function infobtn(){
    alert("This Project Is Created By Joydev Gorai....")
}

/*......................................design effect on button.......................................*/

function  normaleffect(buttonname){
    document.getElementById(buttonname).setAttribute("style"," ");
}



function designeffect(buttonname){
    document.getElementById(buttonname).setAttribute("style","color:var( --light_designcolor);");
}

            
/*......................................day-night mode.......................................*/


var switch1 = document.getElementById("checkbox");

checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark');
})
