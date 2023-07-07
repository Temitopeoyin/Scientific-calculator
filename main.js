function press(x) {
    document.getElementById("display1").value += x;
  }
  
  function cl() {
    var zero = '';
    document.getElementById("display1").value = zero;
    document.getElementById("display").value = zero;
  }
  
  function del() {
    document.getElementById("display1").value =
      document.getElementById("display1").value.slice(0, -1);
  }
  
  function logg() {
    var ssum = Math.log10;
    var bit = ssum(document.getElementById("display1").value);
    document.getElementById('display').value = bit;
  }
  
  function coss() {
    var ssum = Math.cos;
    var bit = ssum(document.getElementById("display1").value);
    document.getElementById('display').value = bit;
  }
  
  function sinn() {
    var ssum = Math.sin;
    var bit =ssum(document.getElementById("display1").value);
    document.getElementById('display').value = bit;
  }
  
  function sqt() {
    var ssum = Math.sqrt;
    var bit = ssum(document.getElementById("display1").value);
    document.getElementById('display').value = bit;
  }
  
  function equalls() {
    var inputedvalue = document.getElementById("display1").value;
    var total = eval(inputedvalue);
    document.getElementById("display").value = total;
    if (document.getElementById("display1").value == '') {
      document.getElementById("display").value = '';
    }
  }
  
  function toy() {
    document.getElementById("display1").value = 'Math.log';
  }