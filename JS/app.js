const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");


function onLoginBtnClick(){
    const value = loginInput.value;
    if (value ===""){
        console.log("Please write your name");
    }else if(value.length > 15){
        alert("Your name is too long")
    }

}



//submit은 엔터를 누르거나 버튼을 클릭할대 발생
//위와같이 두면 submit이벤트가 발생하면 브라우저가 알아서 저 function을 넣어줄 것임
//addEventlistner을 쓸대는 용도가 바로 실행시키려는 목적이 아니다
//브라우저는 브라우저내에서 event로부터 정보를 잡아내어 onLoginSubmit 버튼을 실행함

// ()를 추가하면 함수를 한번만 실행하고 끝남

//preventDefault?

//onLoginSubmit(event) 인자로 보통 event라고 적어주는게 관행
// tomato를 event로 바뀸 ->

//preventDefault()> 이걸 호출하면 브라우저의 기본 동작을 막음
// -> 이제 우리가 컨트롤
//** 자바 스크립트는 우리가 기본동작을 막는것을 허용한다 */
// form의 기본동작은 submit
// 링크의 기본동작은 클릭시 다른페이지로 이동

// onLoginSubmit() 으로 적게되면, function을 "즉시 " 실행한다는 뜻임



// input이 form 안에 있어야한다//
// input 안에 있는 버튼을 누르거나 type이 submit인 input을 클릭하면
// 내가 작성한 form이 submit 된다

//우리가 form안에서 엔터를 누르고 input이 더 존재하지 않는다면
// 자동으로 submit된다는 규칙

//버튼을 누르면 submit 된다 = 새로고침 된다
//그래서 submit이라는 이벤트가 발생하는걸 아예 막거나 중간에 개입해야함

//loginButton.addEventListener("click", onLoginBtnClick);


//  