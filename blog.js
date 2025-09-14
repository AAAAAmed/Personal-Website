import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js"

const blogSection = document.getElementById('blog')
const url = new URL(window.location.href)

const backButton = document.createElement('a')
backButton.href = './blog.html'
backButton.innerHTML = '<b>◀—— Exit blog post</b>'

if(url.searchParams.has('blog')){
    // This fetch code is mostly written by Gemini
    fetch(`./blogs/${url.searchParams.get('blog')}`)
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP ERROR: status = ${response.status}`)
            }
            return response.text()
        })
        .then(textData => {
            blogSection.innerHTML = marked.parse(textData)
            blogSection.prepend(document.createElement('br'))
            blogSection.prepend(backButton)
        })
        .catch(error => console.error('Error fetching or reading file:', error))
}