import React from "react";

export default class Table extends React.Component {
    constructor(props){
        super(props);
        this.getKeys = this.getKeys.bind(this);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
    }
    
    getKeys = function(){
        //this gets the titles of the lists
        return Object.keys(this.props.data);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th className="text-white bg-blue px-8 py-3 border-b-2 border-gray-200" key={key}>{key}</th>
        })
    }
    
    getRowsData = function(){
        var keys = this.getKeys();
        if (keys.length == 1){
            var items = this.props.data[keys[0]];
            return items.map((row)=>{
                return <RenderRow data={row} keys={keys}/>
            })
        }
        else{
            //not implemented (obviously)
        }        
        
    }
    
    render() {
    return (
        <div className="w-full">
            <table className="bg-dark m-0 w-full border-separate">
                {this.getHeader()}
                {this.getRowsData()}
            </table>
        </div>
    );
    }
}
const RenderRow = (props) =>{
    if (props.keys.length == 1){
        return <tr className="p-4 m-4 border-b-2 border-gray-200 text-white" key={props.data}>{props.data}</tr>
    }
    else {
        return props.keys.map((key)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
        })
    }
}