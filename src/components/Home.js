import three_caild from '../assets/three_caild.png'

const Home = () => {
  return (
    <div className='max-w-screen-3xl mx-auto mt-24' id='home'>

      <div className=' rounded-br-[10px] md:p-9 '>

        
        <div className='flex flex-col md:flex-row-reverse justify-between items-center  '> 

        <img src={three_caild} alt='three_caild' className='lg:h-[550px]' />

        <div className='md:w-3/5 mb-80 ml-20 '>
            <h2 className='font-bold text-4xl text-[#536BA7]'>Central Asia Peope Empower</h2>
            <p className='text-xl mb-4 text-[#ffff] vl'>
              Our mission at Central Asia Family and Children Services is to empower families and children in Central Asia by providing education, support, and resources.
            </p>
          </div>
        </div>
          

      </div>

      <div className='gradientBg rounded-br-[80px] md:p-9 px-4 py-9'>

<div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

    {/* banner img */}
    

    {/* banner content */}
    <div className='md:w-3/5'>
        <h2 className='md:text-7x1 text-4x1 text-white mb-6 leading-relaxed'>Develop your skills without diligence</h2>
        <p className='text-[#EBEBEB] text-2x1 mb-8'>
            A good example of a paragraph contains a topic sentence, details and a conclusion.
            There are many different kinds of animals that live in China.
        </p>
       
    </div>

</div>

</div>

    </div>
  )
}

export default Home