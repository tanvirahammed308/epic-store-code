import React from 'react';

const Footer = () => {
    const newDateToFormat = new Date('2023-11-08');
    const year = newDateToFormat.getFullYear();

    return (
        <div className='border-t border-gray-100 py-10 text-center'>
            <p className='text-sm text-gray-500'>
                 &copy; {year} epic store all right reserved
            </p>
        </div>
    );
};

export default Footer;


// // this code is working



// import React from 'react';
// import DateFormatter from './DataFormatter';

// const Footer = () => {
//   const currentDate = new Date();
//   const customFormat = 'YYYY';

//   return (
//     <div className='border-t border-gray-100 py-10 text-center'>
//       <p className='text-sm text-gray-500'>copyright @
//         <DateFormatter date={currentDate} format={customFormat} />
//       </p>
//     </div>
//   );
// };

// export default Footer;



// ---------------------------------------
// const Footer = () => {
//     const newDateToFormat = new Date('2023-11-08');
//     const year = newDateToFormat.getFullYear();
   
//     return (
//         <div className='border-t border-gray-100 py-10 text-center'>
          
           
//             <p className='text-sm text-gray-500'>copyright @
//             {year}
                
//                 </p>
//         </div>
//     );
// };

// export default Footer;

