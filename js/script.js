const imgArea = document.querySelector('.img-area');
const viewImg = document.querySelector('.view-img-full');
const x = document.querySelector('.x');

imgArea.addEventListener('click', () => {
    viewImg.classList.add('view')
    console.log('ss')
})
x.addEventListener('click', () => {
    viewImg.classList.remove('view')
})