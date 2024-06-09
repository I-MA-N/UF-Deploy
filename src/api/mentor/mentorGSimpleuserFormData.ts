import { useMutation } from "@tanstack/react-query";
import API from "../axiosInstance";
import getFormData from "../../utils/getFormData";
import { useNavigate } from "react-router-dom";
import { useMentoringContext } from "../../pages/dashbord/mentor/context/MentoringContextProvider";
import { emptyTestsObj } from "../../pages/dashbord/mentor/mentoring/forms/tests/testsData";

type dataType = {
   formName: string,
}

function mentorGSimpleuserFormData(username: string) {
   const navigate = useNavigate();
   const { setMentoringData } = useMentoringContext();

   const { mutate, data, isError } = useMutation({
      mutationKey: ['mentorG: form data', username],
      mutationFn: async (data: dataType) => {
         const formData = getFormData(data);
         const req = await API.post(`/mentor-form-info/${username}`, formData);
         return req.data
      },
      onSuccess: (data: any, variables) => {
         if (data.access === 'false') {
            setMentoringData(prevValue => {
               return {
                  ...prevValue,
                  data: emptyTestsObj,
               }
            })
            throw new Error('Access false or no data available!');
         }
         
         setMentoringData(prevValue => {
            return {
               ...prevValue,
               formName: variables.formName,
               data: data
            }
         })
         navigate(`/mentor/mentoring/forms/tests`)
      }
   })

   return { mutate, data, isError }
}

export default mentorGSimpleuserFormData 