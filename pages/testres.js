import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Results from './components/Results.js'

export default function TestRes() {
  return (
    <>
      <div class="background">
        <Results name='Bry'/>
      </div>
    </>
  )
}