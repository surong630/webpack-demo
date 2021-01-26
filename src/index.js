import x from './x.js'
import img from './assets/1.jpg'
const app = document.getElementById('app')
app.innerHTML = `
  <img src="${img}">
`
const button = document.createElement('button')
button.innerText = '懒加载按钮'
app.appendChild(button)
button.onclick = () => {
  const a = import('./load.js')
  a.then(res => {
    res.default();
  })
}