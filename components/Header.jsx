import Image from 'next/image'

import styles from './Header.module.css'

export const Header = () => {
    return (
    <>
        <div className="flex md:flex-row flex-col">
            <div className="flex-1 basis-3/4 justify-end items-end">
                <div className="flex flex-col">
                    <div className="basis-3/4 text-left">
                        <div className={styles.typewriter1}>
                            <p className="font-bold lg:text-6xl md:text-4xl sm:text-3xl text-[22px] text-main-color tracking-wider">Earn 8% APY</p>
                        </div>
                        <div className={styles.typewriter2}>
                            <p className="font-bold lg:text-6xl md:text-4xl sm:text-3xl text-[22px] text-main-color tracking-wider">By Playing Wordle</p>
                        </div>
                    </div>
                    <div className="basis-1/4 mt-10">
                        <h2 className="text-left lg:text-xl md:text-lg text-base p-2">
                            Earn up to <b>8%</b> interest on your savings - by playing Wordle.
                            Join us now to earn the highest yields on the market and have fun doing so.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="basis-1/4 items-end justify-end">
                <Image
                    className="m-auto"
                    src="/game-art.svg"
                    alt="game"
                    layout="responsive"
                    width={300}
                    height={300}
                />      
            </div>
        </div>
    </>
    );
};
