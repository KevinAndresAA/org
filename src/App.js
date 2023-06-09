import { useState } from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo:'Front End',
    foto:'https://avatars.githubusercontent.com/u/26666489?v=4',
    nombre:'Harland Lohora',
    puesto:'Instructor',
    fav: true
  }])

  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo:'Programación',
        colorPrimario:'#57C278',
        colorSecundario:'#D9F7E9'
      },
      {
        id: uuid(),
        titulo:'Front End',
        colorPrimario:'#82CFFA',
        colorSecundario:'#E8F8FF'
      },
      {
        id: uuid(),
        titulo:'Data Science',
        colorPrimario:'#A6D157',
        colorSecundario:'#F0F8E3'
      },
      {
        id: uuid(),
        titulo:'Devops',
        colorPrimario:'#E06B69',
        colorSecundario:'#FDE7E8'
      },
      {
        id: uuid(),
        titulo:'UX y Diseño',
        colorPrimario:'#DB6EBF',
        colorSecundario:'#FAE9F5'
      },
      {
        id: uuid(),
        titulo:'Móvil',
        colorPrimario:'#FFBA05',
        colorSecundario:'#FFF5D9'
      },
      {
        id: uuid(),
        titulo:'Innovacion y gestión',
        colorPrimario:'#FF8A29',
        colorSecundario:'#FFEEDF'
      }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spreed operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid }])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador ={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}      
          />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
