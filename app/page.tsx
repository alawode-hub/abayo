import Link from "next/link";



export default function Home() {
  const userNames: Array<string> = ["Felix", "Malik", "David"];

  const user: {
    firstname: string;
    lastname: string;
    middlename?: string;
    age: number;
    isOld: boolean;
    gender: string;
  }= {
    firstname: "Felix",
    lastname: "Adeleke",
    gender: "Male",
    age: 18,
    isOld: false,
  };
  user.middlename = "something";

  const users: {firstname: string; lastname: string; age: number; middlename?: string} [] = [
    { firstname: "Felix", lastname: "Adegboyega", age: 30, middlename: "Ola"},
    { firstname: "Jude", lastname: "Adegboyega", age: 30},
    { firstname: "Segun", lastname: "Adegboyega", age: 30},
     
  ];
 


  return (
    <div></div>
  );
}

