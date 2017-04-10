function httpRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

httpRequest('http://10.1.101.161/wdbuyer/config/getConfigs?all=true', function (ip) {
    document.getElementById('ip_div').innerText = ip;

});