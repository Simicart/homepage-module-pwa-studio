import React, { useEffect, useState } from 'react'
import { getHomeData } from '../Model/Home';
import Banner from './Banner';
import HomeCat from "./HomeCat";
import LoadingSpiner from '../../components/LoadingIndicator'
import { withRouter } from 'react-router-dom';
import ProductList from './ProductList';
import Identify from '../Helper/Identify';
import * as Constants from '../Helper/Constants';
require('./home.scss');

const Home = props => {
    const {  history } = props;
    const [isPhone, setIsPhone] = useState(window.innerWidth < 1024)
    const simiSessId = Identify.getDataFromStoreage(Identify.LOCAL_STOREAGE, Constants.SIMI_SESS_ID)
    const cached_home = simiSessId?Identify.ApiDataStorage(`home_lite_${simiSessId}`):null

    const [data, setHomeData] = useState(cached_home)

    const resizePhone = () => {
        window.onresize = function () {
            const width = window.innerWidth;
            const newIsPhone = width < 1024
            if(isPhone !== newIsPhone){
                setIsPhone(newIsPhone)
            }
        }
    }
    useEffect(() => {
        if(!data) {
            getHomeData(setData);
        }
        resizePhone();
    },[data, isPhone])

    const setData = (data) => {
        if(!data.errors) {
            if (simiSessId)
                Identify.ApiDataStorage(`home_lite_${simiSessId}`,'update', data)
            setHomeData(data)
        }
    }

    if(!data) {
        return <LoadingSpiner />
    } 

    return (
        <React.Fragment>
            <Banner data={data} history={history} isPhone={isPhone}/>
            <HomeCat catData={data} history={history} isPhone={isPhone}/>
            <ProductList homeData={data} history={history}/>
        </React.Fragment>

    );
}

export default withRouter(Home);