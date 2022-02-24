import React, {useState} from "react";
import Layout from "../containers/Layout";
import axios  from 'axios';
import { useLinkClickHandler } from 'react-router-dom';
export default function Grade(){
    
    const [inputs, setInputs] = useState({})
    const { name, kor, eng, math } = inputs;



    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        const gradeRequest = {name, kor, eng, math}
        alert(` 사용자이름: ${JSON.stringify(gradeRequest)}`)
    }
    
    
    
return (<Layout>
<form>
<h1>성적표</h1>

<div>
<label htmlFor=""><b>이름</b></label> <br />
<input type="text" name ="name" onChange={handleChange} /><br /><br />

<label htmlFor=""><b>국어 점수</b></label><br />
<input type="text" name ="kor" onChange={handleChange} /><br /><br />

<label htmlFor=""><b>영어 점수</b></label><br />
<input type="text" name ="eng" onChange={handleChange} /><br /><br />

<label htmlFor=""><b>수학 점수</b></label><br />
<input type="text" name ="math" onChange={handleChange} /><br /><br />
<button onClick={handleClick}>결과</button>


</div>
</form>
</Layout>)
}