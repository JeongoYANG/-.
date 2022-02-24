import React, {useState} from "react";
import Layout from "../containers/Layout";
import axios from "axios";
export default function Bmi(){
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const getBmi = async (e)=>{
        e.preventDefault()
        alert(` 버튼 클릭 `)
        try{
            await axios.get(`http://localhost:8080/member/bmi/홍길동/180.5/80.5`)
            .then((res)=>{
                alert(`답장이 도착했습니다[내용] ${res.data}`)
            })
        }catch(error){
            alert(`에러 입니다`)
        }
        
        let name = document.getElementById('name').value
        console.log('이름'+name)
        let height = document.getElementById('height').value
        console.log('키'+height)
        let weight = document.getElementById('weight').value
        console.log('몸무게'+weight)
        setName(name)
        setHeight(height)
        setWeight(weight)
    }
    return<Layout><h1>BMI</h1>
    <div><br />
    <label htmlFor="">이름</label><br />
    <input id="name" type="" /><br />

    <label htmlFor="">신장</label><br />
    <input id="height" type=""/><br />

    <label htmlFor="">몸무게</label><br />
    <input type="button" onClick={getBmi} value="BMI 체크" /><br />

    <button onClick={()=>getBmi()}> 결과</button><br />
    <div>결과: {name}+{height}+{weight} </div>
    <label><br />
    </label>

    </div>
    </Layout>
}