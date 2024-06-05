'use client';
import React, { useState, useEffect, useMemo } from 'react';

export default function BigFive({ setFormValues, setFormIsCompleted }) {

  const bgColors = ["bg-[#8346E7]", "bg-[#D256A2]", "bg-[#ffffff]", "bg-[#F26C6D]", "bg-[#FC893A]"]
  const borderColors = ["border-[#8346E7]", "border-[#D256A2]", "border-[#ffffff]", "border-[#F26C6D]", "border-[#FC893A]"]
  const scaleValues = ["scale-[1.8] md:scale-[2]", "scale-125", "scale-100", "scale-125", "scale-[1.8] md:scale-[2]"]
  // const fields = ['Tends to be quiet.', "Is compassionate, has a soft heart.", "Tends to be disorganized.", "Worries a lot.", "Is fascinated by art, music, or literature.", "Is dominant, acts as a leader.", "Is sometimes rude to others.", "Has difficulty getting started on tasks.", "Tends to feel depressed, blue.", "Has little interest in abstract ideas.", "Is full of energy.", "Assumes the best about people.", "Is reliable, can always be counted on.", "Doing simple and repetitive tasks.", "Is emotionally stable, not easily upset.", "Is original, comes up with new ideas.", "Is outgoing, sociable.", "Can be cold and uncaring.", "Keeps things neat and tidy.", "Is relaxed, handles stress well.", "Has few artistic interests.", "Prefers to have others take charge.", "Is respectful, treats others with respect.", "Is persistent, works until the task is finished.", "Feels secure, comfortable with self.", "Is complex, a deep thinker.", "Is less active than other people.", "Tends to find fault with others.", "Can be somewhat careless.", "Is temperamental, gets emotional easily.", "Has little creativity."]
  const radioValues = ["Disagree strongly", "Disagree a little", "Neutral/No opinion", "Agree a little", "Agree strongly"]

  const fields = useMemo(() => ['Tends to be quiet.', "Is compassionate, has a soft heart.", "Tends to be disorganized.", "Worries a lot.", "Is fascinated by art, music, or literature.", "Is dominant, acts as a leader.", "Is sometimes rude to others.", "Has difficulty getting started on tasks.", "Tends to feel depressed, blue.", "Has little interest in abstract ideas.", "Is full of energy.", "Assumes the best about people.", "Is reliable, can always be counted on.", "Is emotionally stable, not easily upset.", "Is original, comes up with new ideas.", "Is outgoing, sociable.", "Can be cold and uncaring.", "Keeps things neat and tidy.", "Is relaxed, handles stress well.", "Has few artistic interests.", "Prefers to have others take charge.", "Is respectful, treats others with respect.", "Is persistent, works until the task is finished.", "Feels secure, comfortable with self.", "Is complex, a deep thinker.", "Is less active than other people.", "Tends to find fault with others.", "Can be somewhat careless.", "Is temperamental, gets emotional easily.", "Has little creativity."], []);


  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChange = (field, option, index, numericOption) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [field]: option,
    }));

    const formatedKey = "bigfive_" + (index + 1)
    setFormValues((prevValues) => ({
      ...prevValues,
      [formatedKey]: numericOption,
    }));
  };

  useEffect(() => {
    if (Object.keys(selectedOptions).length === fields.length) {
      setFormIsCompleted(true)
    } else {
      setFormIsCompleted(false)
    }
  }, [selectedOptions, setFormIsCompleted, fields])

  return (
    <div className='flex flex-col items-center text-base 2xl:px-32 3xl:px-96'>
      <p className='md:px-20 mb-10 3xl:text-2xl'>Here are a number of characteristics that may or may not apply to you. For example, do you agree that you are someone who likes to spend time with others? Please indicate the extent to which you agree or disagree with that statement.</p>
      <p className='md:px-20 mb-10 3xl:text-2xl'>I am someone who...</p>
      {fields.map((field, i) => {
        return (
          <div key={field} className='flex flex-col mb-10 w-full'>
            <span className='bg-white h-0.5 w-full mb-10 3xl:mt-5' />
            <p className='text-center mb-10 text-lg 3xl:text-2xl 3xl:mb-20 3xl:mt-10'>{field}</p>
            <div className='flex flex-col gap-8 w-full md:gap-2 md:h-32 items-center md:flex-row'>

              {radioValues.map((value, index) => (
                <label
                  key={value}
                  className="flex justify-center md:justify-between relative cursor-pointer w-3/4 h-full md:flex-col"
                >
                  <input
                    onChange={() => handleChange(field, value, i, index + 1)}
                    className='absolute cursor-pointer h-0 w-0 opacity-0'
                    type="radio"
                    checked={selectedOptions[field] === value}
                    value={value}
                    name={`radio_${field}`}
                  />
                  <div className='flex justify-center'>
                    <span
                      className={`${selectedOptions[field] === value ? bgColors[index] : "bg-transparent"} border-[1px] ${borderColors[index]} ${scaleValues[index]} h-6 w-6 rounded-full hover:opacity-50 duration-200`}
                    ></span>
                  </div>
                  {/* {selectedOptions[field] === value && (
                      <span
                        className="h-1 w-1 absolute top-0 left-0  bg-white rounded-full"
                      ></span>
                    )} */}
                  <div className='flex flex-1 justify-center md:items-end'>
                    <p className='flex md:justify-center md:items-center text-center text-sm 3xl:text-lg md:flex-1 md:h-2/3'>{value}</p>
                  </div>
                </label>
              ))}

            </div>
          </div>
        );
      })}
    </div>
  );
}
