import React from 'react'
class HeaderComponent extends React.Component{

constructor(props){
    super(props);
    this.state = {
        logo : "YITS",
        headerName: "Yash Ussue Tracker App"
    }

}
render(){
    return(<div>
        <h2>logo: {this.state.logo}</h2>
            <h1>this.state.headerName</h1>
        </div>);
}
}
export default HeaderComponent;