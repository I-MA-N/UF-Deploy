import { useNavigate, useSearchParams } from "react-router-dom";
import simpleuserGFormData2 from "../../../../../api/simpleuser/simpleuserGFormData2";
import simpleuserGFormNames from "../../../../../api/simpleuser/simpleuserGFormNames";
import Container from "../../../../common/Container";
import PrevBtn from "../../../../common/PrevBtn";
import Tests from "./Tests";

function TestsFirstLoad() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   const { data: formData, isPending: formDataPending } = simpleuserGFormData2(searchParams.get('formName') || '');
   console.log('formData in first load: ', formData)
   const { data, isPending } = simpleuserGFormNames();
   const formObj = data?.find(form => form.formName === searchParams.get('formName'));

   if (isPending && formDataPending) return <h1>Loading...</h1>

   if (formData && data) {
      if (formObj && formData.access !== 'false') {
         const testsArr = formObj.formTests.filter(test => test.testAccess.includes('simpleuser'))
         return <Tests testsArr={testsArr} initialFormData={formData} />
      } else {
         return <Container>
            <h1 className="mb-8">اطلاعاتی برای این فرم پیدا نشد!</h1>
            <PrevBtn type="button" onClick={() => navigate('/simpleuser/dashboard/forms')} />
         </Container>
      }
   }
}

export default TestsFirstLoad