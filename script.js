const counter = document.querySelectorAll('.counter')
counter.forEach((counter) =>{
    // console.log(counter);
counter.innerHTML= 0;
const updateCounter =() =>{
    const targetCount = +counter.getAttribute('data-target')
// console.log(typeof targetCount);
 const startingCount = Number (counter.innerHTML);
const incr = targetCount /100;
if(startingCount< targetCount){
    counter.innerHTML =`${Math.round(startingCount + incr)}`;
    setTimeout(updateCounter ,10 )
}
else{
    counter.innerHTML = targetCount;
}

}



updateCounter();
})