// import { EmployeeLogIn } from "./EmployeeLogin"

const storageKey = "userLogin"

export const setLocalStorage = (credentialCheck) => {
    return localStorage.setItem(storageKey, JSON.stringify(credentialCheck))

}

export const getLocalStorage = () => {
    const rawData = localStorage.getItem(storageKey)
    if(!rawData) return null
    return JSON.parse(rawData)
}


// HR
const HRstorageKey = "HrLogin"
export const setHRLocalStorage = (credentialCheck) => {
    return localStorage.setItem(HRstorageKey, JSON.stringify(credentialCheck))

}

export const getHRLocalStorage = () => {
    const rawData = localStorage.getItem(HRstorageKey)
    if(!rawData) return null
    return JSON.parse(rawData)
}