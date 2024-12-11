import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ContextAPI } from './context/ContextAPi';

import Calc1 from './comp/calc/study01'

import Inp1 from './comp/inp/input01'
import Oup1 from './comp/inp/output01'
import Ref from './comp/inp/Ref01'

import ProJoin from './comp/pro/Join'
import ProLogin from './comp/pro/Login'
import ProItemList from './comp/pro/ItemList'

import Ax1 from './comp/ax/ax01'

import Red01 from './comp/red/Red01'
import Red02 from './comp/red/Red02'
import ContetxtAction from './comp/red/ContextAction';

import { useContext, useState } from 'react';

function App() {

  const [parent, setParent] = useState(0);

  return (
    <div className="App">
      <ContextAPI.Provider value={{parent, setParent}}>
        <BrowserRouter>
          <About />
          <Routes>
            
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/cal1"} element={<Calc1 />} />

            <Route path={"/inp1"} element={<Inp1 />} />
            <Route path={"/oup1"} element={<Oup1 />} />
            <Route path={"/ref1"} element={<Ref />} />

            <Route path={"/pro1"} element={<ProJoin />} />
            <Route path={"/login"} element={<ProLogin />} />
            <Route path={"/itemList"} element={<ProItemList />} />

            <Route path={"/ax1"} element={<Ax1 />} />
            <Route path={'/red01'} element={<Red01 />} />
            <Route path={'/red02'} element={<Red02 />} />
            <Route path={'/last'} element={<ContetxtAction />} />
          </Routes>
        </BrowserRouter>
      </ContextAPI.Provider>
    </div>
  );
}

function About() {

  const { parent , setParent } = useContext(ContextAPI);

  return (
    <div style={{border: '2px blue solid'}}>
      <Link to="/">Home으로 이동</Link>
      <br/>
      context 값: {parent}
    </div>
  )
}

function Home() {
  return(
    <div>
      <h1>Start Home</h1>
      <Link to="/about">About으로 이동</Link><br/>
      <Link to="/cal1">Cal1로 이동하기</Link><br/>

      <h4>데이터 옮기기</h4>
      <Link to="/inp1">데이터 입력</Link><br/>
      <Link to="/oup1">데이터 출력</Link><br/>
      <Link to='/ref1'>Ref 사용하기</Link>

      <h4>Axios</h4>
      <Link to="/ax1">AXIOS 사용</Link><br/>

      <h4>기능</h4>
      <Link to="/pro1">회원가입 창</Link><br/>
      <Link to="/login">로그인</Link><br/>
      <Link to="/itemList">아이템 리스트</Link><br/>

      <Link to='/red01'>리듀서 01</Link><br/>
      <Link to='/red02'>리듀서 02</Link><br/>
      <Link to='/last'>Context 값 변경하기</Link><br/>
    </div>
  )
}

export default App;
