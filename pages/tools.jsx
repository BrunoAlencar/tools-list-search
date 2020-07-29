import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios';

import styles from '../styles/Tools.module.css'
import Card from './components/Card';


let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const myInit = {
  method: 'POST',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

const Tools = () => {
    const [search, setSearch] = useState('')
    const [list, setList] = useState([])
    const [typingTimeout, setTypingTimeout] = useState(0)

    useEffect(() => {
        console.log(search)
        if (typingTimeout) {
            clearTimeout(typingTimeout)
        }
        
        setTypingTimeout(setTimeout(function () {
            axios.get(`http://127.0.0.1:4001/tools?q=${search}`)
                .then(res => {
                const data = res.data;
                setList([...data]);
                })
        }, 500))
    }, [search])

    useEffect(() => {
        axios.get(`http://127.0.0.1:4001/tools`)
        .then(res => {
          const data = res.data;
          setList([...data]);
        })
    }, [])

    return (
        <>
            <Head>
                <title>Lista de tarefas</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h2>This is my list</h2>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
            <ul>
               { list ? list.map((item) => (
                        <Card key={item.id} props={item}/>
                    )): null }
            </ul>
        </>        
    )
}

export default Tools;