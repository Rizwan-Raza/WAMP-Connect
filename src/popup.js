document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', contact);
  document.getElementsByTagName("html")[0].style.width="384px";
  document.getElementsByTagName("body")[0].style.width="384px";
});

function contact(e) {
  e.preventDefault();

  document.querySelectorAll("#progress, .prevent-overlay").forEach(element => {
    element.classList.remove("hide");
  });

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document
        .querySelectorAll("#progress, .prevent-overlay")
        .forEach(element => {
          element.classList.add("hide");
        });
      var object = JSON.parse(this.responseText);
      alert(object.message);
      e.target.reset();
      window.close();
      //   console.log(this.responseText);
    }
  };
  xhttp.open("POST", "https://www.wampinfotech.com/php/contact.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  let f = e.target;
  xhttp.send(
    "name=" +
    f.name.value.trim() +
    "&email=" +
    f.email.value.trim() +
    "&number=" +
    f.number.value.trim() +
    "&company=" +
    f.company.value.trim() +
    "&message=" +
    f.message.value.trim()
  );
}