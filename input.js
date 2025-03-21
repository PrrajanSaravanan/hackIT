document.getElementById("login").addEventListener('submit',function(event){
    event.preventDefault();

    const email=document.getElementById('login-email');
    const pass=document.getElementById('login-password');
    const data={email:email.value,password:pass.value};

    fetch('http://localhost:3000/login',{
        method:'POST',
        headers: {
              'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.status === true){
            const name=result.name
            window.location.href = `/index.html?name=${name}`;
        }
        else{
            alert ('User name or password is wrong');
            window.location.reload();
        }
})
    .catch(error=> {
        console.log('Error : ',error);
    });
});

document.getElementById("signup").addEventListener('submit',function(event){
    event.preventDefault();
    console.log('button clickefor signup');
    const username =document.getElementById('signup-name');
    const email =document.getElementById('signup-email');
    const pass =document.getElementById('signup-password');
    const cpass =document.getElementById('signup-confirm-password');
    const data ={ username: username.value, email: email.value, password: pass.value };

    if(pass.value!==cpass.value){
        alert ('Password and Confirm password doesnt matches');
        window.location.reload();
    }
    else{
        fetch('http://localhost:3000/signup',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
           },
          body : JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(result=> {
        if(result.status==='un'){
            alert('User name already taken !');
            window.location.reload();
        }
        else if(result.status==='ug'){
            alert('This mail has an existing account ! \n Try to login ...');
            window.location.reload();
        }
        else if(result.status ==='s'){
            const name =result.name;
            window.location.href = `/index.html?name=${name}`;
        }
    })
    .catch(error => console.log(error));
        }
    });

    