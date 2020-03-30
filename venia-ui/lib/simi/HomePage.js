import React from 'react'
// import { PbPageHoc } from 'src/simi/BaseComponents/Pbpage'
import TitleHelper from './Helper/TitleHelper'
import DefaultHome from './Home'

const Home = props => {
    return (
        <React.Fragment>
            {TitleHelper.renderMetaHeader({
                title: 'Home Page'
            })}
            <DefaultHome {...props}/>
        </React.Fragment>

    )
}

export default Home
