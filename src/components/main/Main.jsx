import React, { useEffect } from 'react'
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import Repo from "./repo/Repo"
import { getRepos } from '../actions/repos'


const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items )


    useEffect(() => {
        dispatch(getRepos())
        
    }, [])

        return (
            <div>
                {repos.map(repo => 
                    <Repo repo={repo}/>
                )}
            </div>
        );
    };

    export default Main;
