const btn=document.querySelector('.btn');



btn.addEventListener('mouseover',(e) =>{

    e.preventDefault();

    console.log('mouse_over');





});

/*btn.addEventListener('click',(e) =>{

    e.preventDefault();

        console.log('clicked');



});*/

btn.addEventListener('mouseout',(e) =>{

    e.preventDefault();

console.log('mouse_out');

});





const form=document.querySelector('#my-form');

const inputname=document.querySelector('#name');

const email=document.querySelector('#email');

const msg=document.querySelector('.msg');

const userList=document.querySelector('#users');



form.addEventListener('submit',onsubmit);





function onsubmit(e){

    e.preventDefault();

    console.log(inputname.value);

    if(inputname.value===''|| email.value==='')

    {

       msg.classList.add('error'); 

        msg.innerHTML='please enter all fields';

        setTimeout(() => {

            msg.remove();

        }, 3000);

    }

    else{

       

       const li=document.createElement('li');

       li.appendChild(document.createTextNode(`${inputname.value}:${email.value}`));

       userList.appendChild(li);

        inputname.value="";

        email.value="";

    }

}
 