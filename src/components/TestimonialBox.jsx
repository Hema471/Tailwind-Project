const TestimonialBox = ({ name, img, desc, position }) => {
  return (
    <div className="bg-[#21293c] text-white rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
      <div>
        <p className="text-normal">{desc}</p>
      </div>
      <div className="flex items-center gap-[20px] my-[20px]">
        <div>
          <img
            src={`/src/assets/${img}`}
            alt={`${{ name }}-image`}
            className="w-[50px] h-[50px] rounded-full object-contain"
          />
        </div>
        <div>
          <strong>{name}</strong>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
