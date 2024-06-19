import {React,useState,useEffect} from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const GitHub=()=>{
    const data=useLoaderData();
    // const [data,setData]=useState({});
    // const githubProfile=useEffect(()=>{
    //     fetch('https://api.github.com/users/choudhary8')
    //     .then(res=>res.json())
    //     .then(data=>{setData(data)})
    // },[])
    return (
        <>
        followers : {data.followers}
        <img src={data.avatar_url} className='w-64 '/>
        </>
    )
}

export default GitHub;

export const githubProfileInfo=()=>{
   return fetch('https://api.github.com/users/choudhary8')
        .then(res=>res.json())
}

