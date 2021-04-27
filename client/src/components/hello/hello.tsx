import React, {useEffect, useState} from 'react';
import axios from 'axios'

export const Hello = () =>{
    interface ProjectData{
        id: string,
        name: string,
        description:string,
       date: Date,
    }
const [initialState, setInitialState] = useState<ProjectData[]>([])

useEffect(() => {
    axios.get('/api/projects').then(res => {
        if(res){
            return res
        }
    }).then(jsonResponse => setInitialState(jsonResponse!.data.data))
}, [])
console.log(initialState)
return(<div>{
    initialState.length > 0 && initialState.map(e => <li key={e.id}>{e.name}</li>)
    }</div>)
}