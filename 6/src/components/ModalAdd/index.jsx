import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, Input} from 'antd';

import s from './ModalAdd.module.css'

const ModalAdd = ({setModalADD,AddUserA,employess}) => {


    const [name, setName] = useState('')
    const [sn, setSn] = useState('')

    const AddUser = () => {

        let user = {
            id:employess[employess.length - 1].id +1,
            first_name:name,
            last_name: sn,
            avatar:'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png',

        }

        AddUserA(user)

        setModalADD(false)
    }


    return (
        <div>
            {ReactDOM.createPortal(
                <div className={s.modal}>
                    <div className={s.wrap}>

                        <h1>Введите данные сотрудника</h1>

                        <Input className={s.inp} value={name} onChange={(e) => setName(e.currentTarget.value)}  placeholder="Имя" />
                        <Input className={s.inp} value={sn} onChange={(e) => setSn(e.currentTarget.value)}  placeholder="Фамилия" />

                        <div className={s.buttons}>

                            <Button className={s.left} onClick={() => {AddUser()}} className={s.back}  type="primary" size={'large'}>
                                Добавить сотрудника
                            </Button>

                            <Button onClick={() => {setModalADD(false)}}  type="default" size={'large'}>
                                Вернуться назад
                            </Button>


                        </div>

                    </div>

                </div>,
                document.getElementById('modaladd')
            )}
        </div>
    );
};

export default ModalAdd;