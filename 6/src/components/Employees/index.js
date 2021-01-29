import React, {useState} from 'react';
import {Button} from 'antd';

import s from './Employees.module.css'
import CardEmployes from "../CardEmployes";
import 'antd/dist/antd.css';
import ModalAdd from "../ModalAdd";



const Employees = ({employess, DeleteUser, AddUser}) => {


    const [modalAdd, setModalADD] = useState(false)

    return (
        <div className={s.employees}>
            {modalAdd && <ModalAdd AddUserA={AddUser} employess={employess} setModalADD={setModalADD} />}
            <div className={s.fl}>
                <Button className={s.btn} onClick={() => setModalADD(true)} type="primary" >
                    Добавить сотрудника
                </Button>
            </div>
            {employess.map(item => <CardEmployes key={item.id}
                                                 DeleteUser={DeleteUser}
                                                 id={item.id}
                                                 img={item.avatar}
                                                 last_name={item.last_name}
                                                 first_name={item.first_name} />)}
        </div>
    );
};

export default Employees;