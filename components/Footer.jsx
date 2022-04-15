import Link from 'next/link';
import Image from 'next/image'

export const Footer = () => {
  const handleToTop = () => {
    if (window !== undefined) {
      document.getElementById('#navbar').scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <footer className="flex flex-wrap h-32 w-full items-center align-bottom lg:px-20 md:px-10 px-5 bg-secondary-color">
        <button
          type="button" onClick={() => { handleToTop() }}
          className=''
        >
            <span className='text-xl text-main-color font-bold tracking-wide'>
              {process.env.companyName}
            </span>
        </button>

        <div className='flex-row ml-auto w-auto'>
          <Link href={process.env.DISCORD_INVITE}>
            <a className='inline-flex items-center' target="_blank" rel="noopener noreferrer">
              <Image className="" src="/discord.svg" height={30} width={110} />
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};
