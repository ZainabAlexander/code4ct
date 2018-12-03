var timeLeftForCoffee=0;
var timeLeftForGirls=0;
var timeLeftForProjects=0;
var timeLeftForHours=0;

var cupsOfCoffee=document.getElementById("cupsOfCoffee");
var girls=document.getElementById("girls");
var projects=document.getElementById("projects");
var hoursCoding=document.getElementById("hoursCoding");

    var timer=setInterval(function(){
      cupsOfCoffee.innerHTML=timeLeftForCoffee;
      girls.innerHTML=timeLeftForGirls;
      projects.innerHTML=timeLeftForProjects;
      hoursCoding.innerHTML=timeLeftForHours;

      if (timeLeftForCoffee===3000) {
      clearInterval(timer);
      cupsOfCoffee.innerHTML="3000+";
      girls.innerHTML="780+";
      projects.innerHTML="3120+";
      hoursCoding.innerHTML="8765+";
      }
      timeLeftForGirls++;
      timeLeftForCoffee++;
      timeLeftForProjects++;
      timeLeftForHours++;
    },
    1);
