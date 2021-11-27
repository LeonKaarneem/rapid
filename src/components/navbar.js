import './navbar.css';
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";


const notifacitonIcon = () => {
    return (
        <svg className="navbarIcon" width="22" height="27" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.7285 19.0071L17.1417 17.4203V11.2699C17.1417 7.49349 15.1243 4.33216 11.6063 3.4957V2.65924C11.6063 1.63826 10.7821 0.814102 9.76112 0.814102C8.74015 0.814102 7.91599 1.63826 7.91599 2.65924V3.4957C4.38563 4.33216 2.38059 7.48119 2.38059 11.2699L2.38059 17.4203L0.793771 19.0071C0.0188144 19.7821 0.560053 21.1106 1.65483 21.1106L17.8551 21.1106C18.9622 21.1106 19.5034 19.7821 18.7285 19.0071ZM14.6815 18.6504H4.84076L4.84076 11.2699C4.84076 8.21924 6.6982 5.73446 9.76112 5.73446C12.824 5.73446 14.6815 8.21924 14.6815 11.2699V18.6504ZM9.76112 24.8008C11.1142 24.8008 12.2213 23.6938 12.2213 22.3407H7.30094C7.30094 23.6938 8.39572 24.8008 9.76112 24.8008Z"
                fill="#1D66FF"/>
        </svg>
    )
}

const notificationIconNotification = () => {
    return (
        <svg className="navbarIcon" width="22" height="27" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.7285 19.0071L17.1417 17.4203V11.2699C17.1417 7.49349 15.1243 4.33216 11.6063 3.4957V2.65924C11.6063 1.63826 10.7821 0.814102 9.76112 0.814102C8.74015 0.814102 7.91599 1.63826 7.91599 2.65924V3.4957C4.38563 4.33216 2.38059 7.48119 2.38059 11.2699L2.38059 17.4203L0.793771 19.0071C0.0188144 19.7821 0.560053 21.1106 1.65483 21.1106L17.8551 21.1106C18.9622 21.1106 19.5034 19.7821 18.7285 19.0071ZM14.6815 18.6504H4.84076L4.84076 11.2699C4.84076 8.21924 6.6982 5.73446 9.76112 5.73446C12.824 5.73446 14.6815 8.21924 14.6815 11.2699V18.6504ZM9.76112 24.8008C11.1142 24.8008 12.2213 23.6938 12.2213 22.3407H7.30094C7.30094 23.6938 8.39572 24.8008 9.76112 24.8008Z"
                fill="#1D66FF"/>
            <ellipse cx="17" cy="5.09258" rx="5" ry="4.57317" fill="#FF0000"/>
        </svg>
    )
}

const lightDarkModeIcon = () => {
    return (
        <svg className="navbarIcon" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6.45837 14.9158C6.45837 14.6024 6.32229 14.3019 6.08005 14.0804C5.83782 13.8588 5.50928 13.7344 5.16671 13.7344H3.87504C3.53247 13.7344 3.20393 13.8588 2.96169 14.0804C2.71946 14.3019 2.58337 14.6024 2.58337 14.9158C2.58337 15.2291 2.71946 15.5296 2.96169 15.7511C3.20393 15.9727 3.53247 16.0972 3.87504 16.0972H5.16671C5.50928 16.0972 5.83782 15.9727 6.08005 15.7511C6.32229 15.5296 6.45837 15.2291 6.45837 14.9158ZM7.28504 20.8228L6.36796 21.6616C6.12738 21.8829 5.99235 22.1823 5.99235 22.4945C5.99235 22.8066 6.12738 23.106 6.36796 23.3273C6.60997 23.5474 6.93734 23.6709 7.27858 23.6709C7.61982 23.6709 7.9472 23.5474 8.18921 23.3273L9.10629 22.4885C9.3179 22.2625 9.42847 21.9718 9.41592 21.6745C9.40336 21.3772 9.2686 21.0951 9.03856 20.8847C8.80852 20.6743 8.50015 20.5511 8.17507 20.5396C7.84999 20.5281 7.53214 20.6292 7.28504 20.8228ZM15.5 6.64594C15.8426 6.64594 16.1712 6.52147 16.4134 6.29991C16.6556 6.07836 16.7917 5.77786 16.7917 5.46454V4.28313C16.7917 3.96981 16.6556 3.66931 16.4134 3.44776C16.1712 3.2262 15.8426 3.10173 15.5 3.10173C15.1575 3.10173 14.8289 3.2262 14.5867 3.44776C14.3445 3.66931 14.2084 3.96981 14.2084 4.28313V5.46454C14.2084 5.77786 14.3445 6.07836 14.5867 6.29991C14.8289 6.52147 15.1575 6.64594 15.5 6.64594ZM22.8109 9.41042C23.1497 9.40911 23.4745 9.28607 23.715 9.06781L24.6321 8.22902C24.7673 8.12311 24.8772 7.99278 24.9547 7.84621C25.0322 7.69964 25.0758 7.53999 25.0827 7.37729C25.0895 7.21459 25.0596 7.05234 24.9946 6.90074C24.9297 6.74914 24.8312 6.61145 24.7053 6.49631C24.5794 6.38118 24.4289 6.29109 24.2631 6.23169C24.0974 6.1723 23.92 6.14488 23.7421 6.15117C23.5642 6.15745 23.3897 6.1973 23.2294 6.26821C23.0692 6.33912 22.9267 6.43957 22.8109 6.56324L21.9584 7.40204C21.7178 7.62339 21.5828 7.92281 21.5828 8.23492C21.5828 8.54703 21.7178 8.84646 21.9584 9.06781C22.1861 9.27499 22.49 9.39713 22.8109 9.41042ZM7.31087 9.06781C7.55146 9.28607 7.87619 9.40911 8.21504 9.41042C8.38503 9.41132 8.55355 9.38152 8.71092 9.32273C8.86829 9.26393 9.01143 9.17731 9.13212 9.06781C9.3727 8.84646 9.50773 8.54703 9.50773 8.23492C9.50773 7.92281 9.3727 7.62339 9.13212 7.40204L8.21504 6.56324C8.09546 6.45231 7.95315 6.36401 7.79626 6.30339C7.63936 6.24276 7.47095 6.21099 7.30063 6.20989C7.13031 6.2088 6.96143 6.23839 6.80362 6.29699C6.6458 6.35559 6.50216 6.44205 6.38087 6.55143C6.25959 6.6608 6.16305 6.79096 6.09677 6.93446C6.03048 7.07796 5.99575 7.232 5.99455 7.38777C5.99213 7.70238 6.12644 8.00499 6.36796 8.22902L7.31087 9.06781ZM27.125 13.7344H25.8334C25.4908 13.7344 25.1623 13.8588 24.92 14.0804C24.6778 14.3019 24.5417 14.6024 24.5417 14.9158C24.5417 15.2291 24.6778 15.5296 24.92 15.7511C25.1623 15.9727 25.4908 16.0972 25.8334 16.0972H27.125C27.4676 16.0972 27.7962 15.9727 28.0384 15.7511C28.2806 15.5296 28.4167 15.2291 28.4167 14.9158C28.4167 14.6024 28.2806 14.3019 28.0384 14.0804C27.7962 13.8588 27.4676 13.7344 27.125 13.7344ZM23.715 20.8228C23.4696 20.6979 23.1864 20.6496 22.9083 20.6852C22.6302 20.7207 22.3724 20.8382 22.1738 21.0198C21.9753 21.2014 21.8468 21.4373 21.8079 21.6916C21.7691 21.946 21.8219 22.205 21.9584 22.4295L22.8755 23.2683C23.1175 23.4883 23.4448 23.6118 23.7861 23.6118C24.1273 23.6118 24.4547 23.4883 24.6967 23.2683C24.9373 23.0469 25.0723 22.7475 25.0723 22.4354C25.0723 22.1233 24.9373 21.8238 24.6967 21.6025L23.715 20.8228ZM15.5 8.41804C14.095 8.41804 12.7215 8.79913 11.5532 9.5131C10.3849 10.2271 9.47434 11.2419 8.93665 12.4292C8.39895 13.6165 8.25826 14.923 8.53238 16.1834C8.80649 17.4438 9.4831 18.6016 10.4766 19.5103C11.4702 20.4191 12.736 21.0379 14.1141 21.2886C15.4922 21.5393 16.9206 21.4107 18.2187 20.9189C19.5168 20.4271 20.6263 19.5942 21.4069 18.5257C22.1876 17.4571 22.6042 16.2009 22.6042 14.9158C22.6008 13.1934 21.8512 11.5425 20.5197 10.3246C19.1881 9.10675 17.3831 8.42116 15.5 8.41804ZM15.5 19.0507C14.6059 19.0507 13.7318 18.8082 12.9884 18.3538C12.245 17.8995 11.6655 17.2537 11.3233 16.4981C10.9812 15.7426 10.8916 14.9112 11.0661 14.1091C11.2405 13.307 11.6711 12.5702 12.3033 11.9919C12.9356 11.4137 13.7411 11.0198 14.6181 10.8603C15.495 10.7008 16.404 10.7826 17.2301 11.0956C18.0562 11.4086 18.7622 11.9385 19.259 12.6185C19.7557 13.2985 20.0209 14.0979 20.0209 14.9158C20.0209 16.0124 19.5446 17.0641 18.6968 17.8396C17.8489 18.615 16.699 19.0507 15.5 19.0507ZM15.5 23.1856C15.1575 23.1856 14.8289 23.31 14.5867 23.5316C14.3445 23.7532 14.2084 24.0536 14.2084 24.367V25.5484C14.2084 25.8617 14.3445 26.1622 14.5867 26.3838C14.8289 26.6053 15.1575 26.7298 15.5 26.7298C15.8426 26.7298 16.1712 26.6053 16.4134 26.3838C16.6556 26.1622 16.7917 25.8617 16.7917 25.5484V24.367C16.7917 24.0536 16.6556 23.7532 16.4134 23.5316C16.1712 23.31 15.8426 23.1856 15.5 23.1856Z"
                fill="#1D66FF"/>
        </svg>
    )
}

const accountIcon = () => {
    return (
        <svg className="navbarIcon" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.0221 0.660004C7.28835 0.660004 0.182129 7.76622 0.182129 16.5C0.182129 21.1801 2.22417 25.3915 5.46213 28.2935V28.3048L5.69181 28.5028C5.73207 28.5377 5.77629 28.5668 5.81721 28.6011C6.47749 29.1579 7.18132 29.6609 7.92195 30.1052C7.97805 30.1389 8.03547 30.1706 8.09157 30.2029C8.45919 30.4168 8.83473 30.6181 9.22017 30.8022L9.23205 30.8075C10.0636 31.2028 10.9282 31.5243 11.8159 31.7684L11.8654 31.7823C12.2885 31.8978 12.7188 31.9948 13.1551 32.0747L13.2772 32.0965C13.7013 32.1714 14.1282 32.229 14.5569 32.2694C14.6064 32.274 14.6559 32.2766 14.7048 32.2806C15.1397 32.3169 15.5779 32.34 16.0221 32.34C16.4663 32.34 16.9046 32.3169 17.3395 32.2806C17.389 32.2766 17.4385 32.274 17.4873 32.2694C17.9196 32.2298 18.346 32.1704 18.7671 32.0965L18.8892 32.0747C19.323 31.9956 19.7533 31.8981 20.1788 31.7823L20.2283 31.7684C21.1161 31.5243 21.9807 31.2028 22.8122 30.8075L22.8241 30.8022C23.2081 30.6175 23.5846 30.4176 23.9527 30.2029C24.0094 30.1699 24.0662 30.1389 24.1223 30.1052C24.4572 29.9044 24.7845 29.6913 25.1037 29.4664C25.1856 29.4089 25.2674 29.3515 25.3486 29.2921C25.6495 29.0717 25.9426 28.8413 26.2271 28.6011C26.268 28.5668 26.3122 28.5377 26.3524 28.5028L26.5821 28.3048V28.2935C29.8201 25.3909 31.8621 21.1801 31.8621 16.5C31.8621 7.76622 24.7559 0.660004 16.0221 0.660004ZM16.0221 16.5C13.1109 16.5 10.7421 14.1313 10.7421 11.22C10.7421 8.30874 13.1109 5.94 16.0221 5.94C18.9334 5.94 21.3021 8.30874 21.3021 11.22C21.3021 14.1313 18.9334 16.5 16.0221 16.5ZM18.0021 17.82C22.005 17.82 25.2621 21.0771 25.2621 25.08V27.6923C25.2344 27.7154 25.2054 27.7365 25.1777 27.7596C24.917 27.9715 24.6497 28.1728 24.3764 28.3655C24.3157 28.4084 24.2563 28.4526 24.1956 28.4942C23.9005 28.6955 23.5976 28.8842 23.2894 29.0631L23.1198 29.1608C21.7105 29.9548 20.1773 30.5055 18.5849 30.7897L18.472 30.8101C18.0968 30.8743 17.7192 30.9238 17.3401 30.9586C17.288 30.9632 17.2352 30.9665 17.1824 30.9705C16.7976 31.0002 16.4109 31.02 16.0221 31.02C15.6334 31.02 15.2466 31.0002 14.8618 30.9692L14.7041 30.9573C14.2869 30.9191 13.8716 30.8628 13.4593 30.7883C12.2726 30.5748 11.1171 30.2143 10.0194 29.7152L9.91317 29.667C9.5181 29.4829 9.1316 29.281 8.75487 29.0618C8.44665 28.8836 8.14371 28.6942 7.84869 28.4929C7.78731 28.4513 7.72791 28.4071 7.66785 28.3642C7.39381 28.1716 7.12656 27.9695 6.86661 27.7583C6.83889 27.7358 6.80985 27.7141 6.78213 27.691V25.08C6.78213 21.0771 10.0392 17.82 14.0421 17.82H18.0021ZM26.5821 26.4502V25.08C26.5821 20.9411 23.6359 17.4775 19.7313 16.6749C20.6215 16.0704 21.3503 15.2572 21.8542 14.3064C22.358 13.3557 22.6217 12.2961 22.6221 11.22C22.6221 7.58076 19.6614 4.62 16.0221 4.62C12.3829 4.62 9.42213 7.58076 9.42213 11.22C9.42259 12.2961 9.68624 13.3557 10.1901 14.3064C10.694 15.2572 11.4228 16.0704 12.3129 16.6749C8.40837 17.4775 5.46213 20.9411 5.46213 25.08V26.4502C3.00957 23.8491 1.50213 20.3485 1.50213 16.5C1.50213 8.49354 8.01567 1.98 16.0221 1.98C24.0286 1.98 30.5421 8.49354 30.5421 16.5C30.5421 20.3485 29.0347 23.8491 26.5821 26.4502Z"
                fill="black"/>
        </svg>
    )
}

const hamburgerIcon = () => {
    return (
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.5" y1="1.5" x2="17.5" y2="1.5" stroke="#1D66FF" stroke-width="3" stroke-linecap="round"/>
            <line x1="1.5" y1="8" x2="17.5" y2="8" stroke="#1D66FF" stroke-width="3" stroke-linecap="round"/>
            <line x1="1.5" y1="14.5" x2="17.5" y2="14.5" stroke="#1D66FF" stroke-width="3" stroke-linecap="round"/>
        </svg>

    )
}


const pathnames = {
    DASHBOARD: '/dashboard',
    TRANSACTIONS: '/admin/dashboard',
    ADMIN: '/admin/dashboard',
}

const NavBar = () => {
    const location = useLocation();
    const [userDashboardActive, setUserDashboardActive] = useState(location.pathname === pathnames.DASHBOARD);
    const [transactionsActive, setTransactionsActive] = useState(location.pathname === pathnames.TRANSACTIONS);
    const [admin, setAdmin] = useState(location.pathname === pathnames.ADMIN);
    const [notificationActive, setNotificationActive] = useState(true);
    const [accordionActive, setAccordionActive] = useState(false);

    return (
        <>
            <div className={admin ? "adminLayout" : "layout"}>
                <div className="layout-content">
                    <div className="title">Rapid</div>
                    <div className="intractable">
                        <div className="intractable-links">
                            {!admin &&
                            <>
                                <div>
                                    <Link to="/dashboard"
                                          className={userDashboardActive ? "linkButton-active" : "linkButton"}
                                          onClick={() => setUserDashboardActive(true)}>Dashboard</Link>
                                </div>
                                <div>
                                    <Link to="/admin/dashboard"
                                          className={transactionsActive ? "linkButton-active" : "linkButton"}
                                          onClick={() => setTransactionsActive(true)}>Transactions</Link>
                                </div>
                            </>
                            }
                            {admin &&
                            <>
                                <div>
                                    <Link to="/dashboard"
                                          className={userDashboardActive ? "linkButton-active" : "linkButton"}
                                          onClick={() => setUserDashboardActive(true)}>Dashboard</Link>
                                </div>
                                <div>
                                    <Link to="/admin/dashboard"
                                          className={transactionsActive ? "linkButton-active" : "linkButton"}
                                          onClick={() => setTransactionsActive(true)}>Blacklist</Link>
                                </div>
                            </>}
                        </div>
                        <div className="intractable-button-container">
                            <div className="intractable-icons">
                                <div className="iconCenter">{lightDarkModeIcon()}</div>
                                <div className="iconCenter"
                                     onClick={() => setNotificationActive(false)}>{notificationActive ? notificationIconNotification() : notifacitonIcon()}</div>
                            </div>
                            <div className="intractable-account">
                                <div className="iconCenter">{accountIcon()}</div>
                                <div className="userName">John Doe</div>
                            </div>
                        </div>
                        <div onClick={() => {
                            accordionActive ? setAccordionActive(false) : setAccordionActive(true)
                        }} className="mobileLayout">
                            {hamburgerIcon()}
                        </div>
                    </div>
                </div>
            </div>
            {accordionActive && <div className="accordion">
                <div>
                    <Link to="/dashboard" className={userDashboardActive ? "linkButton-active" : "linkButton"}
                          onClick={() => setUserDashboardActive(true)}>Dashboard</Link>
                </div>
                <div>
                    <Link to="/admin/dashboard"
                          className={transactionsActive ? "linkButton-active" : "linkButton"}
                          onClick={() => setTransactionsActive(true)}>Transactions</Link>
                </div>
                <div>
                    <Link to="/dashboard" className="linkButton">My Account</Link>
                </div>
            </div>}
        </>
    );
}

export default NavBar;