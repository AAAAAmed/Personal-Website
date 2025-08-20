const blogSection = document.getElementById('blog')
const url = new URL(window.location.href)

const backButton = document.createElement('a')
backButton.href = './blog.html'
backButton.textContent = '<-- Exit blog post'

if(url.searchParams.has('blog')){
    blogSection.textContent = 'you are viewing a blog post!'
    blogSection.prepend(document.createElement('br'))
    blogSection.prepend(backButton)
}