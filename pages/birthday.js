import useSwr from 'swr'
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Birthday(props) {
  const { data, error } = useSwr('/api/birthdays/una', fetcher)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  const hello = (data) => {
    if(data.birthday.length > 0 ){
      return <>
      <h2>{data.birthday[0].name}<br/>
      {data.birthday[0].birthday}
      </h2>
      </>
    } else {
      return <>
      <h2>No one by that name in the family</h2>
      </>
    }
  }

  return (
    <div class="background">
    <div className={styles.returntosearch}><button>&lt; return to search</button></div>
    {hello(data)}
   
    </div>
  )
}