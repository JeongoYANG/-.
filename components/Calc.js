import React from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    return (<Layout><h1>계산기</h1>
    <from>
    <div><br />
    <label htmlFor="">첫번째 숫자</label><br />
    <input type="text" /><br />
    <label htmlFor="">기호</label><br />
    <input type="text" /><br />
    <label htmlFor="">두번째 숫자</label><br />
    <input type="text" /><br />
    <button>결과</button><br />
    <label><br />
    </label>
    </div>
    </from>
    </Layout>
    )
}
