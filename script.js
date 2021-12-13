var date = document.getElementsByClassName('date');
var clock, clock_sec,clock_min,clock_hour,clock_day;

setInterval(()=>{
    clock = Date.UTC(2022, 0, 1, 10, 33, 30, 0)-Date.now();
    clock_day = clock/(1000*60*60*24);
    clock_hour = (clock_day-parseInt(clock_day))*24;
    clock_min = (clock_hour-parseInt(clock_hour))*60;
    clock_sec = (clock_min-parseInt(clock_min))*60;
    date[0].innerHTML = `${parseInt(clock_day)}:${parseInt(clock_hour)}:${parseInt(clock_min)}:${parseInt(clock_sec)}`;
    date[1].innerHTML = `${parseInt(clock_day)}:${parseInt(clock_hour)}:${parseInt(clock_min)}:${parseInt(clock_sec)}`;
    date[2].innerHTML = `${parseInt(clock_day)}:${parseInt(clock_hour)}:${parseInt(clock_min)}:${parseInt(clock_sec)}`;
},1000)

/*MENU-BAR*/
var menuContainer = document.getElementsByClassName("menu-icon-container");
var menu = document.getElementsByClassName("menu-list-container");
var closeIcon = document.getElementsByClassName("close-button");

menuContainer[0].addEventListener("click", ()=>{
    menu[0].style.width="75%";
})
closeIcon[0].addEventListener("click", ()=>{
    menu[0].style.width="0%";
    console.log(menu[0].style.width)
})