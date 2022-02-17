import React from "react";
import Layout from "../containers/Layout";
export default function Login(){
    return<Layout><h1>PUBG</h1>
    <form>
    <div>
    <label htmlFor=""><b>아이디</b></label><br/>
        <input type="text" /><br/>
        <label htmlFor=""><b>비밀번호</b></label><br/>
        <input type="text" /><br/>
        <button>로그인</button><br/>
        <label><input type="checkbox" />아이디 자동저장</label><br />
        <label><br/>
        </label>
    </div><br/>
        <div>
        <button>비밀번호 찾기</button><br/>
        </div><br/>
    </form>
    </Layout>
}


