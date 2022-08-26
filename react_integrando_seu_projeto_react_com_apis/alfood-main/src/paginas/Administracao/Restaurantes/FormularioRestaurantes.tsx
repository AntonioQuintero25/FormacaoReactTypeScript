import { TextField, Button, Typography, Box, AppBar , Container, Toolbar, Link, Paper} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante";
import {Link as RouterLink} from 'react-router-dom'


const FormularioRestaurantes = () => {

    const parametros = useParams();

    useEffect(()=> {
        if (parametros.id) {
            http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
                .then(resposta => setNomeRestaurante(resposta.data.nome))
                .catch(error => console.log(error))
        }
    }, [parametros])
    const [nomeRestaurante, setNomeRestaurante] = useState('');

    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) =>{
        
        evento.preventDefault();

        if (parametros.id) {
            
            http.put(`restaurantes/${parametros.id}/`,{nome:nomeRestaurante})
            .then(()=> {
                alert(`Restaurante ${nomeRestaurante} atualizado.`)
            }) 
        } else {
            http.post('restaurantes/',{nome:nomeRestaurante})
            .then(()=> {
                alert(`Restaurante ${nomeRestaurante} cadastrado.`)
            })  
        }
    
    }


    return(
        <Box>
            <Container maxWidth="lg" sx={{mt:1}}>
                <Paper sx={{p:2}}>
                    <Box sx={ {display:'flex', flexDirection:'column', alignItems:'center', flexGrow:1}}>
                            <Typography component="h1" variant="h6">Formulário de Restaurante</Typography>
                        <Box component={"form"} sx={{width:'100%'}} onSubmit={aoSubmeterForm}>
                                    <TextField 
                                    value={nomeRestaurante} 
                                    onChange={evento => setNomeRestaurante(evento.target.value)} 
                                    id="standard-basic" 
                                    label="Nome do Restaurante" 
                                    variant="standard"
                                    fullWidth 
                                    required
                                    />
                                <Button sx={{marginTop:1}} fullWidth type="submit" variant="outlined">Salvar</Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )

}

export default FormularioRestaurantes;