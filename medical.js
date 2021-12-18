let AppointmentBtn       =     document.getElementById('sub1');
let RegChoices2          =     document.getElementById('sub2');
let AppChoices3          =     document.getElementById('sub3');
let RegForm              =     document.getElementById('RegForm');
let CloseBtn             =     document.getElementById('closeBtn');

function AppointmentFunction()
{
RegChoices2.style.display="block";
AppChoices3.style.display="block";
AppointmentBtn.style.display="none";

}

AppointmentBtn.onclick = function (){
  AppointmentFunction();
}

$(document).ready(function(){
  $(RegChoices2).click(function(){

      //RegForm.style.display="block";
$('#RegForm').animate({width:'toggle'},700);

  })
});

$(document).ready(function(){
  $(CloseBtn).click(function(){

      //RegForm.style.display="block";
$('#RegForm').animate({width:'toggle'},700);

  })
});

/*********************************COVID APP************************************/
let COVIDBUTTON = document.getElementById('covidApp');
let Yes1 = document.getElementById('btn1');
let No1 = document.getElementById('btn2');

let Yes2 = document.getElementById('btn3');
let No2 = document.getElementById('btn4');

let Yes3 = document.getElementById('btn5');
let No3 = document.getElementById('btn6');

let Yes4 = document.getElementById('btn7');
let No4 = document.getElementById('btn8');

let ResultBtn1 = document.getElementById('Rbtn9');
//let ResultBtn2 = document.getElementById('Rbtn10');
let ResultBoard = document.querySelector(".ResultDisplay");

let Square2 = document.getElementsByClassName('SecondSquare');
let YesNumber =0;
let NoNumber =0;

COVIDBUTTON.onclick = function(){
  //DocPix.style.display = "none";
  //DocPix.style.opacity =0.1;
  $('#covidDoc').fadeOut(300);
  $('#notice1').fadeOut(300);
  $('#notice2').fadeIn(100);
  $('#groupForm1').fadeIn(100);
  $('#covid').fadeIn();
  COVIDBUTTON.disabled = true;
}


Yes1.onclick = function(){
  //$('#groupForm1').hide();
  //$('#groupForm2').fadeIn(100);
  //YesNumber++;
  let Y = confirm("Thanks for using a facemask.\n" +
                  "This will help to prevent the spread of the virus.\n" +
                  "Also enure you take the vaccine to boost your immunity against the virus.");
  if(Y == true)
  {
    window.location.reload();
  }


}

No1.onclick = function(){
  $('#groupForm1').hide();
  $('#groupForm2').fadeIn(100);
   NoNumber++;


}


Yes2.onclick = function(){
  $('#groupForm1').hide();
  $('#groupForm2').hide();
  $('#groupForm3').fadeIn(100);
  YesNumber++;
  //alert(YesNumber);
}

No2.onclick = function(){
  $('#groupForm1').hide();
  $('#groupForm2').hide();
  $('#groupForm3').fadeIn(100);
  NoNumber++;

}


Yes3.onclick = function(){
  $('#groupForm1').hide();
  $('#groupForm2').hide();
  $('#groupForm3').hide();
  $('#groupForm4').fadeIn(100);
  YesNumber++;
}

No3.onclick = function(){
  $('#groupForm1').hide();
  $('#groupForm2').hide();
  $('#groupForm3').hide();
  $('#groupForm4').fadeIn(100);
   NoNumber++;
}


Yes4.onclick = function(){
  $('#groupForm1').hide();
  $('#groupForm2').hide();
  $('#groupForm3').hide();
  $('#groupForm4').hide();
  $('#groupForm5').fadeIn();
  //$('#groupForm6').hide();
  YesNumber++;

}

No4.onclick = function(){
  $('#groupForm1').hide();
  $('#groupForm2').hide();
  $('#groupForm3').hide();
  $('#groupForm4').hide();
  $('#groupForm5').fadeIn();
  //$('#groupForm6').fadeIn();
   NoNumber++;

}



ResultBtn1.onclick = function(){

  if(YesNumber === 3)
  {
    //alert("From the result it seems that you may have been exposed to the virus");
    ResultBoard.innerHTML = "RESULT <br>From the options selected," +
     "it seems you may have been exposed to the virus.\n Book a test to confirm your status.";
  }
  if(NoNumber === 4)
  {
    ResultBoard.innerHTML = "RESULT <br>From the result it shows you've not been exposed to the virus." +
    " Please protect yourself and others by wearing your facemask and wash your hands often.";
  }

  if(YesNumber === 1 && NoNumber == 3 )
  {
      ResultBoard.innerHTML = "RESULT <br>From the result it shows you are not expose to the virus" +
        "Please protect yourself and others by wearing your facemask and wash your hands.";

  }
  if(YesNumber === 3 && NoNumber == 1 )
    {
      ResultBoard.innerHTML = "RESULT <br>From the result it seems that you may have been exposed to the virus";

    }

  if(YesNumber === 2 && NoNumber == 2 )
  {
    ResultBoard.innerHTML = "RESULT <br>From the options selected we will advise you book for a test with \n"+
    " a goverment approved Laboratory to know your COVID status.";
  }




}
/************************************SEARCH BUTTON******************************/
let SearchBar = document.getElementById('Search');
let SearcBtn  = document.getElementById('SearchBtn');
SearcBtn.onclick = function(){
  $('#Search').toggle(500);
}
/************************************MENU BUTTON******************************/
let MenuBtn  = document.getElementById('menu');
let LogoIcon = document.getElementById('logo');
let ListBoard = document.getElementById("list");
MenuBtn.onclick = function (){
$('#logo').fadeOut(3000);


}
