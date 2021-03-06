import React from 'react'
import './repo.less'


const Repo = (props) => {
    const repo = props.repo

        return (
            <div className="repo">
                <div className="repo-header">
                    <div className="repo-header-name">{repo.name}</div>
                    <div className="repo-header-stars">{repo.stargazers_count}</div>
                    
                    <div className="repo-last-commit">{repo.updated.at}</div>
                    <a href={repo.html_url} className="repo-link">Repository link: {repo.html_url}</a>
                </div>
            </div>
        )
    
}

export default Repo;