import { Button, Button2, Button3 } from '@szympajka/ds'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Button2 as="a">hello</Button2>
    </div>
  )
}
