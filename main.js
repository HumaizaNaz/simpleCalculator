// function abc (){
//     alert('Hello')
// };
// function abc(){
// document.getElementById('abc').innerHTML = 'Hello'}
// function abc(){
//     var a ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem, optio , nihil in? Repellat adipisci corporis debitis earum natus asperiores ad vero quidem'
//     document.getElementById('anc').innerHTML=a
    
// };
// function abc(){
//     document.getElementById('ttt').innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem, optio , nihil in? Repellat adipisci corporis debitis earum natus asperiores ad vero quidem'
//     document.getElementById('anc').style.display='none'
// }
function dabana(e){
    document.getElementById('inp').value +=e
};
function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
};
function clr(){
    document.getElementById('inp').value=''
};
function clr1(){
    var a = document.getElementById('inp')
    a.value = a.value.slice (0,-1)
   
};