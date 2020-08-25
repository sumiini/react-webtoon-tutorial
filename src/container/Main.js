import React from "react";
import axios from 'axios';
//컨테이너 역할을 하는 컴포넌트들은 prop를 router를 통해 전달 받을 예정이므로 class형으로 만든다.
// setState()는 컴포넌트의 state객체에 대한 업데이트를 실행하고 state가 변경되면 컴포넌트는 리렌더링된다.

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import webtoonList from "../component/WebtoonList";

class Main extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            day:'mon',
            webtoonList : []
        };
    }

    componentDidMount(){
        this._getList();
    }
    _getList(){
        const apiUrl = 'dummy/webtoon_list.json';

        axios.get(apiUrl)
            .then(function (data ) {
                this.setState({
                    webtoonList:data.data.webtoonList
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        

    }
    
    render(){
        return(
            <div>
                <Header/>
                <Gnb />
                {
                    this.state.webtoonList.length > 0? 
                    (
                        <webtoonList list={
                            this.state.webtoonList.filter(webtoon => (
                                //filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array만든다.
                                webtoon.day === this.state.day //웹툰 리스트 중 요일에 해당하는 웹툰만 반환
                            ))
                        } />
                    ) 
                    : 
                    (
                        <span>
                            Loading...
                        </span>
                    )}
                <Footer />
            </div>
            
        )
    }
}

export default Main;


/*
동기적 일처리 방식 : 순차적으로 일을 스스로 끝내 나가는 방식
비동기적 일처리 방식 : 해야 할 일을 위임하고 기다리는 방식

*/