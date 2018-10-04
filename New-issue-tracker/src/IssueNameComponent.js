import React from 'react';

class IssueNameComponent extends React.Component{

    render (props) {
        return (
            <li onClick = { () => {this.props.clickHandler(this.props.index)}}
            className = {this.props.issue.completed?'completed':''}
            >
                
                {this.props.issue.name}
    <button onClick = { (event) => 
                       {
                       event.stopPropagation();
                       this.props.deleteIssue(this.props.index)
                      }
                    }
    >X</button>
    
    </li>
    
    )
    }

}

export default IssueNameComponent;