const blogNav = document.getElementById('blog-nav')
const blogLinks = Array.from(blogNav.querySelector('.horizontal-list').children)
const blogSection = document.getElementById('blog')

for (const child of blogLinks){
    console.log(child.innerHTML)
}