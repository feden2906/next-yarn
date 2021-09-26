import { Provider } from "react-redux";

import { Calendar, Main, MainLayout } from "../components";
import { store } from "../redux";

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      <Provider store={store}>
        <div className={'wrapper'}>
          <Main/>
          <div className={'calc'}>
            <Calendar/>
          </div>
        </div>
      </Provider>
    </MainLayout>
  )
}
