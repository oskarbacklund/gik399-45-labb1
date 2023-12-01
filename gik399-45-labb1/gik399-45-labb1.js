var checkboxElement = document.getElementById("divStyle")

var textElements = document.getElementsByClassName("textfield")

var buttonElement = document.getElementsByTagName("button") [0]

var outputElement = document.getElementsByClassName("output") [0]

checkboxElement.addEventListener("change", () => {
    outputElement.style.backgroundColor = textElements [0].value
})

buttonElement.addEventListener("click", () => {
    outputElement.remove()
}
)

function onInput (event) {
    console.log("Input target", event.target)

    const targetName = event.target.name
    if(targetName === "content"){
        outputElement.innerHTML = textElements[1].value
    }
}