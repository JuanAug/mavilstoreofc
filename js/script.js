// back to top

let btn = document.querySelector("#back-to-top")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

//wpp

const url = "https://api.whatsapp.com/send?phone=5511990256242&text=Ol%C3%A1!%20Gostaria%20de%20adquirir%20uma%20camisa!"

function whatsApp() {
    const win = window.open(url, '_blank')
    win.focus()
}

// instagram

const url2 = "https://www.instagram.com/mavilstoreofc/"


function instagram() {
    const win2 = window.open(url2, '_blank')
    win2.focus()
}

// menu mobile

function myFunction(){
    let x = document.getElementById("myLinks")

    if(x.style.display === "block"){
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}