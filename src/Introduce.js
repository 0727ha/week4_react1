import { useState } from 'react';
import './Introduce.css';
import React from "react";
import Travel from './images/travel.jpg';
import Netflix from './images/netflix.jpg';
import Shopping from './images/shopping.jpg';

function  Introduce(props) {
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [major,setMajor] = useState("");
    const [part, setPart] = useState("");
    const [where, setWhere] = useState("");
    const [mbti, setMbti] = useState("");

function onChangeName(e){
    setName(e.target.value);
}
function onChangeNum(e){
    setNum(e.target.value);
}
function onChangeMajor(e){
    setMajor(e.target.value);
}
function onChangePart(e){
    setPart(e.target.value);
}
function onChangeWhere(e){
    setWhere(e.target.value);
}
function onChangeMbti(e){
    setMbti(e.target.value);
}

   return(
       <>

           <br></br>
           <h1 id="hz">ABOUT ME</h1>
           
           <div className="first"> WHO AM I?</div>
        <div className="MotherWapper">
        <div className="aboutMetext">
          <p>이름:{name}</p>
          <p>학번:{num}</p>
          <p>학과:{major}</p>

          <p className="pStyle">
            파트:{part}</p>
          <p>거주지:{where}</p>
          <p>mbti:{mbti}</p>

        </div>
        <div className="zeroWapper">
          <input onChange={onChangeName} value={props.name} className="inStyle" />
          <br />
          <input onChange={onChangeNum} value={props.num} className="in2Style" />
          <br />
          <input onChange={onChangeMajor} value={props.major} className="in2Style" />
          <br />
          <input onChange={onChangePart} value={props.part} className="in2Style" />
          <br />
          <input onChange={onChangeWhere} value={props.where} className="in2Style" />
          <br />
          <input onChange={onChangeMbti} value={props.mbti} className="in2Style" />
        </div>
      </div>

       
           
           <div>
             <div className="second">WHAT I LOVE</div>
                <img className="sns-img1" src={Travel}/>
                <img className="sns-img2" src={Netflix} />
                <img className="sns-img3" src={Shopping}/>
             
                <div className="third"> MORE INFO</div>
                <div className="tmi">
                  <p>instagram: hy._.azure_</p>
                  <p>mail: mcd158@naver.com</p>
                  <p>성격: 친해지면 활발하지만 낯을 많이 가려요.</p>
                  <p>취미:가장 큰 취미는 여행가는 것, 아무 생각없이 노래듣기, 스트레스 받으면 쇼핑하기</p>
                  <p>멋쟁이 사자처럼을 임하는 각오: 아직 부족한 점이 많기에 열심히 배우겠습니다! 끝까지 열정적으로 임할께요~</p>
                  </div>
                </div>
           </>  
            
             
   )
   }
   export default Introduce;