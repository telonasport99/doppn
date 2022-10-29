import React from 'react';
type ButtonPropsType={
    name:string
    callback:()=>void
}
export const Button = (props:ButtonPropsType) => {
    const {name,callback}=props
  const  onClickHandler =()=>{
      callback()
  }

    return (
     <button onClick={onClickHandler}>{name}</button>
    );
};

