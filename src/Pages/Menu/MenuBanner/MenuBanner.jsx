import React from 'react';

const MenuBanner = () => {
    return (
        <section className={`h-[700px] bg-no-repeat bg-cover bg-center bg-[url('/menuBanner.jpg')]`}>
            <div className="container h-full flex items-center justify-center">
                <div className="bg-black w-full bg-opacity-75 mx-[5%] p-10 py-40 text-center">
                    <h1 className="text-5xl uppercase font-black tracking-[10px] mb-5">
                        Our Menu
                    </h1>
                    <p>
                        Would you like to try a dish?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MenuBanner;