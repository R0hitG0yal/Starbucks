export function JoinNow() {
  return (
    <>
      <div className="h-[48rem] bg-[#daefe1] flex items-center relative">
        <div className="object-position:left flex flex-col justify-center pl-8">
          <span className="font-mono text-4xl font-semibold pb-5">
            FREE COFFEE <br /> IS A TAP AWAY
          </span>
          <span className="pb-5 font-mono">
            Join now to start earning Rewards.
          </span>
          <button
            style={{ border: "1px solid black", borderRadius: "20px" }}
            className="w-24 h-10 text-white font-mono text-sm bg-green-900"
          >
            Join now
          </button>
          <span className="pt-3">
            Or{" "}
            <span className="underline underline-offset-2">
              join in the app
            </span>{" "}
            for the best experience
          </span>
        </div>
        <div className="absolute inset-y-0 right-0 w-[52rem] ">
          <img src="/C1-Starbucks copy.png" alt="bgimg" />
        </div>
      </div>
    </>
  );
}
