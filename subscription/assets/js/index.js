window.addEventListener("load", function(){
    const form = document.getElementById("myform");
    form.addEventListener("submit",function(e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: "POST",
            body: data,
        })
        .then(() => {
            alert("You have successfully subscribed to the Newsletter");
        })
    })
})
