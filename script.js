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


