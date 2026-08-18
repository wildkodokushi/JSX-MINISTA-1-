import Toast from "@/components/Toast"

const toastElement = document.querySelector('.toast')
const allowButton = document.querySelector('.allow')
const disallowButton = document.querySelector('.disallow')

export default function clickHandler() {
    disallowButton.addEventListener('click', () => {
        
        toastElement.classList.add('is-open')
    })
}