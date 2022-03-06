export const FullScreenHero = () => {
  return (
    <div
      className='h-screen w-screen flex justify-center items-center'
      style={{ backgroundColor: 'rgb(21,23,28)' }}
    >
      <div className='flex flex-col justify-center items-center'>
        <img className='max-w-xl' src='/img/logo-rough.jpg' alt='' />
        <div className='rounded-md shadow'>
          <a
            href='https://docs.google.com/document/d/1mVh71Pu82yix8UzUZY1N_pB6gv2byVJhwQERpRHYioI/edit#heading=h.q2b1jbqhh0az'
            className='mt-8 w-64 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sapphire hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
            target='_blank'
          >
            Read the intro
          </a>
        </div>
      </div>
    </div>
  )
}
