import * as Constants from './Constants';
import CacheHelper from './CacheHelper';

class Identify {
    static SESSION_STOREAGE = 1;
    static LOCAL_STOREAGE = 2;

    static isRtl() {
        let is_rtl = false;
        const storeConfigs = this.getStoreConfig();

        const configs = storeConfigs && storeConfigs.hasOwnProperty('simiStoreConfig') ? storeConfigs.simiStoreConfig : null;

        if (configs !== null && configs.config && configs.config.base && configs.config.base.is_rtl) {
            is_rtl = parseInt(configs.config.base.is_rtl, 10) === 1;
        }
        return is_rtl;
    }

    /*
    Store config
    */
    static saveStoreConfig(data) {
        //check version
        if (data && data.simiStoreConfig && data.simiStoreConfig.pwa_studio_client_ver_number) {
            const {pwa_studio_client_ver_number} = data.simiStoreConfig
            const curentVer = this.getDataFromStoreage(Identify.LOCAL_STOREAGE, Constants.CLIENT_VER)
            if (curentVer && curentVer !== pwa_studio_client_ver_number) {
                console.log('New version released, updating..')
                CacheHelper.clearCaches()
                window.location.reload()
            }
            this.storeDataToStoreage(Identify.LOCAL_STOREAGE, Constants.CLIENT_VER, pwa_studio_client_ver_number)
        }
        //save to storeview + currency to local storage
        if (data.simiStoreConfig && data.simiStoreConfig.config_json && (typeof data.simiStoreConfig.config_json) === 'string') {
            const simi_config = JSON.parse(data.simiStoreConfig.config_json)
            if (simi_config && simi_config.storeview) {
                data.simiStoreConfig.config = simi_config.storeview
                if (simi_config.storeview && simi_config.storeview.base && simi_config.storeview.base.customer_identity)
                    this.storeDataToStoreage(Identify.LOCAL_STOREAGE, Constants.SIMI_SESS_ID, simi_config.storeview.base.customer_identity)
            }
        }
        //save store config to session storage
        this.storeDataToStoreage(Identify.SESSION_STOREAGE, Constants.STORE_CONFIG, data)
    }
    static getStoreConfig() {
        return this.getDataFromStoreage(this.SESSION_STOREAGE, Constants.STORE_CONFIG);
    }

    /*
    Dashboard config handlers
    */
    static getAppDashboardConfigs() {
        let data = this.getDataFromStoreage(this.SESSION_STOREAGE, Constants.DASHBOARD_CONFIG);
        if (data === null) {
            //init dashboard config
            data = window.DASHBOARD_CONFIG;
            if (data) {
                try {
                    let languages = {}
                    if (languages = data['app-configs'][0]['language']) {
                        for(const locale in languages) {
                            for(const term in languages[locale]) {
                                languages[locale][term.toLowerCase()] = languages[locale][term]
                            }
                        }
                    }
                } catch (err) {console.log(err)}
                this.storeDataToStoreage(this.SESSION_STOREAGE, Constants.DASHBOARD_CONFIG, data)
            }
        }
        return data;
    }
    /*
    App Settings
    */
    static getAppSettings() {
        return this.getDataFromStoreage(this.LOCAL_STOREAGE, Constants.APP_SETTINGS);
    }

    static storeAppSettings(data) {
        return this.storeDataToStoreage(this.LOCAL_STOREAGE, Constants.APP_SETTINGS, data)
    }


    /*
    store/get data from storage
    */
    static storeDataToStoreage(type, key, data) {
        if (typeof(Storage) !== "undefined") {
            if (!key)
                return;
            //process data
            const pathConfig = key.split('/');
            let rootConfig = key;
            if (pathConfig.length === 1) {
                rootConfig = pathConfig[0];
            }
            //save to storegae
            data = JSON.stringify(data);
            if (type === this.SESSION_STOREAGE) {
                sessionStorage.setItem(rootConfig, data);
                return;
            }

            if (type === this.LOCAL_STOREAGE) {
                localStorage.setItem(rootConfig, data);
                return;
            }
        }
        console.log('This Browser dont supported storeage');
    }
    static getDataFromStoreage(type, key) {
        if (typeof(Storage) !== "undefined") {
            let value = "";
            let data = '';
            if (type === this.SESSION_STOREAGE) {
                value = sessionStorage.getItem(key);
            }
            if (type === this.LOCAL_STOREAGE) {
                value = localStorage.getItem(key);
            }
            try {
                data = JSON.parse(value) || null;
            } catch (err) {
                data = value;
            }
            return data
        }
        console.log('This browser does not support local storage');
    }

    static ApiDataStorage(key='',type='get',data={}){
        let api_data = this.getDataFromStoreage(this.SESSION_STOREAGE,key);
        if(type === 'get'){
            return api_data
        }else if(type === 'update' && data){
            api_data = api_data ? api_data : {};
            api_data = {...api_data,...data}
            this.storeDataToStoreage(this.SESSION_STOREAGE,key,api_data)
        }
    }

    /*
    Version control
    */
    //version control
    static detectPlatforms() {
        if (navigator.userAgent.match(/iPad|iPhone|iPod/)) {
            return 1;
        } else if (navigator.userAgent.match(/Android/)) {
            return 2;
        } else {
            return 3;
        }
    }

}

export default Identify;
