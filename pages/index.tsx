import Landing from "../components/Landing"
import Offers from "../components/Offers"
import Review from "../components/Review"

const HomePage=()=>{


return (

  <div>
    <Landing/>
   
  
    <img className="PHOTO"src="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_ML/277814770111-210727-como-vender-productos-de-consumo-masivo-header.jpg" alt="" ></img>
    <Review titulo="Mejores productos"  numero={8} descripcion=" Por la compra de 30 productos, obtiene un cupon el cual tendra u valor cangeable de 10 productos de cualquier tipo.¡APROVECHE!"/>
    <Review titulo="Productos"  numero={9} descripcion="Los martes de rebaja de aceite, frijol, arroz, leche, atun, azucar y mucho mas; venga y surta su despensa, aqui la esperamos con gusto"/>
    <br />
    <br />
    <br />
    <h1 className="titulo">Ofertas del dia</h1>
    <Offers url="https://previews.123rf.com/images/shotsstudio/shotsstudio1502/shotsstudio150200064/36920063-bodeg%C3%B3n-con-productos-de-limpieza-con-diferentes-tonos-de-azul-sobre-fondo-blanco.jpg"/>
    <Offers url="https://previews.123rf.com/images/shotsstudio/shotsstudio1502/shotsstudio150200064/36920063-bodeg%C3%B3n-con-productos-de-limpieza-con-diferentes-tonos-de-azul-sobre-fondo-blanco.jpg"/>
    <Offers url="https://previews.123rf.com/images/shotsstudio/shotsstudio1502/shotsstudio150200064/36920063-bodeg%C3%B3n-con-productos-de-limpieza-con-diferentes-tonos-de-azul-sobre-fondo-blanco.jpg"/>
    <Offers url="https://previews.123rf.com/images/shotsstudio/shotsstudio1502/shotsstudio150200064/36920063-bodeg%C3%B3n-con-productos-de-limpieza-con-diferentes-tonos-de-azul-sobre-fondo-blanco.jpg"/>

  </div>
)
}

export default HomePage