
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="max-w-md mx-auto text-center mb-10">
            <p className="text-primary mb-4 text-xs">---{subHeading}---</p>
            <h1 className="border-y-2 text-xl uppercase font-semibold py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;