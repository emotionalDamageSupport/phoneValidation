import { useEffect, useState } from 'react'

import './App.css'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import parsePhoneNumber, { isValidPhoneNumber, PhoneNumber } from 'libphonenumber-js'

function App() {
  const [phone, setPhone] = useState('')

  console.log(phone)

  const [validationData, setValidationData] = useState<PhoneNumber | null>(null)

  useEffect(() => {
  const data = parsePhoneNumber(`+${phone}`)
    setValidationData(data ? data : null);
  }, [phone])

  console.log(validationData)

  return (
    <div style={{display: 'flex', flexDirection: 'column', color: 'white', gap: '20px'}}>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        inputClass='input'
      />
      {/* <button onClick={validatePhoneNumber}>Validate</button> */}
      {validationData ? <div>
        <p>Number: {validationData.number}</p>
        <p>Country Code: {validationData.country}</p>
        <p>Region Code: {validationData.countryCallingCode}</p>
        <p>Number format international: {validationData.formatInternational()}</p>
        <p>Number format national: {validationData.formatNational()}</p>
         <p style={{ color: isValidPhoneNumber(validationData.number) ? 'green' : 'red' }}>
            Is Valid Phone: {String(isValidPhoneNumber(validationData.number))}
          </p>
      </div> : null}
    </div>
  )
}

export default App
