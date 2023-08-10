import { useRef } from 'react';
import database from './200ver.json'
function Button2({app2,setApp2},app_name2){
    const inputref=useRef();
    function show(){
        app_name2=inputref.current.value
        let i2
        for (i2=0;i2<211;i2=i2+1){
            if(database[i2].App===app_name2){
                app2=database[i2];
                setApp2(database[i2])
            }
        }
    }
    return (
      <div>
        <input id="selector2" type='text' placeholder='请输入想要查找的软件' name="name2" list="app_list" ref={inputref}></input>
        <button id="button2" onClick={show}>确定</button>
        <br></br>
      </div>
    );
  }
  export default Button2