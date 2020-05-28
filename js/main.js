
class WorkingCalc{
    
    constructor(){
        this.ButtonsArr= new Array();
        this.createButtons(this.ButtonsArr);
        this.addListenersToBtns(this.ButtonsArr);
    }

    createButtons(_ButtonsArr) {
        var i;
        for(i=0; i<16; i++){
            _ButtonsArr.push(document.getElementById(`${i}`));
        }
    }
/*
    addListenersToBtns(_ButtonsArr){
        var i;
        for(i=0; i<10; i++){
            _ButtonsArr[i].addEventListener("click", DidgitsPressed(i));
        }


    }
*/

    addListenersToBtns(_ButtonsArr){
        this.ButtonsArr[0].addEventListener("click", this.funcBtn0);
        this.ButtonsArr[1].addEventListener("click", this.funcBtn1);
        this.ButtonsArr[2].addEventListener("click", this.funcBtn2);
        this.ButtonsArr[3].addEventListener("click", this.funcBtn3);
        this.ButtonsArr[4].addEventListener("click", this.funcBtn4);
        this.ButtonsArr[5].addEventListener("click", this.funcBtn5);
        this.ButtonsArr[6].addEventListener("click", this.funcBtn6);
        this.ButtonsArr[7].addEventListener("click", this.funcBtn7);
        this.ButtonsArr[8].addEventListener("click", this.funcBtn8);
        this.ButtonsArr[9].addEventListener("click", this.funcBtn9);
        this.ButtonsArr[10].addEventListener("click", this.funcBtn10);
        this.ButtonsArr[11].addEventListener("click", this.funcBtn11Result);
        this.ButtonsArr[12].addEventListener("click", this.funcBtn12Dell);
        this.ButtonsArr[13].addEventListener("click", this.funcBtn13);
        this.ButtonsArr[14].addEventListener("click", this.funcBtn14);
        this.ButtonsArr[15].addEventListener("click", this.funcBtn15);
    }

    funcBtn0(){DidgitsPressed(0);}
    funcBtn1(){DidgitsPressed(1);}
    funcBtn2(){DidgitsPressed(2);}
    funcBtn3(){DidgitsPressed(3);}
    funcBtn4(){DidgitsPressed(4);}
    funcBtn5(){DidgitsPressed(5);}
    funcBtn6(){DidgitsPressed(6);}
    funcBtn7(){DidgitsPressed(7);}
    funcBtn8(){DidgitsPressed(8);}
    funcBtn9(){DidgitsPressed(9);}
    funcBtn10(){DidgitsPressed(",");}
    funcBtn12Dell(){clearScreen();}
    funcBtn11Result(){
        var calcScreen = document.getElementById("calc_screen1");
        var calcScreenSign = document.getElementById("calc_screen2");
        var calcScreenResult = document.getElementById("calc_screen3");
        if(calcScreenSign.innerHTML=="" || calcScreenResult.innerHTML==""){return;}
        switch(calcScreenSign.innerHTML){
            case "/":                
                calcScreen.innerHTML = String(Number(calcScreen.innerHTML.replace(",","."))/Number(calcScreenResult.innerHTML.replace(",","."))).substr(0, 15);
                calcScreenSign.innerHTML="";
                calcScreenResult.innerHTML="";
                return;
            case "-":
                calcScreen.innerHTML = String(Number(calcScreen.innerHTML.replace(",","."))-Number(calcScreenResult.innerHTML.replace(",","."))).substr(0, 15);
                calcScreenSign.innerHTML="";
                calcScreenResult.innerHTML="";
                return;
            case "+":
                calcScreen.innerHTML = String(Number(calcScreen.innerHTML.replace(",","."))+Number(calcScreenResult.innerHTML.replace(",","."))).substr(0, 15);
                calcScreenSign.innerHTML="";
                calcScreenResult.innerHTML="";
                return;
        }    
    }
    funcBtn13(){DidgitsPressed("/");}
    funcBtn14(){DidgitsPressed("-");}
    funcBtn15(){DidgitsPressed("+");}

}


function DidgitsPressed(digitNumber){
    switch(digitNumber){
        case "/":
            var calcScreen = document.getElementById("calc_screen2");
            calcScreen.innerHTML="/";
            return;
        case "-":
            var calcScreen = document.getElementById("calc_screen2");
            calcScreen.innerHTML="-";
            return;
        case "+":
            var calcScreen = document.getElementById("calc_screen2");
            calcScreen.innerHTML="+";
            return;
        default:
            if(document.getElementById("calc_screen2").innerHTML==""){
                var calcScreen = document.getElementById("calc_screen1");
            }else{
                var calcScreen = document.getElementById("calc_screen3");
            }
    }

    if(Number(calcScreen.innerHTML)==0){
        calcScreen.innerHTML=""
    }
    if(calcScreen.innerHTML.indexOf(",")!=-1 && digitNumber==","){
        return;
    }
    if (calcScreen.innerHTML.length<15){
        calcScreen.innerHTML=`${calcScreen.innerHTML}${digitNumber}`
    }
} 

function clearScreen(){
    var calcScreen = document.getElementById("calc_screen1");
    var calcScreenSign = document.getElementById("calc_screen2");
    var calcScreenResult = document.getElementById("calc_screen3");
    calcScreen.innerHTML="0";
    calcScreenSign.innerHTML="";
    calcScreenResult.innerHTML="";

}






var btn_Open_Calc = document.getElementById("btn_open_calc");
var btn_Close_Calc = document.getElementById("btn_close_calc");
var Modal_Container_calc = document.querySelector('.modal_main_container_calc');
var calc_1 = new WorkingCalc();
var btn_Open_About = document.getElementById("btn_open_about");
var btn_Close_About = document.getElementById("btn_close_about");
var Modal_Container_About = document.querySelector('.modal_main_container_about');

var btn_Show_Pic = document.getElementById("btn_show_pic");
var btn_Return_Text = document.getElementById("btn_return_text");
var Site_Middle_Part = document.querySelector('.box_middle');
var Site_Right_Part = document.querySelector('.box_right_info');
var Site_Left_Menu = document.querySelector('.box_left_menu');
var Site_Headers = document.querySelector('.headers');




btn_Open_Calc.addEventListener("click", funcOpenCalc);
btn_Close_Calc.addEventListener("click", funcCloseCalc);

btn_Open_About.addEventListener("click", funcOpenAbout);
btn_Close_About.addEventListener("click", funcCloseAbout);

btn_Show_Pic.addEventListener("click", funcShowPic)
btn_Return_Text.addEventListener("click", funcReturnText)


function funcOpenCalc(){Modal_Container_calc.style.display = 'flex';}
function funcCloseCalc(){Modal_Container_calc.style.display = 'none';}

function funcOpenAbout(){Modal_Container_About.style.display = 'flex';}
function funcCloseAbout(){Modal_Container_About.style.display = 'none';}

function funcShowPic(){
    Site_Middle_Part.style.display='none';
    Site_Right_Part.style.display='none';
    Site_Left_Menu.style.alignItems ='flex-start';
    Site_Headers.style.display='none';
}
function funcReturnText(){
    Site_Middle_Part.style.display='flex';
    Site_Right_Part.style.display='flex';
    Site_Left_Menu.style.alignItems ='center';
    Site_Headers.style.display='block';
}



