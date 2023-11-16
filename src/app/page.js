





import { stripe } from "@/ulitity/stripe";



export default async function Home() {
  const data = await getData()
  
  console.log(data.data)
  
  return (
   <div >
    <main className="flex-grow bg-[#f7f7f7] min-h-screen">
     <h2>
      {
        data.name
      }
     </h2>

    </main>
   </div>
  )
}




export async function getData() {
  
  const inventory = await stripe.products.list({
    limit: 8,
  });
  return inventory;
  
}


