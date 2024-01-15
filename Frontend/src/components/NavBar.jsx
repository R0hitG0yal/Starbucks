import { IoLocationSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <div className="pl-12 pr-12 mt-5 mb-5 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img
              className="cursor-pointer"
              src="/images/Starbucks.svg.webp"
              alt="logo"
              width={40}
              height={40}
            />
          </div>
          <div>
            <span className="ml-8  font-mono">Menu</span>
            <span className="ml-8 font-semibold font-mono cursor-pointer underline underline-offset-8 decoration-[#00754a] decoration-4 ">
              Rewards
            </span>
            <span className="ml-8 font-mono">Gift Cards</span>
          </div>
          <div className="flex flex-wrap justify-between items-center absolute right-12">
            <div className="flex justify-center items-center ml-8 font-mono text-xs">
              <IoLocationSharp />
              <span>Find a Store</span>
            </div>
            <button
              className="w-20 h-7 ml-8 font-mono text-sm"
              style={{ border: "1px solid black", borderRadius: "20px" }}
            >
              Sign in
            </button>
            <button
              style={{ border: "1px solid black", borderRadius: "20px" }}
              className="w-24 h-7 bg-black text-white ml-4 font-mono text-sm"
            >
              Join now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
// export function NavBar() {
//   return (
//     <div className="navbar">
//       <ul>
//         <img src="../images/Starbucks.svg.webp" />
//         <li>
//           <a href="#">Menu</a>
//         </li>
//         <li>
//           <a href="#">Rewards</a>
//         </li>
//         <li>
//           <a href="#">Gift Cards</a>
//         </li>
//         <button className="right" id="joinNow">
//           Join now
//         </button>
//         <button className="right" id="signIn">
//           Sign in
//         </button>
//         <div className="storeLocator">
//           <IoLocationSharp />
//           <button style={{ fontSize: "15px", marginLeft: "7px" , border:"none"}}>
//             Find a Store
//           </button>
//         </div>
//       </ul>
//     </div>
//   );
// }
