'use client';
import React, { useState, useEffect } from 'react';

export default function DeepForm({ setFormValues, setFormIsCompleted }) {

  const bgColors = ["bg-[#8346E7]", "bg-[#A24CCC]", "bg-[#D256A2]", "bg-[#ffffff]", "bg-[#F26C6D]", "bg-[#F87F4C]", "bg-[#FC893A]"]
  const borderColors = ["border-[#8346E7]", "border-[#A24CCC]", "border-[#D256A2]", "border-[#ffffff]", "border-[#F26C6D]", "border-[#F87F4C]", "border-[#FC893A]"]
  const scaleValues = ["scale-[1.8] md:scale-[2.5]", "scale-[1.5] md:scale-[2]", "scale-125", "scale-100", "scale-125", "scale-[1.5] md:scale-[2]", "scale-[1.8] md:scale-[2.5]"]
  const radioValues = ["Not at all interested", "Not very interested", "Slightly interested", "Neutral", "Moderately interested", "Very interested", "Extremely interested"]

  const [selectedOptions, setSelectedOptions] = useState({});
  const [randomizedFields, setRandomizedFields] = useState([])

  useEffect(() => {
    const dimensionsObject = {
      discovering: ["Fulfilling sidequests that lead to new information.", "Looking for and completing all the sidequests.", "Discovering new places.", "Exploring or discovering new items.", "Accumulating collectible items"],
      expanding: ["Watching cinematics that explain the backstory.", "Skipping the cinematics.", "Listening to non-player characters.", "Finding out as many details of the story as possible.", "Relying on my understanding of the story."],
      experimenting: ["Trying out new ways of using my weapons or tools.", "Inventing new strategies all the time.", "Discovering new ways to play.", "Experimenting things outside the role of my character.", "Executing new move or combo all the time."],
      performing: ["Using the best move or combo over and over again.", "Following a predefined order of quests.", "Maintaining my strategy no matter what until it works.", "Using the same tool or weapon over and over again.", "Doing simple and repetitive tasks."],
    }

    // create one array with all fields in order
    let temp = []
    Object.keys(dimensionsObject).forEach((key) => {
      for (let i = 0; i < dimensionsObject[key].length; i++) {
        const dimension = dimensionsObject[key]
        const value = dimension[i];
        const formatedKey = key + `_${i + 1}`
        temp.push({ [formatedKey]: value })
      }
    })
    // console.log("temp : ", temp)

    // randomize temp
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    shuffleArray(temp)
    setRandomizedFields(temp)
    // console.log("shuffled :", temp)
  }, [])

  useEffect(() => {
    if (Object.keys(selectedOptions).length === 20) {
      setFormIsCompleted(true)
    }
  }, [selectedOptions, setFormIsCompleted])

  const handleChange = (field, formatedKey, option, numericOption) => {
    // on gere le cas spécial
    if (field === "Skipping the cinematics.") {
      numericOption = 8 - numericOption
    }

    //

    // on met a jour les états
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [field]: option,
    }));
    setFormValues((prevValues) => ({
      ...prevValues,
      [formatedKey]: numericOption,
    }));
  };

  return (
    <div className='flex flex-col items-center 2xl:px-32'>
      <p className='md:px-20 mb-10'>Rate the statements below for how accurately they reflect how you generally feel about video games. Take your time. Do not rate what you think you should feel, or what you wish you felt, or what you no longer feel. Be as honest as possible. If you hesitate, you can think of your favorite video games to answer the question.</p>
      {randomizedFields.map((field, i) => {
        let sentence
        let formatedKey
        for (const [key, value] of Object.entries(field)) {
          sentence = value
          formatedKey = key
        }
        return (
          <div key={sentence} className='flex flex-col mb-10 w-full'>
            <span className='bg-white h-0.5 w-full mb-10 2xl:mt-5' />
            <p className='text-center mb-10 2xl:mb-20 2xl:mt-10 text-lg 2xl:text-2xl'>{sentence}</p>
            <div className='flex flex-col gap-8 w-full md:gap-2 md:h-32 items-center md:flex-row'>

              {/* 
                  AUTRE FACON DE FAIRE les checkbox customisées avec Tailwind

                  <label className="inline-flex items-center cursor-pointer">
                        <input type='checkbox' value="" className='sr-only peer' />
                        <div className="w-8 h-8 bg-transparent border-2 border-blue-600 rounded-full peer peer-checked:bg-blue-600"></div>
                    </label> 
              */}

              {radioValues.map((value, index) => (
                <label
                  key={value}
                  className="flex justify-center md:justify-between relative cursor-pointer w-3/4 h-full md:flex-col"
                >
                  <input
                    onChange={() => handleChange(sentence, formatedKey, value, index + 1)}
                    className='absolute cursor-pointer h-0 w-0 opacity-0'
                    type="radio"
                    checked={selectedOptions[sentence] === value}
                    value={value}
                    name={`radio_${sentence}`}
                  />
                  <div className='flex justify-center'>
                    <span
                      className={`${selectedOptions[sentence] === value ? bgColors[index] : "bg-transparent"} border-[1px] 2xl:border-2 ${borderColors[index]} ${scaleValues[index]} h-6 w-6 rounded-full hover:opacity-50 duration-200`}
                    ></span>
                  </div>
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
