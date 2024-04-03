var check_diemdi=0;
var check_diemden=0;
var choose_diemdi = document.getElementsByClassName('choose_diemdi');
for(let i=0; i<choose_diemdi.length;i++){
    choose_diemdi[i].onclick = function(){
        document.getElementById('diemdi').innerHTML= choose_diemdi[i].innerHTML;
        check_diemdi=i+1;
        console.log(check_diemdi.toString());
    };
}
var searchTicket = document.getElementsByClassName('searchTicket');
var choose_diemden = document.getElementsByClassName('choose_diemden');
for(let i=0; i<choose_diemden.length;i++){
    choose_diemden[i].onclick = function(){
        document.getElementById('diemden').innerHTML= choose_diemden[i].innerHTML;
        check_diemden=i+1;
        console.log(check_diemden.toString());
    };
}
var searchTicket = document.getElementsByClassName('searchTicket');
var hide_diemdi = true;
var hide_diemden = true;
var hide_lich = true;
function userClick_diemdi(){
    document.querySelector('#option1').style.display =hide_diemdi?'block':'none';
    document.querySelector('#option2').style.display='none';
    document.querySelector('#option3').style.display='none';
    hide_diemdi= !hide_diemdi;
}
function userClick_diemden(){
    document.querySelector('#option2').style.display=hide_diemden?'block':'none';
    document.querySelector('#option1').style.display='none';
    document.querySelector('#option3').style.display='none';
    hide_diemden= !hide_diemden;
}s
function userClick_ngay(){
    document.querySelector('#option3').style.display=hide_lich?'block':'none';
    document.querySelector('#option2').style.display='none';
    document.querySelector('#option1').style.display='none';
    hide_lich= !hide_lich;
}
var choose_diemdi = document.getElementsByClassName('choose_diemdi')[0];
choose_diemdi.onclick = function(){
    console.log('siuuuu');
    document.getElementById('diemdi').innerHTML= choose_diemdi.innerHTML;
}

