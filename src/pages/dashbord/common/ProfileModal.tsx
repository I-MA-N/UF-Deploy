import profileImg from '../../../assets/images/profile-img.png'
import ChangePassModal from "./ChangePassModal";
import { useState } from "react";
import ChangeDataModal from "./ChangeDataModal";
import ModalItem from "../../common/ModalItem";
import splitArr from '../../../utils/splitArr';
import { useAuthContext } from '../../authentication/AuthProvider';

type ProfileModalProps = {
   setProfileModal: React.Dispatch<React.SetStateAction<boolean>>,
   isManager?: boolean
}

function ProfileModal({ setProfileModal, isManager }: ProfileModalProps) {
   const [passModal, setPassModal] = useState(false);
   const [changeModal, setChangeModal] = useState(false);
   const userData = useAuthContext();
   const orgName = splitArr(userData.orgNames);



   return (
      <>
         <div className="modal">
            <button onClick={() => setProfileModal(false)} className="flex gap-0.5 items-center mb-4.5 bg-primary text-yellow py-2 px-4 rounded-[32px]">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               خروج
            </button>
            <div className="w-[298px] xs:w-80 bg-white text-primary rounded-[32px] p-12">
               <div className="flex gap-3.5 items-center border-b border-primary pb-4">
                  <img src={profileImg} alt="profile-image" />
                  <div>
                     <p className="text-sm mb-1">{userData.name || 'بدون نام!'}</p>
                     <p className="font-Estedad-ExtraLight text-xs">{userData.username}</p>
                  </div>
               </div>
               <div className="flex flex-col gap-3 pt-6 p-4">
                  {
                     isManager &&
                     <ModalItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                           <path d="M5.05 9C5.05 9.43419 5.09838 9.7159 5.18459 9.90985C5.26094 10.0816 5.3799 10.2147 5.60631 10.3279C5.85226 10.4509 6.2243 10.549 6.79425 10.6124C7.35922 10.6751 8.07957 10.7 9 10.7C9.92043 10.7 10.6408 10.6751 11.2057 10.6124C11.7757 10.549 12.1477 10.4509 12.3937 10.3279C12.6201 10.2147 12.7391 10.0816 12.8154 9.90985C12.9016 9.7159 12.95 9.43419 12.95 9C12.95 8.56581 12.9016 8.2841 12.8154 8.09015C12.7391 7.91838 12.6201 7.78531 12.3937 7.67211C12.1477 7.54913 11.7757 7.45097 11.2057 7.38764C10.6408 7.32486 9.92043 7.3 9 7.3C8.07957 7.3 7.35922 7.32486 6.79425 7.38764C6.2243 7.45097 5.85226 7.54913 5.60631 7.67211C5.3799 7.78531 5.26094 7.91838 5.18459 8.09015C5.09838 8.2841 5.05 8.56581 5.05 9Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                           <circle cx="2.8125" cy="2.8125" r="2.2625" transform="matrix(-1 0 0 1 11.8125 0)" stroke="#083C5A" strokeWidth="1.1" />
                           <path d="M12.9375 1.6875C13.95 1.6875 14.625 2.53125 14.625 3.375C14.625 4.21875 13.95 5.0625 12.9375 5.0625" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M5.0625 1.6875C4.05 1.6875 3.375 2.53125 3.375 3.375C3.375 4.21875 4.05 5.0625 5.0625 5.0625" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M14.9625 10.125C16.5375 10.125 17.4375 9.88393 17.4375 8.4375C17.4375 6.99107 16.5375 6.75 14.0625 6.75" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M3.0375 10.125C1.4625 10.125 0.5625 9.88393 0.5625 8.4375C0.5625 6.99107 1.4625 6.75 3.9375 6.75" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                        text="نام سازمان:"
                        elem={<p className="mt-1">{orgName[0] || '\u00A0'}</p>}
                     />
                  }
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="3" cy="3" r="2.45" transform="matrix(-1 0 0 1 15 6)" stroke="#083C5A" strokeWidth="1.1" />
                        <path d="M3.75 7.5H6.75M3.75 10.5H6.75" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="نام و نام خانوادگی:"
                     elem={<p className="mt-1">{userData.name || '\u00A0'}</p>}
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                        <mask id="path-1-inside-1_370_1853" fill="white">
                           <path d="M0 8.25C0 15.0439 1.5885 16.5 9 16.5C16.4115 16.5 18 15.0439 18 8.25C18 1.45613 16.4115 0 9 0C4.1213 0 1.76575 0.630949 0.725543 3C0.185514 4.2299 0 5.92827 0 8.25Z" />
                        </mask>
                        <path d="M16.8299 2.64505C17.0259 2.41302 17.3729 2.38383 17.6049 2.57987C17.837 2.7759 17.8662 3.12292 17.6701 3.35495L16.8299 2.64505ZM9 8.25L9.00074 8.8L9 8.25ZM0.305715 3.35531C0.109483 3.12345 0.138369 2.77641 0.370233 2.58017C0.602097 2.38394 0.949138 2.41283 1.14537 2.64469L0.305715 3.35531ZM17.25 3C17.6701 3.35495 17.67 3.35506 17.6699 3.35518C17.6699 3.35525 17.6698 3.3554 17.6696 3.35554C17.6694 3.35581 17.6691 3.35617 17.6687 3.3566C17.668 3.35748 17.667 3.35866 17.6657 3.36016C17.6632 3.36316 17.6595 3.3674 17.6549 3.37285C17.6455 3.38374 17.632 3.39946 17.6144 3.41969C17.5793 3.46014 17.5279 3.51863 17.4616 3.59258C17.329 3.74045 17.1363 3.95038 16.8935 4.20173C16.4086 4.70374 15.7202 5.37442 14.9077 6.0468C14.0969 6.71786 13.1516 7.39965 12.1527 7.91609C11.158 8.43039 10.0759 8.79856 9.00074 8.8L8.99926 7.7C9.83355 7.69888 10.7374 7.40952 11.6475 6.93896C12.5535 6.47055 13.4321 5.84016 14.2064 5.19937C14.9791 4.55988 15.6372 3.91902 16.1024 3.43746C16.3347 3.19702 16.518 2.99716 16.6427 2.85817C16.705 2.7887 16.7526 2.7345 16.7842 2.69812C16.8 2.67993 16.8118 2.6662 16.8195 2.65725C16.8233 2.65277 16.8261 2.64949 16.8278 2.64744C16.8287 2.64642 16.8293 2.64571 16.8297 2.64531C16.8298 2.64511 16.8299 2.64498 16.83 2.64494C16.83 2.64492 16.83 2.64495 16.83 2.64494C16.8299 2.64498 16.8299 2.64505 17.25 3ZM9.00074 8.8C7.92329 8.80144 6.83835 8.43461 5.84079 7.9208C4.83908 7.40486 3.89094 6.72273 3.07748 6.05102C2.26243 5.378 1.57171 4.70636 1.08506 4.20354C0.841397 3.95179 0.648062 3.74149 0.514986 3.59337C0.448429 3.51928 0.39689 3.46069 0.36161 3.42017C0.343968 3.3999 0.330387 3.38415 0.321021 3.37324C0.316337 3.36778 0.312708 3.36353 0.31015 3.36053C0.308872 3.35903 0.307861 3.35784 0.307121 3.35697C0.306751 3.35653 0.306449 3.35618 0.306215 3.3559C0.306097 3.35576 0.305973 3.35561 0.305914 3.35554C0.305806 3.35542 0.305715 3.35531 0.725543 3C1.14537 2.64469 1.14531 2.64462 1.14527 2.64458C1.14528 2.64459 1.14526 2.64456 1.14528 2.64458C1.14531 2.64462 1.14542 2.64475 1.14559 2.64495C1.14593 2.64535 1.14654 2.64606 1.14741 2.64709C1.14916 2.64914 1.15197 2.65243 1.15582 2.65691C1.16351 2.66588 1.17537 2.67964 1.19124 2.69787C1.22298 2.73432 1.27073 2.78863 1.33326 2.85823C1.45836 2.99747 1.64238 3.19769 1.87548 3.43853C2.34233 3.92089 3.00267 4.5627 3.77788 5.20282C4.55467 5.84425 5.43595 6.47495 6.34448 6.9429C7.25716 7.41299 8.16325 7.70112 8.99926 7.7L9.00074 8.8ZM0.725543 3L-0.281645 2.55776H-0.281644L0.725543 3ZM1.1 8.25C1.1 11.6767 1.53344 13.2588 2.46398 14.1118C2.92893 14.538 3.61222 14.8696 4.68661 15.0885C5.76854 15.3089 7.16993 15.4 9 15.4V17.6C7.12432 17.6 5.54783 17.5091 4.24744 17.2442C2.9395 16.9777 1.83601 16.5206 0.97739 15.7336C-0.739189 14.16 -1.1 11.6172 -1.1 8.25H1.1ZM9 15.4C10.8301 15.4 12.2315 15.3089 13.3134 15.0885C14.3878 14.8696 15.0711 14.538 15.536 14.1118C16.4666 13.2588 16.9 11.6767 16.9 8.25H19.1C19.1 11.6172 18.7392 14.16 17.0226 15.7336C16.164 16.5206 15.0605 16.9777 13.7526 17.2442C12.4522 17.5091 10.8757 17.6 9 17.6V15.4ZM16.9 8.25C16.9 4.82332 16.4666 3.24117 15.536 2.38817C15.0711 1.96197 14.3878 1.63041 13.3134 1.41153C12.2315 1.19112 10.8301 1.1 9 1.1V-1.1C10.8757 -1.1 12.4522 -1.00911 13.7526 -0.744186C15.0605 -0.477732 16.164 -0.0206394 17.0226 0.766427C18.7392 2.33996 19.1 4.8828 19.1 8.25H16.9ZM9 1.1C6.57478 1.1 4.92337 1.26163 3.7789 1.65256C2.71262 2.01677 2.11722 2.56656 1.73273 3.44224L-0.281644 2.55776C0.37407 1.06438 1.47655 0.11418 3.06777 -0.429344C4.58081 -0.946157 6.54652 -1.1 9 -1.1V1.1ZM1.73273 3.44224C1.29156 4.447 1.1 5.94511 1.1 8.25H-1.1C-1.1 5.91142 -0.920529 4.01281 -0.281645 2.55776L1.73273 3.44224Z" fill="#083C5A" mask="url(#path-1-inside-1_370_1853)" />
                     </svg>}
                     text="ایمیل:"
                     elem={<p className="mt-1">{userData.email || '\u00A0'}</p>}
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.75 14.25H11.25" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.25 0.5H12.75C12.75 1.74264 11.7426 2.75 10.5 2.75H7.5C6.25736 2.75 5.25 1.74264 5.25 0.5Z" fill="#083C5A" />
                     </svg>}
                     text="شماره تلفن:"
                     elem={<p className="mt-1">{userData.phone || '\u00A0'}</p>}
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.2445 3.50157L12.7313 3.69922C12.8112 3.90663 13.008 4.04559 13.2302 4.05139L13.2445 3.50157ZM14.9925 10.6537L14.7601 10.1553C14.5634 10.2469 14.4391 10.4456 14.4425 10.6625L14.9925 10.6537ZM14.3145 16.501L14.7091 16.8841H14.7091L14.3145 16.501ZM3.68554 16.501L4.08015 16.1179L3.68554 16.501ZM3.00754 10.6537L3.55747 10.6625C3.56093 10.4456 3.43656 10.2469 3.23994 10.1553L3.00754 10.6537ZM4.75545 3.50157L4.7698 4.05139C4.99198 4.04559 5.18884 3.90663 5.26871 3.69922L4.75545 3.50157ZM13.7578 3.30393C13.053 1.47358 11.1709 0.2 9 0.2V1.3C10.7491 1.3 12.2016 2.32365 12.7313 3.69922L13.7578 3.30393ZM17.8 7.28127C17.8 4.88825 15.7347 3.01635 13.2589 2.95176L13.2302 4.05139C15.2001 4.10278 16.7 5.57093 16.7 7.28127H17.8ZM15.2249 11.1522C16.7324 10.4494 17.8 8.99438 17.8 7.28127H16.7C16.7 8.51253 15.9319 9.6089 14.7601 10.1553L15.2249 11.1522ZM15.55 11.7585C15.55 11.3609 15.5479 10.9902 15.5424 10.645L14.4425 10.6625C14.4479 11 14.45 11.3644 14.45 11.7585H15.55ZM14.7091 16.8841C15.1819 16.3971 15.3712 15.7251 15.4609 14.9255C15.5508 14.1233 15.55 13.0776 15.55 11.7585H14.45C14.45 13.1041 14.4492 14.0766 14.3677 14.8029C14.286 15.5319 14.1326 15.8987 13.9199 16.1179L14.7091 16.8841ZM9 17.8C10.5307 17.8 11.7139 17.8008 12.6028 17.7031C13.486 17.606 14.2068 17.4014 14.7091 16.8841L13.9199 16.1179C13.6949 16.3496 13.3027 16.5195 12.4826 16.6097C11.6683 16.6992 10.5578 16.7 9 16.7V17.8ZM3.29094 16.8841C3.79321 17.4014 4.51403 17.606 5.39718 17.7031C6.28612 17.8008 7.46931 17.8 9 17.8V16.7C7.44216 16.7 6.33174 16.6992 5.51739 16.6097C4.69726 16.5195 4.30511 16.3496 4.08015 16.1179L3.29094 16.8841ZM2.45 11.7585C2.45 13.0776 2.44918 14.1233 2.53912 14.9255C2.62877 15.7251 2.81813 16.3971 3.29094 16.8841L4.08015 16.1179C3.86742 15.8987 3.714 15.5319 3.63227 14.8029C3.55082 14.0766 3.55 13.1041 3.55 11.7585H2.45ZM2.45761 10.645C2.45211 10.9902 2.45 11.3609 2.45 11.7585H3.55C3.55 11.3644 3.5521 11 3.55747 10.6625L2.45761 10.645ZM3.23994 10.1553C2.06807 9.6089 1.3 8.51253 1.3 7.28127H0.2C0.2 8.99438 1.26756 10.4494 2.77514 11.1522L3.23994 10.1553ZM1.3 7.28127C1.3 5.57093 2.79987 4.10278 4.7698 4.05139L4.74111 2.95176C2.26527 3.01635 0.2 4.88825 0.2 7.28127H1.3ZM9 0.2C6.82915 0.2 4.94703 1.47358 4.24219 3.30393L5.26871 3.69922C5.79842 2.32365 7.25091 1.3 9 1.3V0.2Z" fill="#083C5A" />
                        <path d="M14.8847 13.5L3.06787 13.5" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="square" strokeLinejoin="round" />
                     </svg>}
                     text="سن:"
                     elem={<p className="mt-1">{userData.age || '\u00A0'}</p>}
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-4.5">
                        <path d="M16 16.0861C15.0866 16.7642 13.7991 17.5861 12 17.5861C10.2009 17.5861 8.91341 16.7642 8 16.0861" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00129 15.0114C1.96476 14.4752 1.52548 14.0504 0.988034 14.0504C0.420441 14.0504 -0.0354561 14.5258 0.00217362 15.0921C0.427057 21.4868 2.51371 23.5735 8.90838 23.9984C9.47472 24.036 9.9501 23.5801 9.9501 23.0125C9.9501 22.475 9.52533 22.0358 8.98913 21.9992C7.95281 21.9286 7.07422 21.8134 6.32548 21.647C4.96932 21.3456 4.16478 20.9037 3.63082 20.3697C3.09686 19.8357 2.65495 19.0312 2.35355 17.6751C2.18715 16.9263 2.07189 16.0477 2.00129 15.0114ZM21.9133 15.0114C21.9499 14.4752 22.3891 14.0504 22.9266 14.0504C23.4942 14.0504 23.9501 14.5258 23.9125 15.0921C23.4876 21.4868 21.4009 23.5735 15.0062 23.9984C14.4399 24.036 13.9645 23.5801 13.9645 23.0125C13.9645 22.475 14.3893 22.0358 14.9255 21.9992C15.9618 21.9286 16.8404 21.8134 17.5892 21.647C18.9453 21.3456 19.7498 20.9037 20.2838 20.3697C20.8178 19.8357 21.2597 19.0312 21.5611 17.6751C21.7275 16.9263 21.8427 16.0477 21.9133 15.0114ZM24.0005 12.0892C24.0005 12.0739 24.0005 12.0585 24.0005 12.0432C24.0005 12.0279 24.0005 12.0126 24.0005 11.9973V12.0892ZM23.9125 8.9943C23.9501 9.56065 23.4942 10.036 22.9266 10.036C22.3891 10.036 21.9499 9.61125 21.9133 9.07505C21.8427 8.03872 21.7275 7.16013 21.5611 6.41138C21.2597 5.05522 20.8178 4.25068 20.2838 3.71672C19.7498 3.18277 18.9453 2.74085 17.5892 2.43946C16.8404 2.27305 15.9618 2.15779 14.9255 2.08719C14.3893 2.05066 13.9645 1.61138 13.9645 1.07394C13.9645 0.506343 14.4399 0.0504463 15.0062 0.0880757C21.4009 0.512957 23.4876 2.59961 23.9125 8.9943ZM2.00129 9.07505C1.96476 9.61125 1.52548 10.036 0.988034 10.036C0.420441 10.036 -0.0354562 9.56065 0.00217351 8.9943C0.427057 2.59962 2.51371 0.512964 8.90838 0.0880779C9.47472 0.0504479 9.9501 0.506345 9.9501 1.07394C9.9501 1.61138 9.52533 2.05066 8.98913 2.08719C7.95281 2.15779 7.07422 2.27305 6.32548 2.43946C4.96932 2.74085 4.16478 3.18277 3.63082 3.71672C3.09686 4.25068 2.65495 5.05522 2.35355 6.41138C2.18715 7.16013 2.07189 8.03872 2.00129 9.07505ZM11.9573 0L11.9762 2.58535e-06H11.9384L11.9573 0Z" fill="currentColor" />
                        <path d="M12 10.9141V13.9141" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 7.91406V8.91406" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 7.91406V8.91406" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="جنسیت:"
                     elem={<p className="mt-1">{!userData.gender ? 'انتخاب نشده!' : userData.gender === 'male' ? 'مرد' : 'زن'}</p>}
                  />
                  {
                     !isManager &&
                     <ModalItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <path fillRule="evenodd" clipRule="evenodd" d="M4.1 9C4.1 10.0493 4.95066 10.9 6 10.9C7.04934 10.9 7.9 10.0493 7.9 9C7.9 7.95066 7.04934 7.1 6 7.1C4.95066 7.1 4.1 7.95066 4.1 9ZM3 9C3 10.6569 4.34315 12 6 12C7.46977 12 8.69268 10.9431 8.95011 9.54777C8.96654 9.54925 8.98318 9.55 9 9.55H10.7V10.5C10.7 10.8038 10.9462 11.05 11.25 11.05C11.5538 11.05 11.8 10.8038 11.8 10.5V9.55H13.7V11.25C13.7 11.5538 13.9462 11.8 14.25 11.8C14.5538 11.8 14.8 11.5538 14.8 11.25V9C14.8 8.69624 14.5538 8.45 14.25 8.45H11.25H9C8.98318 8.45 8.96654 8.45075 8.95011 8.45223C8.69268 7.05695 7.46977 6 6 6C4.34315 6 3 7.34315 3 9Z" fill="#083C5A" />
                           <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                        text=''
                        elem={
                           <button onClick={() => setPassModal(true)} className="font-Estedad-ExtraLight border-b border-primary pb-px">
                              تغییر رمز عبور!
                           </button>
                        }
                     />
                  }
               </div>
               {
                  !isManager &&
                  <button onClick={() => setChangeModal(true)} className="flex gap-1 justify-center items-center text-sm mt-7 mx-auto">
                     ویرایش اطلاعات
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M0.55 7C0.55 8.42857 0.627264 9.53901 0.820018 10.4063C1.01138 11.2674 1.30919 11.8547 1.72722 12.2728C2.14525 12.6908 2.7326 12.9886 3.59367 13.18C4.46099 13.3727 5.57143 13.45 7 13.45C8.42857 13.45 9.53901 13.3727 10.4063 13.18C11.2674 12.9886 11.8547 12.6908 12.2728 12.2728C12.6908 11.8547 12.9886 11.2674 13.18 10.4063C13.3727 9.53901 13.45 8.42857 13.45 7C13.45 5.57143 13.3727 4.46099 13.18 3.59367C12.9886 2.7326 12.6908 2.14525 12.2728 1.72722C11.8547 1.30919 11.2674 1.01138 10.4063 0.820018C9.53901 0.627264 8.42857 0.55 7 0.55C5.57143 0.55 4.46099 0.627264 3.59367 0.820018C2.7326 1.01138 2.14525 1.30919 1.72722 1.72722C1.30919 2.14525 1.01138 2.7326 0.820018 3.59367C0.627264 4.46099 0.55 5.57143 0.55 7Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.50867 4.77273L7.5364 3.69501C7.77255 3.44737 8.16934 3.43377 8.42266 3.66462L10.3005 5.37595C10.5538 5.60681 10.5678 5.9947 10.3316 6.24233L9.22727 7.40037M6.50867 4.77273L3.6684 7.75113C3.55036 7.87491 3.48991 8.04088 3.50138 8.20973L3.61803 9.9276C3.63996 10.2506 3.91499 10.5012 4.2461 10.5L6.00732 10.4935C6.18043 10.4928 6.34556 10.4222 6.4636 10.2985L9.22727 7.40037M6.50867 4.77273L9.22727 7.40037" stroke="#083C5A" strokeWidth="1.1" strokeLinejoin="round" />
                     </svg>
                  </button>
               }
            </div>
         </div>
         {
            passModal &&
            <ChangePassModal setPassModal={setPassModal} />
         }
         {
            changeModal &&
            <ChangeDataModal setChangeModal={setChangeModal} />
         }
      </>
   )
}

export default ProfileModal