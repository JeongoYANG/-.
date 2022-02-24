import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Login(){
    const [] = useState(0)
return <><form><Layout><h1>로그인</h1><br /><br />

<div></div>

<div>
<label htmlFor=""><b>아이디</b></label><br />
<input type="text" /><br />
<label htmlFor=""><b>비밀번호</b></label><br />
<input type="text" /><br />
<button>로그인</button><br />
<label htmlFor="">자동 저장</label><br />
<input type="text" /><br />
</div>
<div>
<button>취소</button>
<span>비밀번호<a href="#">찾기</a></span>
</div>
</Layout>
</form>
</>
}