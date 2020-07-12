/* 
API Documentation url list https://forkify-api.herokuapp.com/
For Seach query api link is https://forkify-api.herokuapp.com/api/search?q=pizza
For getting specific recipe link is https://forkify-api.herokuapp.com/api/get?rId=47746
*/

var FR = {} || FR;
FR.baseUrl = 'https://forkify-api.herokuapp.com/api/';
FR.loadJSON = function (type, typeFunction) {
    $.ajax({
        type: 'GET',
        url: FR.baseUrl + type,
        success: function (data) {
            typeFunction(data);
        },
        error: function(){
            alert( 'Requested page not found. [404]');
        }
    })
}

$(document).ready(function () {
    FR.searchResult();
});



FR.searchResult = function () {
    document.querySelector('.searchBtn').addEventListener('click', search);
    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            search();
        }
    })

    function search() {
        query = document.querySelector('.search__field');
        if (query !== '') {
            FR.loadJSON("search?q=" + query.value, function (data) {
                FR.searchData = data.recipes;
                FR.recipeListUi(data);
                FR.recipeBtn();
            });
            query.value = '';
            query.focus();
        }
    }
}
FR.recipeBtn = function(){
    var recipeBtn = document.querySelectorAll('.recipe__btn');
    var recipeBtnArr = Array.prototype.slice.call(recipeBtn);
    //console.log(recipeBtnArr);
    recipeBtnArr.forEach(element => {
        element.addEventListener('click', function (event) {
            var dataId = this.getAttribute('data-recipeId');
            FR.loadJSON("get?rId=" + dataId, function (data) {
                FR.getData = data;
                FR.recipeUi(data);                
            });
        })
    });
} 

FR.recipeListUi = function (data) {
    var markup = '';
    for (let i = 0; i < data.recipes.length; i++) {
        markup += `<div class="recipe__box" data-recipeId="${data.recipes[i].recipe_id}"> <div class="recipe__containerBox"> <div class="recipe__image"> <img src="${data.recipes[i].image_url}" alt="${data.recipes[i].title}"> </div><div class="recipe__bottom"> <div class="recipe__data"> <span class="recipe__name">${data.recipes[i].title}</span> <a href="${data.recipes[i].publisher_url}" target="_blank" class="recipe__publisher"><span>${data.recipes[i].publisher}</span></a> </div><div class="btn recipe__btn" data-recipeId="${data.recipes[i].recipe_id}"> <span>View Recipe</span> </div></div></div></div>`;
        document.querySelector('.recipe__container').innerHTML = markup;
    }
}

FR.recipeUi = function(data){
    console.log(data.recipe);
}