import React from 'react';
import { bool, shape, string } from 'prop-types';
import { useScrollLock } from '@magento/peregrine';

import { mergeClasses } from '../../classify';
import Footer from '../Footer';
import Header from '@magento/venia-ui/lib/components/Header';
import defaultClasses from './main.css';

import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import Identify from '../../simi/Helper/Identify';
import { Simiquery } from '../../simi/Network/Query';
import * as Constants from '../../simi/Helper/Constants';
import simiStoreConfigDataQuery from '../../simi/Queries/getStoreConfigData.graphql';
import {saveCategoriesToDict} from 'src/simi/Helper/Url';

const Main = props => {
    const { children, isMasked } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    const rootClass = isMasked ? classes.root_masked : classes.root;
    const pageClass = isMasked ? classes.page_masked : classes.page;

    useScrollLock(isMasked);

    function mainContent() {
        return (
            <React.Fragment>
                <Header />
                {window.innerWidth >= 1024 && <HeaderNavigation />}
                <div className={pageClass}>{children}</div>
                <Footer />
            </React.Fragment>
        )
    }

    return (
        <main className={classes.root}>
            {Identify.getDataFromStoreage(Identify.SESSION_STOREAGE, Constants.STORE_CONFIG) ?
                mainContent() :
                <Simiquery query={simiStoreConfigDataQuery}>
                    {({ data }) => {
                        if (data && data.storeConfig) {
                            Identify.saveStoreConfig(data)
                            saveCategoriesToDict(data.simiRootCate)
                            return mainContent()
                        }
                        return mainContent()
                    }}
                </Simiquery>
            }
        </main>
    );
};

export default Main;

Main.propTypes = {
    classes: shape({
        page: string,
        page_masked: string,
        root: string,
        root_masked: string
    }),
    isMasked: bool
};
