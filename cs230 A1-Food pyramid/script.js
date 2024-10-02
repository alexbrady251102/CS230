function increment(x){
  let input = document.getElementById('displaynum'+x);
  if(parseInt(input.innerHTML) >= 0) {
    input.innerHTML = parseInt(input.innerHTML) + 1;
  }
  var y = 0;
  if(x==1){
    y=0;
  }
  else if(x==2){
    y=0;   
  }
  else if(x==3){
    y=2;
  }
  else if(x==4){
    y=3;
  }
  else if(x==5){
    y=3;
  }
  else if(x==6){
    y=5;  
  }
  
  if(parseInt(input.innerHTML)==y){
      input.style.background = "lime";
  }
  else if(parseInt(input.innerHTML)<y){
      input.style.backgroundColor = "teal";
  }
  else{
      input.style.backgroundColor = "red";    
  }
  
  
}

function decrement(x){
  let input = document.getElementById('displaynum'+x);
  if(parseInt(input.innerHTML) > 0) {
    input.innerHTML = parseInt(input.innerHTML) - 1;
  }
  var y;
  if(x==1){
    y=0;
  }
  else if(x==2){
    y=0;   
  }
  else if(x==3){
    y=2;
  }
  else if(x==4){
    y=3;
  }
  else if(x==5){
    y=3;
  }
  else if(x==6){
    y=5;  
  }
  
  if(parseInt(input.innerHTML)==y){
      input.style.backgroundColor = "lime";
  }
  else if(parseInt(input.innerHTML)<y){
      input.style.backgroundColor = "teal";
  }
  else{
      input.style.backgroundColor = "red";
  }
}