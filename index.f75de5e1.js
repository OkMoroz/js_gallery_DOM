const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');
thumbs.addEventListener('click', (e)=>{
    e.preventDefault();
    const link = e.target.closest('a');
    if (link && link.href) largeImg.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
