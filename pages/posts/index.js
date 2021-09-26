import React from "react";
import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function Index () {
    const clickHandler = ()=> {
        Router.push('/')
    }

    return (
        <MainLayout>

        <h1>Posts Page</h1>

            <button onClick={clickHandler}>Go back to home</button>
            <button onClick={()=> Router.push('/about')}>Go back to about</button>

        </MainLayout>
    )
}
