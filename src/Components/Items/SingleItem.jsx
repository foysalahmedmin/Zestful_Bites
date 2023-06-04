
const SingleItem = ({ item }) => {
    const { _id, name, category, image, price, recipe } = item;
    return (
        <div className="w-full flex gap-5">
            <div className="h-20 w-28 rounded-full rounded-tl-none overflow-hidden">
                <img className="h-full w-full object-cover" src={image} alt="" />
            </div>
            <div className="w-full">
                <div className="w-full flex-1 flex justify-between">
                    <h1 className="uppercase font-bold text-2xl">
                        {name}----------
                    </h1>
                    <p className="text-primary font-bold text-2xl ml-auto">
                        ${price}
                    </p>
                </div>
                <div>
                    <p>
                        {recipe}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;