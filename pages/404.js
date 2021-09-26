import Link from "next/link";

import { MainLayout } from "../components";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h2>Error 404</h2>
      <p>Page not found</p>
      <p>Please <Link href={'/'}><a>go back</a></Link></p>
    </MainLayout>
  )
}
