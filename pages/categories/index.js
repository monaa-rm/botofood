import CategoriesPage from "@/components/templates/CategoriesPage";
import React from "react";

const Categories = ({data}) => {
//  console.log("CLINET",process.env.NEXT_PUBLIC_MONA)
  return (
    <div>
      <CategoriesPage data={data}/>
    </div>
  );
};

export default Categories;

export async function getServerSideProps(context) {
  // console.log("SERVER",process.env.NEXT_PUBLIC_MONA)

  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}data`);
  const data = await res.json();
  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );


    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
    
      if (timeDetail && time == "less" && +timeDetail <= 30) {
        return detail;
      } else if (timeDetail && time == "more" && +timeDetail > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });


 return {
    props : {data : filteredData}
 }
}
