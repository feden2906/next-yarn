import {MainLayout} from "../components/MainLayout";
import Calc from "../components/Calc";
import {Provider} from "react-redux";
import {store} from "../components/redux"

import {Main} from "../components/Main";


export default function Index() {

    return (<MainLayout title={'Home Page'}>
        <Provider store={store}>
        <div className={'wrapper'}>
            <Main/>
            <div className={'calc'}>
                <Calc/>
            </div>
        </div>
        </Provider>
    </MainLayout>)
}
