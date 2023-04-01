let current0=document.getElementById('current--0');
let player0=document.getElementById('player--0');
let player1=document.getElementById('player--1');
let score0=document.getElementById('score--0');
let score1=document.getElementById('score--1');
let dice=document.getElementById('.dice');
score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');
let score=[0,0];
let current=0;
let activeplayer =0;
let rolldice=document.querySelector('.btn--roll');
rolldice.addEventListener('click',function()
{
    let dicenumber=Math.trunc(Math.random()*6+1);
    dice.classList.remove=('hidden');
    dice.src='images/dice-${dicenumber}.png'
    if(dicenumber!=1)
    {
        current =current+ dicenumber;
        document.getElementById('current--${activeplayer}').textContent=current;
    }
    else{
        current=0;
        document.getElementById('current--${activeplayer}').textContent=current;
        activeplayer=activeplayer===0?1:0;
        player0.classList.toggle('player-active');
        player1.classList.toggle('player-active');
    }
}

















)