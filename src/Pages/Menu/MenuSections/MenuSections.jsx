import Cover from "../../../Components/Cover/Cover";
import Items from "../../../Components/Items/Items";
import { Link } from "react-router-dom";


const MenuSections = ({ title, subtitle, img, items, category }) => {
    return (
        <section className="py-10">
            <div className="mb-10">
                <Cover img={img} title={title} subtitle={subtitle} />
            </div>
            <div className="container">
                <div>
                    <Items items={items} />
                </div>
                <div className="text-center mt-5">
                    <Link to={`/shop/${category}`}>
                        <button className="main-btn uppercase">ORDER YOUR FAVOURITE FOOD</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MenuSections;