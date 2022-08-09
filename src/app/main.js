const msmc = require("msmc");
const fetch = require("node-fetch");
//msmc's testing enviroment sometimes runs into this issue that it can't load node fetch

msmc.fastLaunch("nwjs", 
 (update) => {
     //A hook for catching loading bar events and errors, standard with MSMC
     console.log("CallBack!!!!!")
     console.log(update)
 }).then(result => {
     //If the login works
     if (msmc.errorCheck(result)){
         console.log("We failed to log someone in because : "+result.reason)
         return;
     }
     console.log("Player profile and mojang token : "+result);
 }).catch(reason=>{
     //If the login fails
     console.log("We failed to log someone in because : "+reason);
 })