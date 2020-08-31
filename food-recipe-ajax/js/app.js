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
        error: function () {
            alert('Requested page not found. [404]');
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
FR.recipeBtn = function () {
    var recipeBtn = document.querySelectorAll('.recipe__btn');
    var recipeBtnArr = Array.prototype.slice.call(recipeBtn);
    //console.log(recipeBtnArr);
    recipeBtnArr.forEach(element => {
        element.addEventListener('click', function (event) {
            var dataId = this.getAttribute('data-recipeId');
            document.querySelector('.recipepopup').parentNode.classList.add('active');
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

FR.recipeUi = function (data) {
    var markup = '';
    var ingredients = '';
    for (let i = 0; i < data.recipe.ingredients.length; i++) {
        ingredients += `<li>${data.recipe.ingredients[i]}</li>`

    }
    markup += `<div class="recipeBox"> <div class="recipeBox__left"> <div class="imageBox" style="background-image: url('${data.recipe.image_url}');"> </div></div><div class="recipeBox__right"> <div class="heading"> <h2>${data.recipe.title}</h2> </div><div class="ingredients"> <ul> ${ingredients}</ul> </div><div class="recipe__directions"> <h2 class="heading-2">How to cook it</h2> <p class="recipe__directions-text"> This recipe was carefully designed and tested by <a href="${data.recipe.publisher_url}" target="_blank"><span class="recipe__by">${data.recipe.publisher}</span></a>. Please check out directions at their website. </p><a class="btn" href="${data.recipe.source_url}" target="_blank"> <span>Directions</span> </a> </div></div></div>`;
    console.log(data);
    document.querySelector('.recipepopup .popup-modal-bg .popup-body').innerHTML = markup;
}
// Get the modal
var modal = document.querySelector('.popup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('active');
  }
}