function send() {
    let username = document.getElementById("username");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let school = document.getElementById("school");
    let email = document.getElementById("email");

    sendtelegram(`Ismi: ${username.value}; Telefon raqam: ${phone.value}; Manzil: ${address.value};   Maktab: ${school.value}   email: ${email.value}`);
}

//api.telegram.org/bot6984532978:AAGBW2QhJ3QDYjI62-mBOOqooBSRXdnRVFE/getUpdates

// sendtelegram
function sendtelegram(message) { let telegram_bot_id = "6984532978:AAGBW2QhJ3QDYjI62-mBOOqooBSRXdnRVFE"; let chat_id = 1926484196; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };