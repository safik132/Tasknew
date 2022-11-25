let form = document.getElementById('form')
 
    form.addEventListener('submit',(e) => {
 
        e.preventDefault()
 
        let email = document.getElementById('exampleInputEmail1').value
 
        let password = document.getElementById('exampleInputPassword1').value
 
        if(email == "" || password == ""){
           setTimeout(() => { alert("Please Fill in your details"); }, 2000);
        }
        else{
           
        setTimeout(() => { alert("Successfull Login"); }, 2000);

          success.style.display="block";

            
        }

  
    })
setTimeout(() => {
       danger.style.display = 'none';
       success.style.display = 'none';
   }, 1000);


   
