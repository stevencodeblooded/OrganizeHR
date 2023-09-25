import { redirect } from "react-router-dom"

export async function authRequired (request) {
    
    //Fake Authentication using local storage 
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    const pathname = new URL(request.url).pathname

    if (!isLoggedIn) {
        throw redirect(`/Login?message=Login with dummy data for demo&redirectTo=${pathname}`)
    }

    return null
}