import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { Table, Button } from 'react-bootstrap';
const baseUrl = "https://api.covidtracking.com/v1/states/current.json";
 
const MiApi=()=>{
    const[datos, setDatos] = useState([]);
    const[datosFiltrados, setDatosFiltrados] = useState([]);
    const[filtro,setFiltro]=useState("");
    const [nombre,setNombre]=useState("");
    const [vista, setVista] = useState("vista 1");
       
    useEffect(() => {
        const fetchDatos = async () => {
            let urlFiltro = baseUrl;

            const resp = await fetch(urlFiltro);
            const respDatos = await resp.json();
            console.log(respDatos);
            setDatos(respDatos);
            
        }

        fetchDatos();
    }, [])

const capturaNombrebuscar=(e)=>{
        setFiltro(e.target.value)
 }

const busquedaEstado=(e)=>{
    e.preventDefault();
    const EstadoUs={
        
        nombre:nombre,
    }
    console.log(nombre)
    console.log(datos)
    const listaFiltrada=datos.filter(el=> el.state===filtro)
    setDatosFiltrados(listaFiltrada)
    if (filtro !== "") {
        setVista("vista 2")
    }else{setVista("vista 1")}
    
    console.log(listaFiltrada)
    console.log("Filtro" + filtro)
}
const Ordenar=(e)=>{
    e.preventDefault();
    alert("ordenar")
    datos.sort();
    datosFiltrados.sort();
}   

    return(
    <>
        
        <Form onSubmit={busquedaEstado}>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label >Estado</Form.Label>
                <Form.Control
                   value={filtro}
                   onChange={capturaNombrebuscar}
                   type="text" 
                   placeholder="Ingresa el nombre del estado" />
            </Form.Group>
            <Button variant="primary" type="submit">Buscar </Button>
            <Button variant="primary" type="submit" onClick={Ordenar}> Ordenar</Button>
        </Form>
        
        {vista === "vista 1" && ( 
            < table className="table">
                 <th>Estado</th>
                <th>Positivos</th>
                <th>Negativos</th>
                
               
                <tbody>{datos.map( (dato)=> (
                
                    <tr key={dato.state}>
                     <td>{dato.state}</td>
                     <td>{dato.positive}</td>
                     <td>{dato.negative}</td>
                     
                    </tr>
                    

                ))}</tbody>
            </table>)
        }
        {vista === "vista 2" && (
           <Table striped bordered hover>
           <thead>
               <tr>
               <th>Estado</th>
               <th>Positivos</th>
               <th>Negativos</th>
               </tr>
           </thead>
           <tbody> 
                {datosFiltrados.map((dato) => (
                    
                    <tr key={dato.state}>
                        <td>{dato.state}</td>
                        <td>{dato.positive}</td>
                        <td>{dato.negative}</td>
 
                    </tr>
                ))}
            </tbody> 
            </Table>   )
        }
       
    </>
    )
}
export default MiApi;