import { FirstIcon, SecondIcon, ThirdIcon, FourthIcon, FifthIcon, SixthIcon, SeventhIcon, EightIcon, NineIcon } from './FeatureSectionIcon';

const features = [
  {
    title: 'Set up your business right away',
    icon: FirstIcon,
  },
  {
    title: 'Earn big while you learn',
    icon: SecondIcon,
  }, {
    title: 'Work from home',
    icon: ThirdIcon,
  },
  {
    title: 'Train up to become even better',
    icon: FourthIcon,
  }, {
    title: 'Sell your works',
    icon: FifthIcon,
  }
  , {
    title: 'Escape the 9 to 5 hassles',
    icon: SixthIcon,
  }, {
    title: 'Collaborate with peers globally',
    icon: SeventhIcon,
  },
  {
    title: 'Grow your business to any size',
    icon: EightIcon,
  }, {
    title: 'Get unlimited support',
    icon: NineIcon,
  }
]

export const FeatureItems = ({ icon, title }) => {
  return <div className='flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white py-8'>
    <div className='flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28'>
      {icon}
    </div>
    <h6 className='mb-8 font-semibold leading-7 text-secondary text-2xl'>
      {title}
    </h6>
    <div className='flex justify-center'>
      <a className='text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4 cursor-pointer'>
        LEARN MORE
      </a>
    </div>
  </div>
}

const Feature = () => {
  return (
    <div className='bg-secondary_sky_lighter'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <h2 className='font-semibold text-secondary text-4xl mb-8 text-center lg:text-left'>
          Our Features
        </h2>
        <div className='grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {
            features.map(feature => {
              return <FeatureItems title={feature.title} icon={feature.icon()} key={feature.title}/>
            })
          }          
          
        </div>
      </div>
    </div>
  );
};

export default Feature