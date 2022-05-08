window.addEventListener('scroll', function()
{
const nav = document.getElementById("nav")

console.log(window.scrollY)
console.log({nav})
if(!nav) return;
if(window.scrollY > 420) {
    // make nav sticky
    nav.classList.add('sticky');
    
    
}else {
    // make nav normal
    nav.classList.remove('sticky');
}
})

const n1 = document.querySelector(".sec-1")
n1.getBoundingClientRect()  

