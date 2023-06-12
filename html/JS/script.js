let linkArr = document.getElementsByClassName("nav-link-color");

for (let i = 0; i < linkArr.length; i++) {
    linkArr[i].addEventListener("click", function () {
        let link = document.getElementsByClassName("active-nav")[0];
        console.log(link);
        link.classList.remove("active-nav");
        this.classList.add("active-nav");
    })
    
}
let count = 0
let brend = document.getElementsByClassName("nav-brend")[0]
brend.addEventListener("click", function(){
    let div = document.querySelector(".backgoundImg");
    if(count % 2 == 0){
        div.style.display = "none";

    }else{
        div.style.display = "block";
        
    }
    count++;

})
