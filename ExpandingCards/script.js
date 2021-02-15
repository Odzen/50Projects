// First, bring the panels
const panels= document.querySelectorAll('.panel') // Put all the elements into the nodelist like an array

//console.log(panels) // To show the array in the console of the browser

//Do smth with each panel
panels.forEach((panel)=> {
    panel.addEventListener('click', () => {
        //console.log(123) // for example, each time that we click on the image, it will print on the console 123
        removeActiveClasses()
        panel.classList.add('active') // It add the active class which change the flex to 5 in the style.css
    })
}) // We use an arrow fuction

//So the idea here is right before it activates one panel, it takes out the rest of them

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}