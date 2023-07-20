import Landing from "../components/Landing";
import Offers from "../components/Offers";
import Review from "../components/Review";
import IMAGEN1 from "../photo/IMAGEN.jpg";
import Comments from "../components/Comments";
import Goals from "../components/Goals";
import Contact from "../components/Contact";
const HomePage = () => {
  return (
    <div>
      <div className="container">
        <img
          className="PHOTO"
          src="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_ML/277814770111-210727-como-vender-productos-de-consumo-masivo-header.jpg"
          alt=""
        ></img>
        <Review
          titulo="Los mejores precios"
          numero={8}
          descripcion=" Los martes de rebaja de aceite, frijol, arroz, leche, atun, azucar y mucho mas; venga y surta su despensa, aqui la esperamos con gusto."
        />
        <Review
          titulo="Obtenga su cupon gratis"
          numero={9}
          descripcion="Por la compra de 30 productos, obtiene un cupon el cual tendra u valor cangeable de 10 productos de cualquier tipo.¡APROVECHE!"
        />
      </div>
      <h1 className="titulo">Ofertas del dia</h1>
      <div className="items-photo">
        <Offers
          url="https://st.depositphotos.com/1063437/1909/i/950/depositphotos_19096273-stock-photo-shopping-basket-with-detergent-bottles.jpg"
          description="Productos de limpieza"
        />
        <Offers
          url="http://3.bp.blogspot.com/-i-eWmZx2bLw/Wp7Mjv2IDBI/AAAAAAAAHmc/vamEvIP7THocn-vbsMDN7yZQCM1ikDEwgCK4BGAYYCw/s1600/BENEFICIOS%2BDE%2BCONSUMIR%2BACEITE%2BPATRONA%2B%2B3.jpg"
          description="Aceite comestible"
        />
        <Offers
          url="https://www.themarkethink.com/wp-content/uploads/2022/08/shampoo-pert.jpg"
          description="Productos de limpieza personal"
        />
        <Offers
          url="https://2fa9243327.clvaw-cdnwnd.com/5cae5153195db7e844209308a86bfd40/200006136-9281192818/Barilla.webp?ph=2fa9243327"
          description="Pastas de barilla"
        />
        <Offers
          url="https://http2.mlstatic.com/D_NQ_NP_665745-MLM47727121061_102021-W.webp"
          description="Productos de limpieza del hogar"
        />
        <Offers
          url="https://cdn.homedepot.com.mx/productos/142274/142274-d.jpg"
          description="Focos para el hogar"
        />
        <Offers
          url="https://hips.hearstapps.com/hmg-prod/images/el-mejor-pan-de-molde-de-supermercado-1633513854.jpeg?crop=0.993xw:0.993xh;0.00690xw,0.00690xh&resize=640:*"
          description="Pan bimbo"
        />
        <Offers
          url="https://fridg-front.s3.amazonaws.com/media/CACHE/images/products/coca_50/8652f9c7a2009e0219e510c1f89b46ce.jpg"
          description="Coca Cola"
        />
      </div>
      <h1 className="titulo">Que dicen nuestros clientes</h1>
      <div className="comments">
        <Comments
          url="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg"
          title="ALEJANDRA"
          description="¡ME ENCANTA ESTA TIENDA!siempre vengo aqui y surto mi despensa."
        />
      </div>

      <h1 className="titulo1">Ojetivos</h1>
      {/* <Offers url="https://quees.club/wp-content/uploads/calidad.webp" description="CALIDAD: El producto debe estar en las mejores condiciones."/> */}

      <div className="goals">
        <Goals
          url="https://quees.club/wp-content/uploads/calidad.webp"
          title="CALIDAD"
          description="El producto debe estar en las mejores condiciones."
        />
        <Goals
          url="https://cdn-icons-png.flaticon.com/512/5775/5775239.png"
          title="PRECIO"
          description="Debe estar accesible al monedero familiar."
        />
        <Goals
          url="https://acironline.mx/wp-content/uploads/2020/08/Depositphotos_5202302_l-2015.jpg"
          title="ACTITUD"
          description="Siempre tratar al cliente de la mejor manera."
        />
      </div>
      <footer className="footer">
        <div className="foter">
          <br />
          <Contact title="TELEFONO" description="9931626910" />
          <Contact title="EMAIL" description="jesdubfd@gmail.com" />
          <Contact title="LOCACIÓN" description="Cárdenas, Tabasco" />
        </div>
        <h1 className="name">JESUSMDDV/JESUS MANUEL</h1>
      </footer>
    </div>
  );
};

export default HomePage;
