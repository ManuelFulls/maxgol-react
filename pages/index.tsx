import Landing from "../components/Landing"
import Review from "../components/Review"

const HomePage=()=>{


return (

  <div>
    <Landing/>
    <Review titulo="Mejores productos"  numero={8} descripcion=" Por la compra de 30 productos, obtiene un cupon el cual tendra u valor cangeable de 10 productos de cualquier tipo.¡APROVECHE!"/>
    <Review titulo="Productos"  numero={9} descripcion="Los martes de rebaja de aceite, frijol, arroz, leche, atun, azucar y mucho mas; venga y surta su despensa, aqui la esperamos con gusto"/>
    
  </div>
)
}

export default HomePage