// 세팅바 열기
var settingsMenu = document.querySelector(".settings-menu");

function SettingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}




// 다크모드 
var darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("click", onClickDarkBtn);

function onClickDarkBtn(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

localStorage.setItem("theme", "dark");
localStorage.getItem("theme");

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}