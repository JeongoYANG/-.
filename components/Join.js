import React from "react";
import Layout from "../containers/Layout";
export default function Join(){
    return (<Layout><h1>회원가입</h1>
    <form>
    <div>
    <label htmlFor="">이름</label><br />
    <input type="text" /><br /><br />
    <label htmlFor="">주민번호</label><br />
    <input type="text" />
    <label htmlFor=""> - </label>
    <input type="text" /><br /><br />
    <label htmlFor="">아이디</label><br />
    <input type="text" /><br />
    <button>아이디 중복확인</button><br /><br />
    <label htmlFor="">비밀번호</label><br />
    <input type="text" /><br />
    <label htmlFor="">비밀번호 재확인</label><br />
    <input type="text" /><br /><br />
    <label htmlFor="">닉네임</label><br />
    <input type="text" /><br /> 
    <button>닉네임 중복확인</button><br /><br />
    <button>가입완료</button><br />



    </div>
    </form>
    </Layout>)
}

