import { useLoaderData } from "react-router-dom"


const SingleMedicine = () => {

    const {_id, medicineName, imageURL} = useLoaderData();
  return (
    <div className="mt-28 px-4 lg:px-24">
        <img src={imageURL} alt="" className="h-96" />
            <h2>{medicineName}</h2>
    </div>
  )
}

export default SingleMedicine