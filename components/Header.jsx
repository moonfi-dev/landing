import Image from 'next/image'

import styles from './Header.module.css'

export const Header = () => {
    return (
    <>
        <div className="flex h-full md:flex-row flex-col lg:pr-36">
            <div className="flex-1">
                <div className="flex flex-col">
                    <div className="flex-1 text-left pr-10 lg:pt-28 pb-10">
                        <div className={styles.typewriter1}>
                            <p className="font-bold lg:text-6xl text-4xl text-main-color tracking-wider">The Most Exciting</p>
                        </div>
                        <div className={styles.typewriter2}>
                            <p className="font-bold lg:text-6xl text-4xl text-main-color tracking-wider">Savings Account</p>
                        </div>
                        <div className={styles.typewriter3}>
                            <p className="font-bold lg:text-6xl text-4xl text-main-color tracking-wider">On the Market</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-left lg:text-xl md:text-lg text-base p-2">
                            Earn up to <b>30%</b> interest on your savings - by playing Wordle. Join us now to earn the highest yields on the market and have fun doing so.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="grow">
                <Image
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
