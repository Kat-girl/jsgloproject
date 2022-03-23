const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabImages = document.querySelectorAll('.design-images');
const tabFeatureImages = document.querySelectorAll('.design-block__img');
const tabDesingnTitles = document.querySelectorAll('.design__title');

const changeContent = (array, value) => {
    array.forEach((elem) => {
            if (elem.dataset.tabsField === value) {
                elem.classList.remove('hidden');
            } else {
                elem.classList.add('hidden');
            }
        })
}

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;
        
        changeContent(tabImages, dataValue);
        changeContent(tabDescriptions, dataValue);
        changeContent(tabFeatureImages, dataValue);  //ДЗ день 1

        

        tabDesingnTitles.forEach((title, indexTitle) => {   //ДЗ день 1
            if (index === indexTitle) {
                title.classList.remove('hidden');
                document.title = title.textContent;
            } else {
                title.classList.add('hidden');
            }
        })

        tabButtons.forEach((btn) => {
        
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
            
        })
        
    })

    
})

