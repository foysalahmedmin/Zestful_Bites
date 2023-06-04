import useMenu from "../../../Hooks/useMenu";
import Desserts from "../Desserts/Desserts";
import MenuBanner from "../MenuBanner/MenuBanner";
import Pizza from "../Pizza/Pizza";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";
import TodayOffer from "../TodayOffer/TodayOffer";

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <>
            <MenuBanner />
            <TodayOffer items={offered} category= {"offered"} />
            <Salads items={salads} category= {"salad"}/>
            <Desserts items={desserts} category= {"dessert"}/>
            <Pizza items={pizza} category= {"pizza"}/>
            <Soups items={soups} category= {"soup"}/>
        </>
    );
};

export default Menu;