const HomePageHeader = () => {
  return (
    <header
      className='w-full h-96 xl: md:h-[450px] xl:hidden relative'
      id='HomePageHeader'
    >
      <div className='absolute w-full h-full -z-1 bg-gray-950 bg-opacity-80'></div>
      <nav className='p-3 absolute flex w-full text-white  justify-between !z-10'>
        <div className='flex'>
          <div className='w-24 h-10 rounded-md'>
            <img
              className='w-full h-full rounded-md '
              src='data:image/png;base64,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'
              alt=''
            />
          </div>
          <button className='fa mx-10 fa-search'></button>
        </div>
        <button className='fa fa-bars mx-5'></button>
      </nav>
      <div className='absolute mt-20 w-full'>
        <p className='text-justify text-white px-10 md:px-32 text-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          autem cumque asperiores error ipsam, quaerat sint eaque pariatur
          sequi? Dignissimos vero doloribus sit, eius sed minus ipsam quas
          tempora labore.
        </p>
      </div>
      {/* ---------------------------------- */}
      <svg className="absolute -bottom-[1%]" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#ffffff'
          fillOpacity='1'
          d='M0,224L21.8,197.3C43.6,171,87,117,131,133.3C174.5,149,218,235,262,266.7C305.5,299,349,277,393,250.7C436.4,224,480,192,524,154.7C567.3,117,611,75,655,101.3C698.2,128,742,224,785,234.7C829.1,245,873,171,916,128C960,85,1004,75,1047,96C1090.9,117,1135,171,1178,176C1221.8,181,1265,139,1309,106.7C1352.7,75,1396,53,1418,42.7L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z'
        ></path>
      </svg>
    </header>
  );
};

export default HomePageHeader;
