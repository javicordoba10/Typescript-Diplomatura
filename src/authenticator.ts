const user = {
    email: "pepito@test.com",
    password: "qwerty-123456"
}

const response = {
    success: "True",
    message: "Login successful"
}

const badPasswordResponse = {
    success: "False",
    message: "wrong password"
}

const badEmailResponse = {
    success: "False",
    message: "wrong email"
}

type User = {
    email: string,
    password: string
}

export function authenticateUser(body: User) {
    if (typeof body != 'object') throw new Error(`El body es de tipo invalido: ${typeof body}`)
    if (!("email" in body) || !("password" in body)) throw new Error("El body esta mal formado")
    if (body.email === user.email) {
        if (body.password === user.password) {
            return response
        } else {
            return badPasswordResponse
        }
    } else {
        return badEmailResponse
    }
}

export function input(input: HTMLInputElement | null) {
    console.log(input?.value)
    const value = input?.value || null
    if (typeof value != 'string') throw new Error("tipo de valor invalido")
    return value
}

export function authenticate(emailInp: HTMLInputElement | null , passwordInp: HTMLInputElement | null, container: HTMLDivElement, button: HTMLButtonElement) {
    
    button.addEventListener('click', () => {
        const email = input(emailInp)
        const password = input(passwordInp)
        const user = { email, password }
        const response = authenticateUser(user)
        const responseDiv = document.createElement('div')
        const message = document.createElement('p')
        responseDiv.appendChild(message)
        container.appendChild(responseDiv)
        message.innerText = response.message
    })

    
}

