import MenuSections from "../MenuSections/MenuSections";
import img from "../../../assets/menu/pizza-bg.jpg"

const Pizza = ({items, category}) => {
    return (
        <section>
            <MenuSections
                items={items}
                category={category}
                img={img}
                title={"Pizza"}
                subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            />
        </section>
    );
};

export default Pizza;