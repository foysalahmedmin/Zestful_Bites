import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subtitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <div className="container h-full flex items-center justify-center">
                    <div className="bg-black w-full bg-opacity-75 mx-[5%] my-20 p-10 py-20 text-center">
                        <div className='max-w-xl mx-auto'>
                        <h1 className="text-4xl uppercase font-bold tracking-[10px] mb-5">
                            {title}
                        </h1>
                        <p>
                           {subtitle}
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;