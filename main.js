var text = [];
function submit() {
  var t1 = document.getElementById("text_1").value;
  var t2 = document.getElementById("text_2").value;
  var t3 = document.getElementById("text_3").value;
  var t4 = document.getElementById("text_4").value;
  text.push(t1);
  text.push(t2);
  text.push(t3);
  text.push(t4);
  console.log(text);
  document.getElementById("display_text").innerHTML = text;
  document.getElementById("submit_button").style.display = "none";
  document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
  text.sort();
  console.log(text);
  document.getElementById("display_text").innerHTML = text;
}
