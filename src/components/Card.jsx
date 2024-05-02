const Card = ({ heading, stats }) => {
  return (
    <div className='w-full bg-white flex justify-center items-center flex-col text-center p-5 uppercase gap-2 max-h-[168px]'>
      <div className='text-lg'>{heading}</div>
      <div className='text-3xl text-[#007c91]'>{stats}</div>
    </div>
  );
};

export default Card;
