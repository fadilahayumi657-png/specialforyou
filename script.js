function press(d){
  const el = document.getElementById('password');
  if(el.value.length < 6) el.value += d;
}
function del(){
  const el = document.getElementById('password');
  el.value = el.value.slice(0,-1);
}
function enterPass(){
  const input = document.getElementById('password').value;
  const correct = "071205"; // <-- PIN angka, ganti sesuai mau kamu
  if(input === correct){
    window.location.href = "cute.html";
  } else {
    window.location.href = "wrong2.html";
  }
}