document.addEventListener("input", (event) => {
    console.log(event);
    if (event.target.id === "color" && event.target.value) {
        document.body.style.setProperty('--stick-color', event.target.value);
    }
});