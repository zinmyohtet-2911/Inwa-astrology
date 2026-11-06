import { PLANETS } from "./planets";
const astrologyTable = {
    "0_sunday":"puti",
    "0_monday":"thite",
    "0_tuesday":"mayana",
    "0_wednesday":"adipadi",
    "0_thursday" :"yarzar",
    "0_friday" : "atun",
    "0_saturday":"binga",

    "1_sunday":"binga",
    "1_monday":"puti",
    "1_tuesday":"thite",
    "1_wednesday":"mayana",
    "1_thursday" :"adipadi",
    "1_friday" : "yarzar",
    "1_saturday":"atun",

    "2_sunday":"atun",
    "2_monday":"binga",
    "2_tuesday":"puti",
    "2_wednesday":"thite",
    "2_thursday" :"mayana",
    "2_friday" : "adipadi",
    "2_saturday":"yarzar",

    "3_sunday":"yarzar",
    "3_monday":"atun",
    "3_tuesday":"binga",
    "3_wednesday":"puti",
    "3_thursday" :"thite",
    "3_friday" : "mayana",
    "3_saturday":"adipadi",

    "4_sunday":"adipadi",
    "4_monday":"yarzar",
    "4_tuesday":"atun",
    "4_wednesday":"binga",
    "4_thursday" :"puti",
    "4_friday" : "thite",
    "4_saturday":"mayana",

    "5_sunday":"mayana",
    "5_monday":"adipadi",
    "5_tuesday":"yarzar",
    "5_wednesday":"atun",
    "5_thursday" :"binga",
    "5_friday" : "puti",
    "5_saturday":"thite",

    "6_sunday":"thite",
    "6_monday":"mayana",
    "6_tuesday":"adipadi",
    "6_wednesday":"yarzar",
    "6_thursday" :"atun",
    "6_friday" : "binga",
    "6_saturday":"puti",
}
export function calculateAstrology(year,timing,day){
    let burmeseYear = parseInt(year,10);
    if(isNaN(burmeseYear)){
        return null;
    }

    if(timing==="before"){
      burmeseYear = burmeseYear - 639;
    }else if(timing === "after"){
       burmeseYear = burmeseYear - 640;
    }

    const remainder = burmeseYear % 7;
    const key = `${remainder}_${day}`;
    const planet = astrologyTable[key];
    const prediction = PLANETS[planet];

   return {planet, prediction};
}

