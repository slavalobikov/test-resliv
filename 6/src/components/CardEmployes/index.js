import React from 'react';
import {DeleteOutlined, } from '@ant-design/icons';

import s from './CardEmployes.module.css'

const CardEmployes = ({img, first_name, last_name, DeleteUser, id}) => {
    return (
        <div className={s.card}>
            <img className={s.ava} src={img ? img : ''} alt="ava"/>
            <div>
                <span>{first_name} {last_name}</span>
            </div>

            <div  onClick={() => {
                DeleteUser(id)
            }} className={s.tresh}> <DeleteOutlined /></div>

        </div>
    );
};

export default CardEmployes;