const form=document.getElementById("userForm");
const result=document.getElementById("result");
form.addEventListener("submit",function(e){
    e.preventDefault();

    const name =document.getElementById("name").value.trim();
    const age =document.getElementById("age").value.trim();
    const email =document.getElementById("email").value.trim();
    const address =document.getElementById("address").value.trim();

  document.getElementById("nameError").textContent = "";
document.getElementById("ageError").textContent = "";
document.getElementById("addressError").textContent = "";
document.getElementById("emailError").textContent = "";
      let valid = true;
 
  if (name === "") {
    document.getElementById("nameError").textContent = "من فضلك اكتب الاسم";
    valid = false;
  }
    if (!age || age < 1 || age > 120) {
    document.getElementById("ageError").textContent = "اكتب عمر صحيح (من 1 إلى 120)";
    valid = false;
  }
  if (address ===""){
    document.getElementById("addressError").textContent ="من فضلك اكتب العنوان";
    valid = false;
  }

if (email ===""){
    document.getElementById("addressError").textContent ="اكتب البريد الالكترونى";
    valid = false;
  }

  if (!valid) {
    result.style.display = "none";
    return; 
  }

    const user = { name: name, address: address, age: age };
  console.log(user);

  result.innerHTML =
    "<strong>تم الحفظ ✅</strong><br>" +
    "الاسم: " + user.name + "<br>" +
    "العنوان: " + user.address + "<br>" +
    "العمر: " + user.age + " سنة";
  result.style.display = "block";
  form.reset();
});





