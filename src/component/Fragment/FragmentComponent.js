import React from 'react'
import Table from './Table'

export default function FragmentComponent() {
    return (
        <React.Fragment>
            <h1>React Fragment</h1>
            <p>Welcome to Fragment section</p>
            <div>
                <center>
                    <Table />
                </center>
            </div>
        </React.Fragment>
    )
}
