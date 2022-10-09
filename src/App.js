// App.js

import './index.css';
import Header from './components/Header';
import Cards  from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <><><div>
      <Header title="Galería de Imágenes con React" />
    </div><div className='gallery'>
        <Cards imgUrl={'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} title='Chevy Rojo' description={'Clásico americano deseado por muchos amantes del mundo motor.'} />
        <Cards imgUrl={'https://images.pexels.com/photos/3972750/pexels-photo-3972750.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'} title='Lexus Negro' description={'Lexus es el siguiente nivel de Toyota, mezclando su fiabilidad con potencia y elegancia.'} />
        <Cards imgUrl={'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} title='Hyundai Santa Fe' description={'Vehículo familiar con excelentes prestaciones y elegancia para garantizar el confort.'} />
        <Cards imgUrl={'https://images.pexels.com/photos/9661475/pexels-photo-9661475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} title='Impreza WRX' description={'Para quienes desean algo más ágil y estimulante, esta es su alternativa.'} />
        <Cards imgUrl={'https://images.pexels.com/photos/8622791/pexels-photo-8622791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} title='G-Wagon' description={'Ideal para disfrutar en ciudad y en caminos más accidentados. Disfrutarás su versatilidad.'} />
        <Cards imgUrl={'https://images.pexels.com/photos/12122691/pexels-photo-12122691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} title='Tesla Rojo' description={'La alternativa eléctrica cargada de potencia y tecnología, pensado para el futuro.'} />
      </div></><div><Footer /></div></>
  );
}

export default App;
