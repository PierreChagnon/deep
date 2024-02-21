'use client';
import React, { useState, useEffect } from 'react';

export default function DeepForm({ setFormValues, setFormIsCompleted }) {

  const bgColors = ["bg-[#8346E7]", "bg-[#A24CCC]", "bg-[#D256A2]", "bg-[#ffffff]", "bg-[#F26C6D]", "bg-[#F87F4C]", "bg-[#FC893A]"]
  const borderColors = ["border-[#8346E7]", "border-[#A24CCC]", "border-[#D256A2]", "border-[#ffffff]", "border-[#F26C6D]", "border-[#F87F4C]", "border-[#FC893A]"]
  const scaleValues = ["scale-[1.8] md:scale-[2.5]", "scale-[1.5] md:scale-[2]", "scale-125", "scale-100", "scale-125", "scale-[1.5] md:scale-[2]", "scale-[1.8] md:scale-[2.5]"]
  const fields = ['Trying out new ways of using my weapons or tools', "Inventing new strategies all the time", "Discovering new ways to play", "Experimenting things outside the role of my character", "Executing new move or combo all the time", "Fulfilling sidequests that lead to new information", "Looking and completing all the sidequests", "Discovering new places", "Exploring or discovering new items", "Accumulating collectible items", "Using the best move or combo over and over again", "Following a predefined order of quests", "Maintaining my strategy no matter what until it works", "Using the same tool or weapon over and over again", "Doing simple and repetitive tasks", "Watching cinematics that explain the backstory", "Skipping the cinematics", "Listening to non-player characters", "Finding out as many details of the story as possible", "Relying on my understanding of the story"]
  const radioValues = ["Not at all interested", "Not very interested", "Slightly interested", "Neutral", "Moderately interested", "Very interested", "extremely interested"]

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleChange = (field, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [field]: option,
    }));
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: option,
    }));
  };

  useEffect(() => {
    if (Object.keys(selectedOptions).length === 20) {
      setFormIsCompleted(true)
    }
  }, [selectedOptions, setFormIsCompleted])


  return (
    <div className='flex flex-col items-center'>
      <p className='px-8 md:px-20 mb-10'>Rate the statements below for how accurately they reflect how you generally feel about video games. Take your time. Do not rate what you think you should feel, or what you wish you felt, or what you no longer feel. Be as honest as possible. If you hesitate, you can think of your favorite video games to answer the question.</p>
      {fields.map((field, i) => {
        return (
          <div key={field} className='flex flex-col mb-10 w-full'>
            <span className='bg-white h-0.5 w-full mb-10' />
            <p className='text-center mb-10 text-lg'>{field}</p>
            <div className='flex flex-col gap-8 w-full md:gap-2 md:h-32 items-center md:flex-row'>

              {radioValues.map((value, index) => (
                <label
                  key={value}
                  className="flex justify-center md:justify-between relative cursor-pointer w-3/4 h-full md:flex-col"
                >
                  <input
                    onChange={() => handleChange(field, value)}
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
                    <p className='flex md:justify-center md:items-center text-center md:flex-1 md:h-2/3'>{value}</p>
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
