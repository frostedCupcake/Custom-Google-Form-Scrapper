// Professor Name
// const x = document.getElementsByClassName('MuiBox-root css-7p9w9v')
// x[1].addEventListener('change',()=>{
//     console.log("sgfs")
// })
// Select the node that will be observed for mutations
const targetNode = document.getElementsByClassName('MuiBox-root css-7p9w9v')[1];

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  const y = document.getElementsByClassName('MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput')
  console.log(y[0].value)
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

//

// Data from Radio Buttons

const radio = document.getElementsByClassName("good");

var data = []

const btns0 = radio[0].childNodes
const btns1 = radio[1].childNodes
const btns2 = radio[2].childNodes
const btns3 = radio[3].childNodes
const btns4 = radio[4].childNodes
const btns5 = radio[5].childNodes

btns0.forEach(element => {
    element.addEventListener('click', () => {
        data[0] = element.textContent
        handleClick();
    })
})

btns1.forEach(element => {
    element.addEventListener('click', () => {
        data[1] = element.textContent
        handleClick();
    })
})

btns2.forEach(element => {
    element.addEventListener('click', () => {
        data[2] = element.textContent
        handleClick();
    })
})

btns3.forEach(element => {
    element.addEventListener('click', () => {
        data[3] = element.textContent
        handleClick();
    })
})

btns4.forEach(element => {
    element.addEventListener('click', () => {
        data[4] = element.textContent
        handleClick();
    })
})

btns5.forEach(element => {
    element.addEventListener('click', () => {
        data[5] = element.textContent
        handleClick();
    })
})


function handleClick() {
    console.log(data)
}

//

// Review for instructor and course

const input = document.querySelectorAll('input')

const textArea = input[16]
const textArea2 = input[32]

var text,text2;

textArea.addEventListener('input',()=>{
    text = textArea.value
    console.log(text)
})

textArea2.addEventListener('input',()=>{
    text2 = textArea2.value
    console.log(text2)
})

//














