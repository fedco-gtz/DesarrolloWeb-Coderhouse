window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
      document.querySelector('.goTopContainer').classList.add('showGoTop');
       
    }
    else{
      document.querySelector('.goTopContainer').classList.remove('showGoTop');
    }
  }
   
  document.querySelector('.goTopContainer').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });