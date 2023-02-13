document.getElementById("question-button").addEventListener("click", function() {
    const firstAnswer = window.confirm("Will you be my Valentine?");
    if (firstAnswer) {
        window.alert("Here we go then! <3");
        window.location.href = "https://music.youtube.com/playlist?list=PL2tMgWgIvcWl0EudnDLrNH6XowhpzaG4s";
    } else {
        window.alert("Task failed succesfully!");
        window.location.href = "https://www.youtube.com/watch?v=6UQN7wBYfHU";
    }
})