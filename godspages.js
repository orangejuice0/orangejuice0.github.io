function showoptions(){
    var x=document.getElementById("gods-nav-id");
    if(x.classList.contains("gods-nav")){
        document.getElementById("gods-nav-id").classList.add('gods-nav-display');
        document.getElementById("gods-nav-id").classList.remove('gods-nav');
    }
    else{
        document.getElementById("gods-nav-id").classList.add('gods-nav');
        document.getElementById("gods-nav-id").classList.remove('gods-nav-display');
    }
    
}

let godnavbtn=document.querySelector(".gods");
godnavbtn.addEventListener("mouseover",showoptions);

