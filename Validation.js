(function () {
    var name = document.querySelector('#name'),
        email = document.querySelector('#email'),
        phone = document.querySelector('#phone-number'),
        address = document.querySelector('#address'),
        validate = document.querySelector('#validate'),
        result = document.querySelector('#result');
    
    validate.addEventListener('click', function validate() {
        var input = document.querySelectorAll('[type = text]'),
            name_flag = checkName(name),
            email_flag = checkEmail(email),
            phone_flag = checkPhone(phone),
            address_flag = checkAddress(address),
            error, count = 0,
            flags = [name_flag,email_flag,phone_flag,address_flag];
        error = document.querySelectorAll('[id $= -err]');
        input[input.length] = address;
        for(var i = 0; i<flags.length ; i++) {
            if(!flags[i]) {
                count = 0;
                error[i].setAttribute('class','err');
                errorHighlight(input[i]);
            } else {
                count++;
                error[i].setAttribute('class','err hidden');
                errorUnhighlight(input[i]);
            }
        }
        if(count === 4){
            success();
        }
    });
                              
    function checkName(name) {
        name = name.value;
        if(!(name.length === 0)) {
            name = parseInt(name);
            if(isNaN(name)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    function checkEmail(email) {
        var email = email.value,
            flag1 = false,
            flag2 = false;
        if(!(email.length === 0)) {
            if(email.charAt(0).match(/[A-Z,a-z]/g)) {
                for(var i = 1; i<email.length; i++) {
                    var temp = email.charAt(i);
                    if(temp === "@") {
                        flag1 = true;
                    }
                    if(flag1) {
                        if(temp === ".") {
                            if(i !== email.length-1) {
                                flag2 = true;
                            }
                        }
                    }
                }
            } 
        if(flag1 === true && flag2 === true) {
            return true;
        } else {
            return false;
        }
        } else {
            return false;
        }
    }
        
    function checkPhone(phone) {
        var phone = phone.value;
        if(phone.length === 10) {
            if(!(isNaN(phone))) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    function checkAddress(address) {
        address = address.value;
        if(address.length === 0) {
            return false;
        } else {
            return true;
        }
    } 
        
    function errorHighlight(error) {
        error.className = 'invalid';
    }
    function errorUnhighlight(error) {
        error.classList.remove('invalid');
    }
    function success(){
        result.textContent = 'Your form has been submitted';
    }
    
    
 })();