const content = document.querySelectorAll('.content'),
      tabs = document.getElementById('tabs'),
      subcontent = document.querySelectorAll('.subcontent'),
      subtabs = document.getElementById('subtabs'),
      
      contentIndex = 'content',
      subcontentIndex = 'subcontent',    
      btn = 'btn',
      subbtn = 'subbtn';

const changeClass = (el, x) => {
    for(let i = 0; i < x.children.length; i++) {
        x.children[i].classList.remove('active'); 
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target, tabs);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content == currTab) {
            content[i].classList.add('active'); 
        }  
    }
});

subtabs.addEventListener('click', e => {
    const currTab = e.target.dataset.subbtn;
    changeClass(e.target, subtabs);
    for(let i = 0; i < subcontent.length; i++) {
        subcontent[i].classList.remove('active');
        if(subcontent[i].dataset.subcontent == currTab) {
            subcontent[i].classList.add('active'); 
        }  
    }
});