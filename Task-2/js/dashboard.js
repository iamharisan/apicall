const sidebar = document.querySelector("sidebar")
const toleft = document.querySelector("left")















window.addEventListener('load', function(){
    
    getUsers();
})
const getUsers = () => {
    // users api
    // fill table
    const details = document.querySelector(".profile")
    console.log(localStorage.getItem("token"))
    fetch('http://3.16.194.5:8000/api/v1/admin/users?page=1&limit=10',
{

    method:'GET',
    
    headers:{
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem("token")
    },
    
})
.then((response)=>response.json())
.then((data)=>{
    
     
     let user = data
     let emplyees = user.data.users;
     
     console.log(s)
     let html =`<p class="ip name">${emplyees.name.first}</p>
                <p class="ip email">${emplyees.email}</p>`
    details.insertAdjacentHTML('beforeend',html)
})    
}


    
