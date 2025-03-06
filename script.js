function checkNews() {
    let newsText = document.getElementById("newsText").value;

    let formData = new FormData();
    formData.append("news_text", newsText);

    fetch("php/predict.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("result").innerText = "Prediction: " + result;
    })
    .catch(error => console.error("Error:", error));
}

