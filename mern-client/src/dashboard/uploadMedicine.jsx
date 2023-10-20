

import { Button, Checkbox, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { useState } from 'react';


const UploadMedicine = () => {

  const medicineCategories = [
    "Nutritional supplements",
    "multivitamin",
    "Pain Relieve",
    "Pain killers",
    "injection",
    "Antiparasitics",
    "Drops",
    "Antibiotics",
    "Suger Free", 
    "Depression",
  ]

  const [selectMedicineCategory, setSelectedMedicineCategory] = useState(medicineCategories[0])

  const handlerChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedMedicineCategory(event.target.value);
  }
  // handle medicine submission
  const handleMedicineSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const medicineName =  form.medicineName.value;
    const medicinePricePKR = form.medicinePricePKR.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const manufacturedBy = form.manufacturedBy.value;
    const drugForm = form.drugForm.value;
    const packSize = form.packSize.value;
    
    const medicineObj = {
      medicineName, medicinePricePKR, imageURL, category, manufacturedBy, drugForm, packSize
    }
    
    console.log(medicineObj);
    // send data to DB

    fetch("http://localhost:5000/upload-medicine", {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(medicineObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Medicine Add Successfully!!!")
    })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Add a Medicine</h2>

      <form onSubmit={handleMedicineSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="medicineName"
                value="Medicine Name"
              />
            </div>
            <TextInput
              id="medicineName"
              placeholder="Medicine Name"
              required
              type="text"
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="medicinePricePKR"
                value="Medicine Price"
              />
            </div>
            <TextInput
              id="medicinePricePKR"
              placeholder="price in PKR"
              required
              type="text"
            />
          </div>
        </div>

        <div className='flex gap-8'>
          {/* FIRST ROW */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="imageURL"
                value="Medicine Image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              placeholder="Medicine Image URL"
              required
              type="text"
            />
          </div>
          {/* Category */}
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='inputState'
                value='Medicine Category'
              />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectMedicineCategory} onChange={handlerChangeSelectedValue}>
              {
                medicineCategories.map((option) => <option key={option} value={option} >{option}</option>)
              }
            </Select>
          </div>
        </div>
        {/* Manufactured by */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="manufacturedBy"
                value="Manufactured by"
              />
            </div>
            <TextInput
              id="manufacturedBy"
              placeholder="Manufactured by"
              required
              type="text"
              name="manufacturedBy"
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="drugForm"
                value="Drug Form"
              />
            </div>
            <TextInput
              id="drugForm"
              placeholder="Drug Form"
              required
              type="text"
              name="drugForm"
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label
                htmlFor="packSize"
                value="Pack Size"
              />
            </div>
            <TextInput
              id="packSize"
              placeholder="Pack Size"
              required
              type="text"
              name="packSize"
            />
          </div>
        </div>
        {/* MEdicine Description */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="medicineDescription"
              value="Medicine Description"
            />
          </div>
          <Textarea
            id="medicineDescription"
            name='medicineDescription'
            placeholder="  Write your medicine description...."
            required
            className='w-full'
            rows={6}
          />
        </div>
        <Button type="submit">
        Add Medicine
      </Button>
      </form>
    </div>
  )
}

export default UploadMedicine