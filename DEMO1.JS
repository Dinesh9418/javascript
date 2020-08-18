function Worker_Payment(){
	var amount = document.getElementById('amount').value;
	var cotton_rate = document.getElementById
  ('cotton_rate').value;
	var payment = (amount *cotton_rate);
	
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = " Payment = ₹ "+payment;
}

Worker_Payment();