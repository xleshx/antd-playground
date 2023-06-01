import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div style={{ background: "#AAA" }}>
        <Image
          src={"vercel.svg"}
          alt={''}
          width={500}
          height={500}
        />
      </div>
    </>

  )
}
