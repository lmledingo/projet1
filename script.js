let counter = 1;
setInterval(()=>{
  document.querySelector('.img.show').classList.remove('show')
  const img = document.querySelector(`.img-${counter}`)
  img.classList.add('show')
counter++
if(counter >4){
  counter = 1
} 
},3000);

// menu burger//

const icone = document.querySelector('.navbar i');

const modal = document.querySelector('.modal');

icone.addEventListener('click', function(){
  console.log("icone cliquée")
  modal.classList.toggle('change-modal');
  icone.classList.toggle('fa-times');
});

