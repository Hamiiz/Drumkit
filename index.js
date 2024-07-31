
var num = document.querySelectorAll('.drum').length
for (count=1; count<=num; count++){
    document.querySelectorAll('.drum')[count-1].addEventListener('click', function(){
    
    var btnhtm = this.innerHTML
    makesound(btnhtm)
    btnanim(btnhtm)
    
})
}
document.addEventListener('keypress', function(event){
    
    var kp = event.key
    switch (kp) {
        case 'w':
            makesound(kp)
            btnanim(kp)
            break;
        case 'a':
            makesound(kp)
            btnanim(kp)
            break;
        case 's':
            makesound(kp)
            btnanim(kp)
            break;
        case 'd':
            makesound(kp)
            btnanim(kp)
            break;
        case 'j':
            makesound(kp)
            btnanim(kp)
            break;
        case 'k':
            makesound(kp)
            btnanim(kp)
            break;
        case 'l':
            makesound(kp)
            btnanim(kp)
            break;
             
        default:
            break;
    }
})

function makesound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3') 
            audio.play()
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3') 
            audio.play()
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3') 
            audio.play()
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3') 
            audio.play()
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3') 
            audio.play()
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3') 
            audio.play()
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3') 
            audio.play()
            break;
             
        default:
            break;
}}
function btnanim(currentkey){
    var activebtn = document.querySelector('.'+currentkey)
    activebtn.classList.add("pressed")
    setTimeout(function(){activebtn.classList.remove('pressed')},100)
}

//User authenthication!!!!!

// function User (email,password) {
//     this.email = email
//     this.password = password
// } 
// var user1 = new User("hamiizmh@yahoo.com",'pwd123')
// console.log(user1.email,user1.password)

// buttonsss = document.querySelector('.login')
// buttonsss.addEventListener('click', function(){
//     uemail = document.querySelector('#email').value
//     upwd = document.querySelector("#pwd").value
//     console.log(uemail,upwd)
//     if (uemail == user1.email){
//         if(upwd == user1.password){
//             alert('login successful')
//         }
//         else {
//             alert('password not correct')
//         }
//     }
//     else{
//         alert('email is not correct')
//     }

// })
