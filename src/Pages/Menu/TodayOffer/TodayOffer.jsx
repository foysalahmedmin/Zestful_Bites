import Items from "../../../Components/Items/Items";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const TodayOffer = ({ items, category }) => {
    return (
        <section className="py-10">
            <div className="container">
                <div>
                    <SectionTitle heading={"Todays Offer"} subHeading={"Don't miss"} />
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

export default TodayOffer;