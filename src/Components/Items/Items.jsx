import SingleItem from "./singleItem";

const Items = ({items}) => {
    console.log(items)
    
    return (
        <div className="grid lg:grid-cols-2 gap-5">
            {
                items.map(item => <SingleItem key={item._id} item={item} />)
            }
        </div>
    );
};

export default Items;