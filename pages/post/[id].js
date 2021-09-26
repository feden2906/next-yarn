import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";


export default function Posts() {
    const router = useRouter()
    console.log(router)
    return (
        <MainLayout>
        <h1>Post - {router.query.id}</h1>
        </MainLayout>
    )
}
