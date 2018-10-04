import React from 'react';
import IssueNameComponent from './IssueNameComponent';
import IssueForm from './IssueForm';

class IssueListComponent extends React.Component{

constructor(props){
    super(props);
    this.changeStatus = this.changeStatus.bind(this);
    this.updateIssue = this.updateIssue.bind(this);
    this.addIssue = this.addIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    
    this.state = {
        issues:[{name:"create React App",completed:false },
                {name:"create React POC",completed:true},
                { name:"preapare PPT", completed:false}],
        currentIssue:''
    }
}
    
    deleteIssue(issueToBeDeleted){
        console.log("delete button clicked",issueToBeDeleted);
        let issues = this.state.issues;
        issues.splice(issueToBeDeleted,1);
        this.setState({
            issues
        })
    }
    
    
    
    addIssue(event){
        event.preventDefault(); 
        console.log(" addIssue triggered");
        let issues =this.state.issues;
        let currentIssue = this.state.currentIssue;
        issues.push({
            name:currentIssue,
            completed:false
        })
        this.setState({
          issues:issues,
            currentIssue:''
        })
    }
    
    
    updateIssue(newValue){
        this.setState({
            currentIssue:newValue.target.value
        })
    }
    
    changeStatus(index){
        
        console.log(this.state.issues[index]);
         var  items= this.state.issues[index];
        items.completed = !items.completed;
         this.setState({newIssues:items});
        

    }
    
    
    render(){

        return (<div>
                <h1>YASH Issue Tracker App</h1>
                <section>
                    <IssueForm
                currentIssue = {this.state.currentIssue}
                updateIssue = {this.updateIssue}
                addIssue = {this.addIssue}
                
                />
                </section>
           <ul>
             {
              
            
                this.state.issues.map((issue, index)=>{
            
                return <IssueNameComponent 
                    key = {issue.name} 
                    issue = {issue}
                    clickHandler = {this.changeStatus}
                    index = {index}
                    deleteIssue = {this.deleteIssue}
                />;
            })   
           }
            </ul>
        </div>);
    }
}
export default IssueListComponent;