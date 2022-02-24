import React,{useState} from 'react' 
import Layout from '../containers/Layout'
import axios  from 'axios';
import { useLinkClickHandler } from 'react-router-dom';
export default function Calc(){
    const [inputs, setInputs] = useState({})
    const { num1, opcode, num2 } = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name } = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const calcRequest = {num1, opcode, num2}
        alert(` 입력갑 : ${JSON.stringify(calcRequest)}`)
    }


    /*const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [result, setResult] = useState(0)
    const sum = () => {
        let num1 = document.getElementById('num1').value
        console.log('숫자 1: '+num1)
        let num2 = document.getElementById('num2').value
        console.log('숫자 2: '+num2)
        setNum1(num1)
        setNum2(num2)
       setResult(Number(num1)+Number(num2))
       console.log('결과'+result)
    }*/
    
    return <Layout>
    <form>
    <h1>계산기</h1>
    <form action="">
    <label><b>숫자</b></label><br />
    <input type="text" name ="num1" onChange={handleChange} /><br /><br />

    <label htmlFor=""><b>기호</b></label><br />
    <input type="text" name ="opcode" onChange={handleChange} /><br /><br />
    
    
    <br /><br />

    <label htmlFor=""><b>숫자</b></label><br />
    <input type="text" name="num2" onChange={handleChange} /><br /><br />
    <button onClick={handleClick}>계산</button>
    </form><br />
    </form>
    </Layout>
}
// <select type="text" name="opcode" onChange={handleChange}><br /><br /><br />
//         <option value="">+</option>
//         <option value="">-</option>
//         <option value="">*</option>
//         <option value="">/</option>
//         <option value="">%</option>
//     </select>