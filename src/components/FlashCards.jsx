import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

function FlashCards() {
    const flashCards = [
        {
            id: 1,
            title: 'What is JSX in react?',
            catagory: 'React'
        },
        {
            id: 2,
            title: 'What is a component in react?',
            catagory: 'React'
        },
        {
            id: 3,
            title: 'What is a state in react?',
            catagory: 'React'
        }

    ];
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {flashCards.map((card) => (
          <div key={card.id} className="mx-auto flex max-w-xs flex-col gap-y-4 bg-green-500 rounded-lg p-8">
            <dt className="text-base/7 text-gray-600">{card.catagory}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              {card.title}
            </dd>
          </div>
          ))}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4 bg-green-500 rounded-lg p-8 w-screen">
            <dt className="text-base/7 text-gray-600"><button><CiCirclePlus size={32} /></button></dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default FlashCards
