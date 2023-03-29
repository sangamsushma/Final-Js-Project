$('.carousalContainer').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    previous: false,
    prevArrow: false,
    nextArrow: false,
  });

const clothingDiv = document.querySelector(".clothing")
const accessoriesDiv = document.querySelector(".accessories")
 
$(function(){
  const shoppingApi= "https://5d76bf96515d1a0014085cf9.mockapi.io/product"

  $.getJSON(shoppingApi,{
      format: JSON
  }).done(function(responseData){
    responseData.forEach(result=>{
      if(result.isAccessory == false){
          const clothsContainer = document.createElement('div')
          clothsContainer.classList.add('cloths-container')
          clothsContainer.innerHTML=`
          <a href="./productinfo.html?p=${result.id}"> 
          <img class="product-image" src="${result.preview}">
          </a>
          <div class="product-meta">
          <h4>${result.name}</h4>
          <h5>${result.brand}</h5>
          <p>Rs ${result.price}</p>
          </div>
          `
          clothingDiv.append(clothsContainer)
        }
      else{
        const accessoriesContainer = document.createElement('div')
        accessoriesContainer.classList.add('cloths-container')
        accessoriesContainer.innerHTML=`
        <a href="./productinfo.html?p=${result.id}">
          <img class="product-image" src="${result.preview}">
          </a>
          <div class="product-meta">
          <h4>${result.name}</h4>
          <h5>${result.brand}</h5>
          <p>Rs ${result.price}</p>
          </div>
          `
          accessoriesDiv.append(accessoriesContainer)     
        }
    })
  })
  })

