import React, { useEffect, useState, useRef } from 'react'
import { Form } from '@unform/web';
import styles from './Modal.module.css'

import axios from 'axios';

import Input from '../Input';

const Subscribe = ( ) => {
    const childRef = useRef();
    const [isShown, setIsShown] = useState(false)



    function handleSubmit(data) {
       data.tags = data.tags.split(' ')

       axios.post(`http://127.0.0.1:4000/tools`, data)
        .then(res => {
            const data = res.data;
            console.log(data)
        })
    }

    return (
        <div className={styles.container} >
          
            <Form onSubmit={handleSubmit}>
                <h4>+ Add new tool</h4>
                <div>
                    <label htmlFor="title">Tool Name</label>
                    <Input type="text" name="title" id="title"/>
                </div>
                <div>
                    <label htmlFor="link">Tool link</label>
                    <Input type="text" name="link" id="link"/>
                </div>
                <div>
                    <label htmlFor="description">Tool description</label>
                    <Input type="text" name="description" id="description"/>
                </div>
                <div>
                    <label htmlFor="tags">Tool tags</label>
                    <Input type="text" name="tags" id="tags"/>
                </div>
                <button type="submit">Save</button>
            </Form>
        </div>
    )
}

export default Subscribe;
