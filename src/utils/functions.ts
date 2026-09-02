// import toast from 'react-hot-toast';

// export const showBottomToast = (message : string) => {
//   toast(message, {
//     duration: 4000,
//     position: 'bottom-center',
//   });
// };

// export const showToast = (message : string) => {
//   toast(message, {
//     duration: 4000,
//     position: 'top-center',
//   });
// };


// export const isOnline = () => {
//   return navigator.onLine;
// };

// export const showProgressDialogFragment = () => {
  
// };

// export const hideProgressDialogFragment = () => {
  
// };

// export const setUserId = (userId : number) => {
//   localStorage.setItem('userId', userId.toString());
// };

// export const getUserId = (): number => {
//   const userId = localStorage.getItem('userId');
//   return parseInt(userId || '0', 10);
// };

// export const setEmail = (email : string) => {
//   localStorage.setItem('email', email);
// };

// export const getEmail = () => {
//   return localStorage.getItem('email') || '';
// };

// export const setPhoneNumber = (phoneNumber : string) => {
//   localStorage.setItem('phoneNumber', phoneNumber);
// };

// export const getPhoneNumber = () => {
//   return localStorage.getItem('phoneNumber') || '';
// };

// export const setUsername = (username : string) => {
//   localStorage.setItem('username', username);
// };

// export const getUsername = () => {
//   return localStorage.getItem('username') || '';
// };

// export const setCountryCode = (countryCode : string) => {
//   localStorage.setItem('countryCode', countryCode);
// };

// export const getCountryCode = () => {
//   return localStorage.getItem('countryCode') || '';
// };

// export const setIsVerified = (isVerified : number) => {
//   localStorage.setItem('isVerified', isVerified.toString());
// };

// export const getIsVerified = (): number => {
//   const isVerified = localStorage.getItem('isVerified');
//   return parseInt(isVerified || '0', 10);
// };

// export const setProfilePhotoUrl = (profilePhotoUrl : string) => {
//   localStorage.setItem('profilePhotoUrl', profilePhotoUrl);
// };

// export const getProfilePhotoUrl = () => {
//   return localStorage.getItem('profilePhotoUrl') || '';
// };

// export function logOutProtocol() {
//   const keys = [
//       'prefsUserId',
//       'prefsEmail',
//       'prefsPhoneNumber',
//       'prefsUsername',
//       'prefsCountryCode',
//       'prefsIsVerified',
//       'prefsProfilePhotoUrl',
//   ];
//   keys.forEach((key) => localStorage.removeItem(key));
// }

// /*export function setAnalyticsEvent(event: string, value: string) {
//   if (process.env.NODE_ENV === 'production') {
//       const analytics = getFirebaseAnalytics();
//       analytics.logEvent(event, { value });
//   }
// }*/

// // Encode Image to Base64
// export function encodeImage(image: File): Promise<string | null> {
//   return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result as string);
//       reader.onerror = reject;
//       reader.readAsDataURL(image);
//   });
// }

// // Resize Image (Using canvas)
// /*export function resizeImage(file: File, newWidth: number, newHeight: number): Promise<Blob> {
//   return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = () => {
//           const canvas = document.createElement('canvas');
//           const scaleFactor = Math.min(newWidth / img.width, newHeight / img.height);
//           canvas.width = img.width * scaleFactor;
//           canvas.height = img.height * scaleFactor;

//           const ctx = canvas.getContext('2d')!;
//           ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//           canvas.toBlob(resolve, 'image/jpeg', 1.0);
//       };
//       img.onerror = reject;
//       img.src = URL.createObjectURL(file);
//   });
// }*/

// export function formatSpaces(input: string): string {
//   return input.replace(/(\n{3,})/g, '\n\n\n').trimEnd();
// }

// export function openExternalUrl(url: string) {
//   window.open(url, '_blank');
// }

// export function openCallApp(phone: string) {
//   window.location.href = `tel:${phone}`;
// }

// export function copyToClipboard(text: string, toastMessage: string) {
//   navigator.clipboard.writeText(text).then(() => {
//       alert(toastMessage);
//   });
// }

// export function isPhoneNumberValid(phoneNumber: string): boolean {
//   return phoneNumber.length > 4 && /^\d+$/.test(phoneNumber);
// }

// export function isEmailValid(email: string): boolean {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return email.length > 10 && emailRegex.test(email);
// }

// export function isUsernameValid(username: string): boolean {
//   return username.length >= 3;
// }

// export function getCreatorSubcategoryCodes(services: { subcategoryCode: string }[]): string {
//   return services.map(service => service.subcategoryCode).join(',');
// }

// export function getFinalPrice(price: number, promotionTypeCode: string): number {
//   const discounts: { [key: string]: number } = {
//       FIRST_ORDER_FREE: 0,
//       FIVE_OFF: 0.05,
//       TEN_OFF: 0.1,
//       TWENTY_OFF: 0.2,
//       FIFTY_OFF: 0.5,
//   };
//   return price * (1 - (discounts[promotionTypeCode] || 0));
// }

// export function formatDecimals(price: number): string {
//   return price.toFixed(2);
// }