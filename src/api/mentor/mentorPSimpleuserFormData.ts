import { useMutation } from "@tanstack/react-query";
import getFormData from "../../utils/getFormData";
import axios from "axios";

type dataType = {
   formName: string,
   setData: boolean,
   data: any
}

function mentorPSimpleuserFormData(username: string) {
   const { mutate, data } = useMutation({
      mutationKey: ['mentorP: form data', username],
      mutationFn: async (data: dataType) => {
         const formData = getFormData(data);
         const req = await axios.post(import.meta.env.VITE_ENDPOINT + `/mentor-form-info/${username}`, formData);
         return req.data
      },
   })

   return { mutate, data }
}

export default mentorPSimpleuserFormData