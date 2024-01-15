/* eslint-disable react/no-unescaped-entities */
export function Directions() {
  return (
    <div className="flex flex-col justify-between items-center">
      <div className="basis-1/3 flex flex-col justify-between items-center">
        <span className="font-serif text-3xl mt-32">
          Getting started is easy
        </span>
        <span className="mt-5 font-serif">
          Earn stars and get rewarded in a few easy steps.
        </span>
      </div>
      <div className="basis-2/3 mt-10">
        <div className="flex flex-row ml-32 mr-32 ">
          <div className="basis-1/3 flex flex-col justify-between items-center mr-4">
            <span className="border-solid border-2 border-green-700 w-12 h-12 p-2 rounded-[50%] text-center font-sans text-2xl font-semibold text-green-700 ">
              1
            </span>
            <span className="mt-5 font-serif font-extrabold text-xl ">
              Create an account
            </span>
            <span className="text-center font-serif mt-5 mb-32">
              To get started,{" "}
              <span className="text-green-700 underline">join now</span>. You
              can also
              <span className="text-green-700 underline">
                {" "}
                join in the app{" "}
              </span>
              to get access to the full range of Starbuckss Rewards benefits.
            </span>
          </div>
          <div className="basis-1/3 flex flex-col justify-between items-center ml-4 mr-4">
            <span className="border-solid border-2 border-green-700 w-12 h-12 p-2 rounded-[50%] text-center font-sans text-2xl font-semibold text-green-700 ">
              2
            </span>
            <span className="mt-5 font-serif font-extrabold text-xl ">
              Order and pay how you'd like
            </span>
            <span className="text-center font-serif mt-5 mb-32">
              Use cash, credit/debit card or save some time and pay right
              through the app. You'll collect Stars all ways.
              <span className="text-green-700 underline">Learn how</span>
            </span>
          </div>
          <div className="basis-1/3 flex flex-col justify-between items-center ml-4">
            <span className="border-solid border-2 border-green-700 w-12 h-12 p-2 rounded-[50%] text-center font-sans text-2xl font-semibold text-green-700 ">
              3
            </span>
            <span className="mt-5 font-serif font-extrabold text-xl ">
              Earn Stars. set Rewards
            </span>
            <span className="text-center font-serif mt-5 mb-32">
              As you earn Stars, you can redeem them for Rewards-like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
