const btn = document.querySelector("#login")
function welcome () {
    const user = document.querySelector('#username').value
    const password = document.querySelector('#userpassword').value
    console.log(user, password)
    if(user === 'admin' && password === 'admin'){
        alert('You found! Congratulations my friend. Enjoy the music.')
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else{
        alert(`Sorry! This page down't use a real database, then your can't do an login ${user}. But i hided a secret, are you can find it? Try another User and Password to see easter egg.`)
    }
}
btn.addEventListener('click', welcome)