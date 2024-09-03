/* Always give the value of topicHeading in lowerCase */

export const contentAreaData = [
  // overview
  {
    index: 0,
    id: 11,
    topicHeading: "overview",
    initialPara:
      "(Form Snippet) is a {React component} library that provides ready-to-use form components. It is built using {Material-UI} and [Tailwind CSS] and uses {react-hook-form} for validation.",
    bulletPoints: ["(Form Snippet) is a React component library that {provides}","[Tailwind CSS] and uses {react-hook-form} for"],
    subContents: [
      {
        id: 111,
        topicHeading: "Introduction",
        initialPara: "Form Snippet is a React component library that uses Material-UI and react-hook-form.",
        extraPara:
          "It includes a variety of form components like TextField, Select, Checkbox, Radio, and more. The components are easy to code and easy to add validation.",
      },
      {
        id: 112,
        topicHeading: "Advantages of form-snippet",
        bulletPoints: [
          "(All in one:) Form Snippet provides a variety of form components with proper validation, so less code for complex forms.",
          "(Maintain Code quality and maintainability:) Form Snippet provides a consistent look and feel for all form components.",
        ],
      },
    ],
  },
  // installation
  {
    index: 1,
    id: 12,
    topicHeading: "installation",
    initialPara:
      "form-snippet is available as an npm package. You can install it using npm or yarn.",
    subContents: [
      {
        id: 121,
        topicHeading: "Default Installation",
        initialPara: "Run the following command to install form-snippet.",
        codeSnippet: {
          needToRun: false,
          code: `npm i form-snippet`,
        },
      },
      {
        id: 122,
        topicHeading: "Github Installation",
        initialPara: "Run the following command to install form-snippet.",
        codeSnippet: {
          needToRun: false,
          code: `npm install @git21221/form-snippet@1.1.3`,
        },
      },
      {
        id: 123,
        topicHeading: "Advantages of MUI",
        bulletPoints: [
          "All in one: Form Snippet provides a variety of form components with proper validation, so less code for complex forms.",
          "Maintain Code quality and maintainability: Form Snippet provides a consistent look and feel for all form components.",
        ],
      },
    ],
  },
  // usage
  {
    index: 2,
    id: 13,
    topicHeading: "usage",
    initialPara:
      "Learn how to use form-snippet components in your React application.",
    subContents: [
      // basic usage
      {
        id: 131,
        topicHeading: "Basic Usage",
        initialPara: "After installing form-snippet, you can use Input component and Button.",
        extraPara:
          "Dont forget to wrap all the components inside the FormWrapper.",
        codeSnippet: {
          needToRun: false,
          code: `<FormWrapper onSubmit={handleSubmit}>
  <Input name={"fName"} label={"First Name"} />
  <Button children={"Save"} variant={"contained"} />
</FormWrapper>`
        },
        bulletPoints: [
          "**handleSubmit** function has a `data` parameter which contains all the form data.",
        ]
      },
      // {
      //   id: 132,
      //   topicHeading: "Bookie",
      //   initialPara: "Its sunny",
      //   extraPara:
      //     "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda sit",
      //   bulletPoints: [
      //     "rchitecto cupiditate odit quibusdam",
      //     "rchitecto cupiditate odit quibusdam",
      //     "rchitecto cupiditate odit quibusdam",
      //   ],
      //   subContents: [
      //     {
      //       id: 1321,
      //       topicHeading: "Dookie",
      //       initialPara: "This is sunny",
      //     },
      //   ],
      // },
      // {
      //   id: 133,
      //   topicHeading: "Rookie",
      //   initialPara: "This is sunny",
      //   extraPara:
      //     "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda sit",
      //   bulletPoints: [
      //     "rchitecto cupiditate odit quibusdam",
      //     "rchitecto cupiditate odit quibusdam",
      //     "rchitecto cupiditate odit quibusdam",
      //   ],
      // },
    ],
  },
  // support
  {
    index: 3,
    id: 14,
    topicHeading: "support",
    initialPara:
      "We are here to help you 24/7 with any queries or issues you may have, inlcuding installation, usage, and customization.",
    subContents: [
      {
        id: 141,
        topicHeading: "Github",
        initialPara: "we use github issues as a bug, feature, and support tracker. If you have any issues or new feature idea, please raise them on github.",
        // extraPara:
        //   "architecto cupiditate odit quibusdam soluta veritatis assumenda",
        bulletPoints: ["Please start by making sure it hasnt already reported or fixed", "If no duplicates exist then open an issue in the form-snippet repository."],
//         subContents: [
//           {
//             id: 2111,
//             topicHeading: "Animated Basic Button",
//             initialPara: "Samanno ektu animation korechi",
//             extraPara: "Kara mile baniyeche jaanooooooo",
//             bulletPoints: ["Sunny", "Suman", "Saikat"],
//             codeSnippet: {
//               needToRun: false,
//               code: `import React, { useState } from 'react';
// import './App.css'; // Import custom CSS if needed

// const AnimatedButton = () => {
//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'input1') {
//       setInput1(value);
//     } else if (name === 'input2') {
//       setInput2(value);
//     }
//   };

//   // Handle button click
//   const handleClick = () => {
//     console.log('Button clicked');
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg space-y-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Animated Button Example</h1>
      
//       {/* Input Box 1 */}
//       <div>
//         <label htmlFor="input1" className="block text-sm font-medium text-gray-700">Input Box 1</label>
//         <input
//           type="text"
//           id="input1"
//           name="input1"
//           value={input1}
//           onChange={handleInputChange}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//       </div>

//       {/* Input Box 2 */}
//       <div>
//         <label htmlFor="input2" className="block text-sm font-medium text-gray-700">Input Box 2</label>
//         <input
//           type="text"
//           id="input2"
//           name="input2"
//           value={input2}
//           onChange={handleInputChange}
//           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         />
//       </div>

//       {/* Animated Button */}
//       <button
//         onClick={handleClick}
//         className="w-full bg-blue-500 text-white py-2 px-4 border border-transparent rounded-md shadow-md transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//       >
//         Click Me
//       </button>
//     </div>
//   );
// };

// export default AnimatedButton;
// `,
//             },
//           },
//         ],
      },
    ],
    // returnTable: [
    //   {
    //     name: "placeHolder",
    //     type: "string",
    //     default: "Enter text here",
    //     description:
    //       "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda",
    //   },
    //   {
    //     name: "label",
    //     type: "string",
    //     description:
    //       "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda",
    //   },
    // ],
  },
  // Input component
  {
    index: 4,
    id: 21,
    topicHeading: "form wrapper",
    initialPara:
      "It's a wrapper component that wraps all the form components and get all the form data.",
        returnTable: [
        {
            name: "placeHolder",
            type: "()=>void",
            default: "Enter text here",
            description: "consectetur adipisicing elit. [architecto cupiditate] odit quibusdam soluta veritatis assumenda"
        },
        {
            name: "label",
            type: "string",
            description: "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda"
        }
    ]
  }
];

// Each Page Can all these values, you can add data using these values.

// {
//     id: 21,
//     topicHeading: "textfield",
//     initialPara: "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda si",
//     extraPara: "architecto cupiditate odit quibusdam soluta veritatis assumenda",
//     bulletPoints: ["Sunny","Suman","Saikat"],
//     codeSnippet: {
//         needToRun: false,
//         code: `import React from 'react';
// import { useParams } from 'react-router-dom';
// import CurrentPageTopics from './CurrentPageTopics';
// import ContentArea from './ContentArea';
// import { contentAreaData } from '../Raw Data/contentAreaData';

// const ContentAreaPage = () => {
// const {docTopic} = useParams();
// const docToShow = contentAreaData.filter((data)=> data.topicHeading===docTopic);
// return(
//     (!docToShow.length) ? (
//     <div className='w-full min-h-[90vh] flex flex-1'>
//     <ContentArea docToShow={contentAreaData[0]}/>
//     <CurrentPageTopics subContentToShow={contentAreaData[0].subContents}/>
//     </div>)
//     : (
//     <div className='w-full min-h-[90vh] flex flex-1'>
//     <ContentArea docToShow={docToShow[0]}/>
//     <CurrentPageTopics subContentToShow={docToShow[0].subContents}/>
//     </div>)
// );
// }

// export default ContentAreaPage;`
//     },
//     subContents: [
//         {
//             id: 211,
//             topicHeading: "Basic Button",
//             initialPara: "malta ekdm basic daam matro 20/-",
//             extraPara: "architecto cupiditate odit quibusdam soluta veritatis assumenda",
//             bulletPoints: ["Sunny","Suman","Saikat"],
//             codeSnippet: {
//                 needToRun: false,
//                 code: `import React, { useState } from 'react';

// const SignUpForm = () => {
// // State to store form data
// const [formData, setFormData] = useState({
// fullName: '',
// dob: '',
// gender: '',
// email: '',
// password: '',
// confirmPassword: '',
// saveInfo: false,
// });

// // Handle form field changes
// const handleChange = (e) => {
// const { name, value, type, checked } = e.target;
// setFormData((prevData) => ({
//   ...prevData,
//   [name]: type === 'checkbox' ? checked : value,
// }));
// };

// // Handle form submission
// const handleSubmit = (e) => {
// e.preventDefault();
// // Handle form submission logic here
// console.log('Form data submitted:', formData);
// };

// return (
// <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
//   <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
//   <form onSubmit={handleSubmit} className="space-y-4">
//     {/* Full Name */}
//     <div>
//       <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
//       <input
//         type="text"
//         id="fullName"
//         name="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//         required
//         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Date of Birth */}
//     <div>
//       <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
//       <input
//         type="date"
//         id="dob"
//         name="dob"
//         value={formData.dob}
//         onChange={handleChange}
//         required
//         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Gender */}
//     <div>
//       <span className="block text-sm font-medium text-gray-700">Gender</span>
//       <div className="mt-1 space-y-2">
//         <label className="inline-flex items-center">
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={formData.gender === 'male'}
//             onChange={handleChange}
//             className="form-radio text-indigo-600"
//           />
//           <span className="ml-2 text-sm text-gray-700">Male</span>
//         </label>
//         <label className="inline-flex items-center">
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={formData.gender === 'female'}
//             onChange={handleChange}
//             className="form-radio text-indigo-600"
//           />
//           <span className="ml-2 text-sm text-gray-700">Female</span>
//         </label>
//         <label className="inline-flex items-center">
//           <input
//             type="radio"
//             name="gender"
//             value="other"
//             checked={formData.gender === 'other'}
//             onChange={handleChange}
//             className="form-radio text-indigo-600"
//           />
//           <span className="ml-2 text-sm text-gray-700">Other</span>
//         </label>
//       </div>
//     </div>

//     {/* Email */}
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Password */}
//     <div>
//       <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Confirm Password */}
//     <div>
//       <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
//       <input
//         type="password"
//         id="confirmPassword"
//         name="confirmPassword"
//         value={formData.confirmPassword}
//         onChange={handleChange}
//         required
//         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />
//     </div>

//     {/* Save Info Checkbox */}
//     <div className="flex items-center">
//       <input
//         type="checkbox"
//         id="saveInfo"
//         name="saveInfo"
//         checked={formData.saveInfo}
//         onChange={handleChange}
//         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//       />
//       <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">Save my information for future logins</label>
//     </div>

//     {/* Submit Button */}
//     <div>
//       <button
//         type="submit"
//         className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       >
//         Sign Up
//       </button>
//     </div>
//   </form>
// </div>
// );
// };

// export default SignUpForm;
// `
//             },
//             subContents: [
//                 {
//                     id: 2111,
//                     topicHeading: "Animated Basic Button",
//                     initialPara: "Samanno ektu animation korechi",
//                     extraPara: "Kara mile baniyeche jaanooooooo",
//                     bulletPoints: ["Sunny","Suman","Saikat"],
//                     codeSnippet: {
//                         needToRun: false,
//                         code: `import React, { useState } from 'react';
// import './App.css'; // Import custom CSS if needed

// const AnimatedButton = () => {
// const [input1, setInput1] = useState('');
// const [input2, setInput2] = useState('');

// // Handle input changes
// const handleInputChange = (e) => {
// const { name, value } = e.target;
// if (name === 'input1') {
//   setInput1(value);
// } else if (name === 'input2') {
//   setInput2(value);
// }
// };

// // Handle button click
// const handleClick = () => {
// console.log('Button clicked');
// };

// return (
// <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-lg space-y-4">
//   <h1 className="text-2xl font-bold mb-4 text-center">Animated Button Example</h1>

//   {/* Input Box 1 */}
//   <div>
//     <label htmlFor="input1" className="block text-sm font-medium text-gray-700">Input Box 1</label>
//     <input
//       type="text"
//       id="input1"
//       name="input1"
//       value={input1}
//       onChange={handleInputChange}
//       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//     />
//   </div>

//   {/* Input Box 2 */}
//   <div>
//     <label htmlFor="input2" className="block text-sm font-medium text-gray-700">Input Box 2</label>
//     <input
//       type="text"
//       id="input2"
//       name="input2"
//       value={input2}
//       onChange={handleInputChange}
//       className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//     />
//   </div>

//   {/* Animated Button */}
//   <button
//     onClick={handleClick}
//     className="w-full bg-blue-500 text-white py-2 px-4 border border-transparent rounded-md shadow-md transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//   >
//     Click Me
//   </button>
// </div>
// );
// };

// export default AnimatedButton;
// `
//                     }
//                 }
//             ]
//         }
//     ],
//     returnTable: [
//         {
//             name: "placeHolder",
//             type: "string",
//             default: "Enter text here",
//             description: "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda"
//         },
//         {
//             name: "label",
//             type: "string",
//             description: "consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda consectetur adipisicing elit. architecto cupiditate odit quibusdam soluta veritatis assumenda"
//         }
//     ]
// }


