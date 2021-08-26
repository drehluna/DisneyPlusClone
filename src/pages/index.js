
import styles from '../../styles/Home.module.css'
import { HomeHeader } from '../components/index/header'
import { Prices } from '../components/index/Prices'

export default function Home() {
  return (
    <div className={styles.container}>
        <HomeHeader/>
        <Prices/>
    </div>
  )
}
