const categoriesArr = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesArr.length);

categoriesArr.forEach(category => {
  const title = category.firstElementChild.textContent
  const elementsCount = category.querySelectorAll("li").length
  console.log("Category:", title);
console.log("Elements:", elementsCount);
  
});


