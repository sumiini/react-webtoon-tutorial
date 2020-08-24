import React from "react";
//컨테이너 역할을 하는 컴포넌트들은 prop를 router를 통해 전달 받을 예정이므로 class형으로 만든다.

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";

class Main extends React.Component{
    constructor(props){
        super(props);

        this.state={
            day:'mon',
            webtoonList : []
        };
    }
    
    render(){
        return(
            <div>
                <Header/>
                <Gnb />
                Main
                <Footer />
            </div>
            
        )
    }
}

export default Main;
