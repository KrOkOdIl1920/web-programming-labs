function showDate() {
    let out = document.getElementById("current_date");
    let out_eo = document.getElementById("date_Eo");
    let out_JP = document.getElementById("date_JP");
    let out_KG = document.getElementById("date_KG");
    let out_IN = document.getElementById("date_IN");
    let today = new Date();
    out.innerHTML = "Дата и время для русской локали: " + today.toLocaleString("ru-RU");
    out_eo.innerHTML = "Дата и время для Эсперанто: " + today.toLocaleString("eo");
    out_JP.innerHTML = "Дата и время для японской локали: " + today.toLocaleString("ja-JP");
    out_KG.innerHTML = "Дата и время для киргизской локали: " + today.toLocaleString("ky-KG");
    out_IN.innerHTML = "Дата и время для каннадской локали: " + today.toLocaleString("kn");
}

function showDaysCount() {
    let birthday_div = document.getElementById("birthday_div");
    let today= new Date();
    let inputDate = document.querySelector("input[type=date]");
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    birthday_div.innerHTML = "Количество дней с даты рождения: " + daysCount;
}

function remove_info() {
    let birthday_div = document.getElementById("birthday_div");
    let remove_input = document.querySelector("input[type=date]");
    birthday_div.innerHTML = "";
    remove_input.value = "";
}

function showTime() {
    let today = new Date();
    let current_time = today.toLocaleTimeString("ru-RU");
    document.getElementById("time").innerHTML = current_time
}

setInterval(showTime, 1000);
