import { redirect } from 'next/navigation';

export default function HomePage() {

  //* se usa para redieccionar a una url por defecto...
  redirect("/dashboard/counter");
  
  // return (
  //   <>
  //     <h1>Home Page 🚀 </h1>
  //   </>
  // );
}
