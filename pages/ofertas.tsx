import Offers from "../components/Offers"
import Contact from "../components/Contact"


const Ofertas=()=>{


 return(

   <div>
    <h1 className="product1">Las mejores ofertas durante las 24hrs</h1>
      <h2 className="product1">¡Aprovechalas que se acaban!</h2>

      <div className="items-photo">
      <Offers url="https://i0.wp.com/superfenix.mx/wp-content/uploads/2022/06/7501060500019_1.jpg?fit=800%2C800&ssl=1" description="Aceite 2X$35"/>
      <Offers url="https://www.allservefoodservice.com/wp-content/uploads/2017/10/Spaguetti-Mediano-Barilla-Nacional-12-1000-gr.jpg" description="Spaghetti 4X$20"/>
      <Offers url="https://static.wixstatic.com/media/ccb392_db922d45c37a4e91818edeb11f9da4b5~mv2.png/v1/fill/w_503,h_285,al_c/ccb392_db922d45c37a4e91818edeb11f9da4b5~mv2.png" description="Huevo 2X$110"/>
      <Offers url="https://chedrauimx.vtexassets.com/arquivos/ids/16080437/7509546056111_00.jpg?v=638243891166430000" description="Pasta Dental $10"/>
      <Offers url="https://hips.hearstapps.com/hmg-prod/images/el-mejor-pan-de-molde-de-supermercado-1633513854.jpeg?crop=0.993xw:0.993xh;0.00690xw,0.00690xh&resize=640:*" description="Pàn bimbo 3X$60"/>
      <Offers url="https://supermode.com.mx/cdn/shop/products/7501557203836_1.jpg?v=1650316868" description="Veladora 2X$20"/>
      <Offers url="https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00073108200100L1.jpg" description="Sardina 3X$60"/>
      <Offers url="https://i0.wp.com/superfenix.mx/wp-content/uploads/2022/06/7501060500019_1.jpg?fit=800%2C800&ssl=1" description="Aceite 2X$40"/>
      </div>
      <br />
      <footer className="footer">
      <div className="foter">
      <br />
      <Contact title="TELEFONO" description="9931626910"/>
      <Contact title="EMAIL" description="jesdubfd@gmail.com"/>
      <Contact title="LOCACIÓN" description="Cárdenas, Tabasco"/>
      </div>
      <h1 className="name">JESUSMDDV/JESUS MANUEL</h1>
    </footer>
    </div>
 )   
}

export default Ofertas