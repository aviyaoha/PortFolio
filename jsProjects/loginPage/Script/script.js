const signUpForm = document.querySelector('#form')
const registerDivEl = document.querySelector(".register")
const switchBtnEl = document.querySelector(".swichBtn")
const registerBtn = document.querySelector(".Submit")
const pValue = document.querySelector("p")
const h2Value = document.querySelector('.swichBtn h2')
const signUpTitle = document.querySelector('.register h1')
const bodyEl = document.querySelector('body')
const mailInput = document.getElementById('inputedMail')
const pswdInput = document.getElementById('inputedPswd')
const userObject = {}
let PageRegisterStatus = true

switchBtnEl.addEventListener('click', switchPage)

signUpTitle.addEventListener('click', switchPage)

registerBtn.addEventListener('click', saveData)


function switchPage() {
    if (PageRegisterStatus == true) {
        clear(signUpForm)
        clear(pValue)
        switchBtnEl.classList.replace('swichBtn', 'loginPage')
        alert('Unfortunately, this code is not complete due to schedule limitation. I recommend on reviewing the original code, to get a general impression of my plans to this project.')
        h2Value.classList.replace('nothing', 'something')
        signUpTitle.classList.replace('signUpTitle', 'signUpBtn')
        const pValue2 = document.createElement('p')
        pValue2.classList.add('pSignUp')

        pValue2.textContent = 'Your first time?'
        registerDivEl.appendChild(pValue2)

        formLoginEl = getFormHTML(switchBtnEl)


        PageRegisterStatus = false

    } else {
        PageRegisterStatus = true
        resetPage()
    }

}

function clear(div) {
    div.innerHTML = ''
}

function getFormHTML(element) {
    const formEl = document.createElement('form')
    formEl.innerHTML = `                        <div class="EmailIcon2"></div>
                        <input type="email" placeholder="E-mail" id="logInputMail">
                    </div>
                    <div class="input-field">
                        <div class="passwordIcon2"></div>
                        <input type="password" placeholder="Password" id="logInputPswd">
                    </div>
                </div>

        </div>
<button class="Submit2" id="LoginBtn">Login</button>
              
`

    formEl.classList.add('LoginForm')
    element.appendChild(formEl);
    const loginBtn = document.getElementById("LoginBtn")
    const logMail = document.getElementById('logInputMail')
    const logPswd = document.getElementById('logInputPswd')
    loginBtn.addEventListener('click', () => {
        localStorage.getItem(userObject)
        if (logMail.value == mailInput.value & logPswd.value == pswdInput.value) {
            bodyEl.innerHTML = `<h1>You are Connected</h1>`

        } else {
            alert('Your e-mail or password are incorrect')
        }
    })
    return formEl;
}

function resetPage() {
    bodyEl.innerHTML = `
    <div class="container" id="parent">
        <!-- <input type="checkbox" id="chk" aria-hidden="true"> -->
        <div class="register">
            <h1 class="signUpTitle">Sign Up</h1>
            <form action="" class="form" id="form">
                <div class="input-group">
                    <div class="input-field">
                        <div class="UserIcon"></div>
                        <input type="text" placeholder="Name">
                    </div>
                    <div class="input-field">
                        <div class="EmailIcon"></div>
                        <input type="email" placeholder="E-mail">
                    </div>
                    <div class="input-field">
                        <div class="passwordIcon"></div>
                        <input type="password" placeholder="Password">
                    </div>
                </div>
                <div class="submitButton">
                    <button class="Submit">Register</button>
                </div>

            </form>

        </div>
        <div class="swichBtn">
            <button class="swich" id="swich">
                <p>Already have an account?</p>
                <h2 class="nothing">Login</h2>
            </button>
        </div>

        <!-- <div class="login">
            <h1>Login</h1>
            <form action="" class="form">
                <div class="input-group">
                    <div class="input-field">
                        <div class="EmailIcon"></div>
                        <input type="email" placeholder="E-mail">
                    </div>
                    <div class="input-field">
                        <div class="passwordIcon"></div>
                        <input type="password" placeholder="Password">
                    </div>
                </div>

        </div> -->

    </div>
`
    return bodyEl

}

function saveData() {
    userObject[mailInput.value] = pswdInput.value
    localStorage.setItem(userObject)
}



