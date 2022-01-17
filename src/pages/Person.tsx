import { gql, useQuery } from '@apollo/client'
import { useParams, Link, Navigate } from 'react-router-dom'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';

import './person.css'

const PERSON = gql`
    query Person($personid: ID!) {
        person(id: $personid) {
            name
            birthYear
            homeworld {
                name
            }
            species {
                name
            }
            filmConnection {
            films {
                id
                title
                director
                planetConnection {
                    planets{
                        id
                        name
                    }
                  }
                }
            }
          }
    }
`

const Person = () => {
    const params = useParams();
    const { data, error, loading } = useQuery(PERSON, { variables: { personid: params.id } })
    if (error) {
        return(
            <Navigate to="/persons"/>
        )
    }
    if (loading) {
        return (
            <h3>cargando</h3>
        )
    }
    console.log(data)
    return (
        <div className='person'>
            <div className='close'>
                <Link to="/persons">
                    <CloseIcon />
                </Link>
            </div>
            <div className="card">
                <h3>{data.person.name}</h3>
                <h5>Fecha de nacimiento: {data.person?.birthYear === 'unknown' ? 'Desconocido' : data.person?.birthYear}</h5>
                <h5>Planeta de origen: {data.person?.homeworld?.name ?? 'Desconocido'}</h5>
                <h5>Especie: {data.person?.species?.name ?? 'Desconocido'}</h5>
                <h4>peliculas</h4>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">pelicula</TableCell>
                                <TableCell align="center">director</TableCell>
                                <TableCell align="center">planetas</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.person.filmConnection?.films?.map((film: any) => (
                                <TableRow
                                    key={film.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{film.title}</TableCell>
                                    <TableCell align="left">{film.director}</TableCell>
                                    <TableCell align="left">
                                        {
                                            film.planetConnection.planets.map((planet: any) => (
                                                <Chip key={planet.id} label={planet.name} />
                                            ))
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>

        </div>
    )
}

export default Person
