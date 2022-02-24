import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Bmi(){
    const [name, setName] = useState("")
    const [ki, setKi] = useState(0)
    const [mom, setMom] = useState(0)
    const sum = ()=>{
        let name = document.getElementById('name').value
        console.log('이름'+name)
        let ki = document.getElementById('ki').value
        console.log('키'+ki)
        let mom = document.getElementById('mom').value
        console.log('몸무게'+mom)
        setName(name)
        setKi(ki)
        setMom(mom)
    }
    return<Layout><h1>BMI</h1>
    <div><br />
    <label htmlFor="">이름</label><br />
    <input id="name" type="" /><br />

    <label htmlFor="">신장</label><br />
    <input id="ki" type=""/><br />

    <label htmlFor="">몸무게</label><br />
    <input id="mom" type=""/><br />

    <button onClick={()=>sum()}> 결과</button><br />
    <div>결과: {name}+{ki}+{mom} </div>
    <label><br />
    </label>

    </div>
    </Layout>
}