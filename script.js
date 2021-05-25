var logBtn = document.querySelector('#logBtn');
    var signBtn = document.querySelector('#signBtn');
    var btn = document.querySelector('span');
    var email=document.querySelector('#email');
    var pass=document.querySelector('#password');
    function sChange() {
        if (signBtn.className !='btnUp fg') {
            signBtn.className='btnUp fg';
            logBtn.className='btnUp';
            btn.innerHTML = `<button class="btn" id="btn" onclick="signUp()"><b>Signup</b></button>`;
        }
    }
    function lChange(){
        if(signBtn.className !='btnUp'){
            signBtn.className='btnUp';
            logBtn.className='btnUp fg';
            btn.innerHTML = `<button class="btn" id="btn" onclick="login()"><b>Login</b></button>`;
        }
    }
        function signUp() {
            localStorage.setItem('email',email.value);
            localStorage.setItem('password',pass.value);
            if(email.value=='' | pass.value==''){
                alert('Signup Failed')
            }
            else{
                alert('Signup Successful')
                lChange();
            }
            email.value='';
            pass.value='';
            
        }

        function login() {
            if(email.value=='' | pass.value==''){
                alert('Login Failed')
            }
            else if(email.value==localStorage.getItem('email') && pass.value==localStorage.getItem('password')){
                alert('Login Successful')
                location.assign('https://github.com/aniruddhdeveloper');
            }
            else{
                alert('Login Failed')
            }
            email.value='';
            pass.value='';
        }
        function forgot(){
            alert('Signup Again')
            sChange();
        }
