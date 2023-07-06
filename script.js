function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
   
  
    if(bill == '' | serviceQual == 0){
      alert("por favor, preencha os valores") 
      return;
  }
  
     let total = (bill * serviceQual) ;
     total = total.toFixed(2);
     document.getElementById('tip').innerHTML = total;
     document.getElementById('totaltip').style.display = "block";
  
  }
  
  document.getElementById('totaltip').style.display = "none";
  
  
  document.getElementById('tipsForm').addEventListener('submit', calculateTip);