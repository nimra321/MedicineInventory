import { useEffect, useState } from "react"
import { Card } from 'flowbite-react';


const Shop = () => {
  const [medicines, setmedicines] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-medicines").then(res => res.json()).then(data => setmedicines(data));
  },[])
  return (
    <div className="mt-28 px-4 lg:px24">
        <h2 className="text-5xl font-bold text-center">All Medicines are here</h2>
        <div className="grid gap-8 my-12 lg:gird-cols-4 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-1">
          {
            medicines.map(medicine => <Card>
              <img src={medicine.imageURL} alt="" className="h-96" />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>
          {medicine.medicineName}
        </p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          {medicine.medicineDescription}
        </p>
      </p>

      <button className="bg-blue-700 font-semibold text-white py-2 rounded">Buy Now</button>
    </Card>)
          }
        </div>
    </div>
  )
}

export default Shop