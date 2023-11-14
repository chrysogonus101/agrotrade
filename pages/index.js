import Head from "next/head"
import { JobOpening } from "@/Component/JobOpening"
import { InfoBox } from "@/Component/InfoBox"

export default function Index  () {
  return (
    <>
  <Head>
    <title>Agro Trade</title>
  </Head>
  <main>
    <InfoBox>
      <ul>
        <li>watermelon</li>
        <li>orange</li>
        <li>guava</li>
      </ul>
    </InfoBox>


    <JobOpening title='Next Js Hybrid work'
    location='Nairobi'/>
    <JobOpening title='React Devloper'
    location='Abuja'/>
    
  </main>
    </>
  )
}
