function stars(){
 let count = 500;
 let i = 0;
    while(i < count){
        let background = document.querySelector(".background");
        let star = document.createElement("i");        
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
          
        let size = Math.random() * 2;
        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = size + "px";
        star.style.height = size + "px";    
        background.appendChild(star);
        i++;
    }
}
stars();