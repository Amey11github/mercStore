let posters=['images/post1.jpg','images/pos2.jpeg','images/pos3.jpeg'];
let adPost=document.querySelector('#adPost');
let nextBtn=document.querySelector('#nextBtn')
let prevBtn=document.querySelector('#prevBtn')

let indx=0;
adPost.src=posters[indx];
nextBtn.addEventListener('click',()=>{
    if(indx == posters.length-1)
    {
        indx=0;
        adPost.src=posters[indx];
        console.log(indx);
    }
    else{
        indx++;
        adPost.src=posters[indx];
        console.log(indx);
    }
    
})

prevBtn.addEventListener('click',()=>{
    if(indx == 0)
    {
        indx=posters.length-1;
        adPost.src=posters[indx];
        console.log(indx);
    }
    else{
        indx--;
        adPost.src=posters[indx];
        console.log(indx);
    }
    
})

let cart=document.querySelector('#cart')

cart.addEventListener('click',()=>{
    window.open('cart.html','_blank')
})

let cartProd1=document.querySelector('#cartProd1')
cartProd1.addEventListener('click',()=>{
    localStorage.setItem('image',cartProd1.src);
})




