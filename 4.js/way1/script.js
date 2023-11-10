function btn_click(id){
      // console.log('hello')
      var getid = document.getElementById('inp');
      // console.log(getid)
      if(id=="1" || id=="2" ||id=="3" || id=="4" || id=="5" || id=="6" || id=="7" || id=="8" || id=="9" || id=="0" || 
        id=="."){
  
          getid.value += document.getElementById(id).innerText;   
  
  
  
      }else if(id=="equal"){
          function validExp(){
              try {
                  eval(getid.value);
                  return true;
              } catch (error) {
                  return false;
              }
          }
          if(validExp()){
              if(!Number.isInteger(eval(getid.value))){
                  getid.value = eval(getid.value).toFixed(2);
              }else{
                  getid.value = eval(getid.value);
              }
          }else{
              alert("Invalid expression")
          }
          
      }else if(id=="reset"){
          getid.value = "";
      }else if(id=="del"){
          getid.value = getid.value.substring(0,getid.value.length-1);
      }else if(id=="+" || id=="-" || id=="*" || id=="/"){
          let n = getid.value[getid.value.length-1];
          if(getid.value == "" && (id=="*" || id=="/")){
              getid.value+=""
          } else if(n =="+" || n=="-" || n=="*" || n=="/"){
              getid.value+=""
          }else{
              getid.value += document.getElementById(id).innerText;
          }
       } 
  }
