window.addEventListener("load", () => {
    document.body.addEventListener("keypress", () => {
        //a ha so that's why there's such a thing as a "non breaking space" because just adding a space after hello causes it to line break. Gotcha. 
        document.getElementById('radioLog').append("hello ")
    })
})