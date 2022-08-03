import React from 'react';
import "./ToDoList.css";
import {Header} from './Header';
import {Input} from './Input';

export const ToDoList = () => {
    return (
      <div className="to-do-list">
        <Header/>
        <Input/>
      </div>
    );
}
