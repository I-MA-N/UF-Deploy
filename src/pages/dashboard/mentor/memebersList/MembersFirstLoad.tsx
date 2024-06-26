import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import splitArr from "../../../../utils/splitArr";
import mentorGSimpleusersData from "../../../../api/mentor/mentorGSimpleusersData";
import PrevBtn from "../../../common/PrevBtn";
import Members from "./Members";
import Container from "../../../common/Container";

function MembersFirstLoad() {
   const userData = useUserDataContext();
   const orgNames = useMemo(() => splitArr(userData.orgNames), []);
   const [orgSelected, setOrgSelected] = useState(orgNames[0]);

   const { data, isError, isPending } = mentorGSimpleusersData(orgSelected);

   const navigate = useNavigate();

   if (isPending) return <h1>Loading...</h1>
   
   if (data && !isError) {
      return <Members orgSelected={orgSelected} setOrgSelected={setOrgSelected} orgNames={orgNames} users={data} />
   }

   return <Container>
      <p className="text-lg text-yellow mb-4">اطلاعات کاربری اشتباه است. دریافت نام فرم ها با خطا مواجه شد!</p>
      <PrevBtn type="button" onClick={() => navigate('/mentor/dashboard')} />
   </Container>
}

export default MembersFirstLoad