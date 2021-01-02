

let article = document.querySelector('main>article')
let articleFields = article.querySelectorAll(':scope > *:not(form)')
let editButton = document.getElementById('edit')

editButton.addEventListener('click', (e) => {
    if (e.target.checked) {
        articleFields.forEach(e => {
            e.contentEditable = true
            e.classList.toggle('editable-underline')
        })
    }
    else {
        articleFields.forEach(e => {
            e.contentEditable = false
            e.classList.toggle('editable-underline')
        })
    }
})


