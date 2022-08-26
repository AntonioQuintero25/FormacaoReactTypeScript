import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante"

const AdministracaoRestaurantes = () =>{
    
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
    
    useEffect(()=>{
        http.get<IRestaurante[]>('restaurantes/')
        .then(resposta => setRestaurantes(resposta.data))
    }, [])

    const excluir = (restauranteASerExcluido: IRestaurante) =>{
        http.delete(`restaurantes/${restauranteASerExcluido.id}/`)
            .then(()=>{
                const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== restauranteASerExcluido.id)
                setRestaurantes([...listaRestaurante])
            })
    }

    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    restaurantes.map(restaurantes =>
                        <TableRow key={restaurantes.id}>
                            <TableCell>
                                    {restaurantes.nome}
                            </TableCell>
                            <TableCell>
                                [<Link to={`/admin/restaurantes/${restaurantes.id}`}>editar</Link>]
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" onClick={()=> excluir(restaurantes)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>                        
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )

    
}

export default AdministracaoRestaurantes