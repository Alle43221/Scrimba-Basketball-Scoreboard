 let home=0;
let guest=0;
function plus1(ammount, who){
    if(who==='home')
    {
        home+=ammount;
        document.getElementById('home_score').innerText=home.toString();
    }
    else
    {
        guest+=ammount;
        document.getElementById('guest_score').innerText=guest.toString();
    }
 }


