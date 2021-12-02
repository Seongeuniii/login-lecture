const id = document.querySelector("#id"),
      name = document.querySelector("#name"),
      pwd = document.querySelector("#pwd"),
      confirmPwd = document.querySelector("#confirm-pwd"),
      registerBtn = document.querySelector("#button");

function register() {
  const req = {
    id: id.value,
    name: name.value,
    pwd: pwd.value,
    confirmPwd: confirmPwd.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  }).then((res) => res.json()) // promise 객체 반환
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입 중 에러 발생"));
    })
}

registerBtn.addEventListener("click", register);