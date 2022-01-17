import { gql, useQuery } from '@apollo/client'
import { Link, Outlet } from 'react-router-dom'
import './home.css'

const ALL_PERSONS = gql`
query {
  allPeople {
    people {
        id
        name
    }
  }
}
`

const Home = () => {
    const { data, error, loading } = useQuery(ALL_PERSONS)

    if(error) {
        return (<h3>error</h3>)
    }
    if(loading) {
        return (<h3>cargando...</h3>)
    }
    console.log(data)
    
    return (
        <div className='home'>
            <ul>

            {
                data.allPeople.people.map((person: any) => (
                    <li key={person.id}>
                        <Link to={"/persons/" + person.id}>
                            <h3 >{person.name}</h3>
                        </Link>
                    </li>
                ))
            }
            </ul>
            <Outlet/>
        </div>
    )
}

export default Home
