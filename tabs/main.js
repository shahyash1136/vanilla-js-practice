var tabs = document.querySelectorAll('.tab__item');
tabsArr = Array.prototype.slice.call(tabs);
tabsArr.forEach(el => {
    el.addEventListener('click',function() {
        for(let i = 0 ; i < tabs.length ; i++){
            tabs[i].classList.remove('active');
        }
        this.classList.add('active');
        let tabPane = document.querySelectorAll('.tab__pane');
        for(let j = 0; j < tabPane.length; j++){
            tabPane[j].classList.remove('active');
            let tabPaneData = tabPane[j].getAttribute('data-name');
            
            if(el.getAttribute('data-name') === tabPaneData ){
                tabPane[j].classList.add('active');
            }
        }
    });
});
