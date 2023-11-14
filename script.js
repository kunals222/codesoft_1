
let ans=document.getElementById("ans");

let btns=document.querySelectorAll(".button");
Array.from(btns).forEach((btn)=>{
    
    btn.addEventListener('click',(e)=>{
        try {

            if ( e.target.innerHTML == "=") {
                ans.innerHTML=eval(ans.innerHTML);
           }
    
           else if ( e.target.innerHTML == "C") {
               ans.innerHTML="";
          }else if(e.target.innerHTML == "X"){
             var temp = "";
             
             for (let index = 0; index < ans.innerHTML.length-1; index++) {
                temp  = temp + ans.innerHTML[index];
            }
            ans.innerHTML = temp;
          }else if(e.target.innerHTML == "x*x"){
            ans.innerHTML = eval(ans.innerHTML+"*"+ans.innerHTML);
          }
           else{
               ans.innerHTML = ans.innerHTML + e.target.innerText;
           }
            
        } catch (error) {
            ans.innerHTML = error;
        }
        
        
    })
})



