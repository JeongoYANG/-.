import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [name, setName] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const sum = ()=>{
        let name = document.getElementById('name').value
        console.log('이름'+name)
        let kor = document.getElementById('kor').value
        console.log('국어'+kor)
        let eng = document.getElementById('eng').value
        console.log('영어'+eng)
        let math= document.getElementById('math').value
        console.log('수학'+math)
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
    }
    
return <Layout><h1>성적표</h1>
<div>
<label htmlFor=""><b>이름</b></label> <br />
<input id="name" type="" /><br /><br />
<label htmlFor=""><b>국어 점수</b></label><br />
<input id="kor" type="" /><br /><br />
<label htmlFor=""><b>영어 점수</b></label><br />
<input id="eng" type="" /><br /><br />
<label htmlFor=""><b>수학 점수</b></label><br />
<input id="math" type="" /><br /><br />
<button onClick={()=>sum()}>결과</button><br />
<div>결과: {name},{kor},{eng},{math} </div>

</div>
</Layout>
}