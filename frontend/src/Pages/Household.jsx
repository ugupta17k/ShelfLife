import axios from "axios";
import React from "react";

const Household = () => {
  async function GetHouse() {

    let token = localStorage.getItem("token")

    try {
      let res = await axios.get("http://localhost:3000/api/households/me", {
        headers:{
            token,
        }
      });

      let HouseHoldName = res.data.household.findUserhouse.HouseHoldName;
      let HouseHold = res.data.household.findUserhouse;
      let invitecode = res.data.household.findUserhouse.inviteCode;
      if(!HouseHoldName){
        return console.log("householdname not found"); 
      }
      console.log(HouseHoldName);
      console.log(HouseHold);
      console.log(invitecode);

      let house = document.createElement("div")
      

    } catch (err) {
      console.log(err, "failed in getting all households" );
    }
  }
  GetHouse()

  return (
    <div>
      <div className="main w-full h-screen flex p-10 justify-center items-center gap-10 ">
        <div className="left w-[70%] h-full flex flex-col gap-5 justify-center items-center px-10 py-10 bg-gray-800 rounded-2xl">
          <h1 className="text-2xl">All houses are here</h1>
          <div className="allhouse w-full h-full bg-gray-500 ">
            
          </div>
        </div>
        <div className="right w-[30%] bg-zinc-800 px-30 py-10 rounded-2xl ">
          <button type="submit" className=" cursor-pointer rounded-xl px-3 py-4 border">
            Create households
          </button>
        </div>
      </div>
    </div>
  );
};

export default Household;
