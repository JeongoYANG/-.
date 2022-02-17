import React from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    return (<Layout><h1>성적표</h1>
    <from>
    <div>
    <label htmlFor="">이름</label><br />
    <input type="text" /><br /><br />
    <label htmlFor="">수학</label><br />
    <input type="text" /><br /><br />
    <label htmlFor="">국어</label><br />
    <input type="text" /><br /><br />
    <label htmlFor="">영어</label><br />
    <input type="text" /><br /><br />
    <button>등급 확인</button><br /><br />

    </div>
    </from>
    </Layout>
    )
}
