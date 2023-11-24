class Password {

    strongPassword(length) {
      let random = Math.floor(Math.random() * 26);
      let random1 = Math.floor(Math.random() * 10);

    let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let LowerCase = "abcdefghijklmnopqrstuvwxyz"
    let Numeric = "0123456789"
    let Special = "!@#%^&*()*"

    let i = 0;
    let Password = ""
    while (i < length) {
        Password += UpperCase[random] + LowerCase[random] + Numeric[random1] + Special[random1]
        i += 3;
    }
    Password = Password.substr(0, length)
    this.password = Password;
    let btn=document.getElementById("btn");
    let div=document.getElementById("password");

    btn.addEventListener('click',()=>{
    div.innerHTML=`Password is : ${this.password}`
});

}

}
let s=new Password();
s.strongPassword(10);

