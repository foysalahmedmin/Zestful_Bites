import Desserts from "../Desserts/Desserts";
import MenuBanner from "../MenuBanner/MenuBanner";
import Pizza from "../Pizza/Pizza";
import Salads from "../Salads/Salads";
import Soups from "../Soups/Soups";
import TodayOffer from "../TodayOffer/TodayOffer";

const Menu = () => {
    return (
        <>
            <MenuBanner />
            <TodayOffer />
            <Salads />
            <Desserts />
            <Pizza />
            <Soups />
        </>
    );
};

export default Menu;