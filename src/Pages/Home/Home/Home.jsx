import HomeSlider from '../HomeSlider/HomeSlider';
import OrderSlider from '../OrderSilder/OrderSlider';
import ShortInfo from '../ShortInfo/ShortInfo';
import HomeMenu from '../HomeMenu/HomeMenu';
import Recommends from '../Recommends/Recommends';
import ShortAbout from '../ShortAbout/ShortAbout';

const Home = () => {
    return (
        <>
            <HomeSlider />
            <OrderSlider />
            <ShortInfo />
            <HomeMenu />
            <Recommends />
            <ShortAbout />
        </>
    );
};

export default Home;