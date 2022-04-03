import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image alt='image' src='/banner.jpg' layout='fill' objectFit='cover' />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg text-white'>
                Not sure where to go? Perfect.
            </p>

            <button className='text-cyan-300 border-2 rounded-full border-cyan-500 opacity-70 border-opacity-70 px-10 py-4 shadow-md font-bold my-3 hover:opacity-100 hover:shadow-xl active:scale-90 transition duration-150'>
                I am flexible
            </button>
        </div>
    </div>
  )
}

export default Banner