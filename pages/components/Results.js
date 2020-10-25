import useSwr from 'swr'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Results(props) {
  const { data, error } = useSwr('/api/birthdays/'+props.name, fetcher)

  if (error) return <div>Failed to load users</div>

  const hello = (data) => {
    // console.log("I made it to say hello");
    // console.log("This is what is in data " + data.birthday[0].name);
    // const birth =  data.birthday[0].name;
    // return birth;

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
    <>
    <div className={styles.returntosearch}><button>&lt; return to search</button></div>
    {hello(data)}
   
    </>
  )
}