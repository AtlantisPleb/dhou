export const FullScreenHero = () => {
  return (
    <div
      className='h-auto w-screen flex justify-center items-center'
      style={{
        background:
          'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgb(21,23,28) 100%)',
      }}
    >
      <div className='py-12 flex flex-col justify-center items-center'>
        <img
          className='max-w-lg mb-8'
          src='/img/main-logo.png'
          alt='Digital Humanitarians Organising for Ukraine'
        />
        <div className='rounded-md shadow'>
          <a
            href='https://docs.google.com/document/d/1mVh71Pu82yix8UzUZY1N_pB6gv2byVJhwQERpRHYioI/edit#heading=h.q2b1jbqhh0az'
            className='mt-2 w-64 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sapphire hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
            target='_blank'
            rel='noreferrer'
          >
            Read the intro
          </a>
        </div>
        <a
          href='https://discord.gg/uabXunrK'
          className='mt-6 w-64 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sapphire bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
          target='_blank'
          rel='noreferrer'
        >
          Join the Discord
        </a>
      </div>
    </div>
  )
}
