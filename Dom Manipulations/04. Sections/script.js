function create(words) {
   let content = document.getElementById("content");

   for (let word of words) {
      let newDiv = document.createElement("div");
      let newParagraph = document.createElement("p");

      newParagraph.textContent = word;
      newParagraph.style.display = "none";

      newDiv.appendChild(newParagraph);
      newDiv.addEventListener("click", function(){
         newParagraph.style.display = "block";
      });
      
      content.appendChild(newDiv);
   }
}