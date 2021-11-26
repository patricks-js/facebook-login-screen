// Dark mode

const darkMode = document.querySelector(`#button-mode`).addEventListener(`click`, () => {
    const modePage = document.querySelector(`.container`)
    modePage.classList.toggle(`active`)
})

//Show pass

const pass = document.querySelector(`#password`)

pass.addEventListener(`keyup`, () => {
    const passInput = document.querySelector(`.pass`)
    const value = passInput.value
    const showPass = document.querySelector(`.show-pass`)
    let conteudo
    if (value.length > 0) {
        showPass.classList.add(`eye`)
        conteudo = document.querySelector(`.eye`)
        conteudo.textContent = `Mostrar`
        showPass.addEventListener(`click`, () => {
            passInput.type = `text`
            if (conteudo.textContent == `Mostrar` ) {
                conteudo.textContent = `Ocultar`
                passInput.type = `text`
            } else {
                conteudo.textContent = `Mostrar`
                passInput.type = `password`
            }   
        })
    } else if (value.length < 1) {
        conteudo.textContent = ``
        showPass.classList.remove(`eye`)
    }
})

