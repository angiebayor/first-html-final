document.getElementById("question-button").addEventListener("click", function() {
    const firstAnswer = window.confirm("Will you be my valentine?");
    if (firstAnswer) {
        window.alert("Here we go then! <3");
        window.location.href = "https://www.youtube.com/watch?v=WiXqXXnoBF8";
    } else {
        window.alert("Task failed succesfully!");
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
})