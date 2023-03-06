/**
 * Project Requirements
 * Change the background color by generating random rgb  color by cliking a button
 */

// step-1 - create onloade handler
 window.onload = () => {
    main();
 }

 function main() {
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");

    btn.addEventListener("click", function() {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
 }

//  step-2 - random color generator function
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}

// step-3 - collect all necessary references
