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
        return <th className="text-white w-full p-8 text-2xl text-left" key={key}>{key}</th>
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
        <>
        <div className=" rounded-2xl bg-dark m-2 w-full">
            <table className="border-6 w-full">
                {this.getHeader()}
                {this.getRowsData()}
            </table>
        </div>
    </>
    );
    }
}
const RenderRow = (props) =>{
    if (props.keys.length == 1){
        return <tr className="text-blue border-1 border-blue border-l-0 text-left m-4" key={props.data}>{props.data}</tr>
    }
    else {
        return props.keys.map((key)=>{
        return <td key={props.data[key]}>{props.data[key]}</td>
        })
    }
}