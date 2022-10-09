// Write new code here

const link = document.querySelector('[data-link]')


if (link) {
  link.style.cursor = 'pointer'
  link.style.backgroundColor = 'grey'
  link.style.color = 'white'
  link.style.maxWidth = '100px'
  link.style.margin = '10px 0'
  link.style.borderRadius = '10px'
  link.style.padding = '10px'
  
  link.addEventListener('click', function (e) {
    window.location.href = "/product-page.html"
  })
}