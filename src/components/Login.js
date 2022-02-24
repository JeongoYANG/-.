import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Login(){
    
    const [inputs, setInputs] = useState({})
    const { name, id, pw } = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const loginRequest = {name, id, pw}
        alert(` 사용자이름: ${JSON.stringify(loginRequest)}`)
        
    }





return <>
<form>
<Layout>
<h1>로그인</h1><br /><br />

<div>
</div>

<div>
<label htmlFor=""><b>아이디</b></label><br />
<input type="text" name ="id" onChange={handleChange} /><br /><br />
<label htmlFor=""><b>비밀번호</b></label><br />
<input type="text" name="pw" onChange={handleChange} /><br /><br />
<button onClick={handleClick}>로그인</button><br /><br />
</div>
<div>
<button onClick={handleClick}>취소</button><br /><br />
<span>비밀번호<a href="#">찾기</a></span><br /><br />
</div>
</Layout>
</form>
</>
}