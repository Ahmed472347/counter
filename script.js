//counter
let counter = 0;
//select value
let value = document.getElementById('value');
let btn = document.querySelectorAll('.btn');
let container = document.getElementsByClassName('container')

btn.forEach(function(e){
    e.addEventListener('click', select)
    function select(x){
        const classBtn = x.currentTarget.classList;
        if(classBtn.contains("decrease")){
            counter--;
        }
      
        else if(classBtn.contains("increase")){
            counter++;
        }
        else{
            counter = 0;
          
        }
        if(counter > 0){
            value.style.color = "green"
        }
        if(counter < 0){
            value.style.color = "red"
        }
        if(counter === 0){
            value.style.color = "yellow"
        }
        value.textContent = counter
    }
})