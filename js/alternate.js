function alternarDivs() {
    var div1 = document.getElementById('timeDate');
    var div2 = document.getElementById('countdown');
  
    if (div1.style.display !== 'none') {
      div1.style.display = 'none';
      div2.style.display = 'block';
    } else {
      div1.style.display = 'block';
      div2.style.display = 'none';
    }
  }
  
  setInterval(alternarDivs, 20000);
  