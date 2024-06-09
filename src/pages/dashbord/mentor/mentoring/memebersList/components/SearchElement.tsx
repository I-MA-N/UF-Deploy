type SearchElementPropsType = {
   setSelectedUsers: React.Dispatch<any>,
   data: any
}

function SearchElement({ setSelectedUsers, data }: SearchElementPropsType) {
   return (
      <li className="flex items-center gap-4 px-3 h-10 text-xs bg-white text-primary">
         <label htmlFor="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
               <path d="M0.75 7.65215C0.75 10.5603 1.27204 12.2033 2.25973 13.1557C3.25387 14.1144 4.90396 14.5543 7.65217 14.5543C10.4004 14.5543 12.0505 14.1144 13.0446 13.1557C14.0323 12.2033 14.5543 10.5603 14.5543 7.65215C14.5543 4.74395 14.0323 3.10096 13.0446 2.14855C12.0505 1.18991 10.4004 0.749973 7.65217 0.749973C4.90396 0.749973 3.25387 1.18991 2.25973 2.14855C1.27204 3.10096 0.75 4.74395 0.75 7.65215Z" stroke="#083C5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M15.3043 15.3043L13.5652 13.5652" stroke="#083C5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </label>

         <input
            type="text"
            id="search"
            name="search"
            className="w-full bg-transparent outline-none border-l border-white focus:border-primary placeholder:text-[10px] transition-colors duration-300"
            placeholder="جستجو بر اساس نام کاربری یا نام و نام خانوادگی"
            onChange={(e) => setSelectedUsers(
               data.filter((user: any) => user.username.includes(e.target.value) || user.name.includes(e.target.value))
            )}
         />
      </li>
   )
}

export default SearchElement