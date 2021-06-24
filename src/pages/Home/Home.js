import React from 'react'
import { InfoSection } from '../../components'
import { homePageObjOne, homePageObjTwo } from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homePageObjOne} />
            <InfoSection {...homePageObjTwo} />
        </>
    )
}

export default Home
