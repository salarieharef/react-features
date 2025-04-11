import axios from "axios"
import { useEffect, useState } from "react"
import { getItem } from "../../common/storage.services"


const Pannel1 = () => {
    const [Info, setInfo] = useState(null);


    const getProfile =async ()=>{
        const res = await axios.get('https://classapi.sepehracademy.ir/api/SharePanel/GetProfileInfo',
        {
            headers: { Authorization: `Bearer ${getItem("token") ? getItem("token") : null}` }
        })
        console.log(res.data)
        setInfo(res.data)
    }

    useEffect(() => {
        getProfile()
    }, []);

  return (
    <div className="text-center" >
        <h2 >auth with localstorage and axios</h2>
        <h2 className="my-10">your email : {Info?.email}</h2>
    </div>
  )
}

export default Pannel1