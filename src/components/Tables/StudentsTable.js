import { formatDate } from '@/utils/functions';
import React from 'react';
import Table from './Table';
import * as XLSX from 'xlsx';

export default function StudentsTable({ feedbackArr, addStudent, student }) {
  const headersArr = ['id', 'completionTime', 'sentiment'],
    headerTitlesArr = ['ID', 'Completion Time', 'Sentiment'];

  const matchObjects = (obj, source) =>
    Object.keys(source).every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    );

  // Function to read .xlsx file
  const readXLSXFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      
      // Process the data as needed
      // ...
    };
    reader.readAsArrayBuffer(file);
  };

  // Function to handle file input change
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    readXLSXFile(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} accept=".xlsx" />
      <Table headerTitlesArr={headerTitlesArr}>
        {feedbackArr.map((d, i) => (
          <tr
            key={i}
            onClick={() => addStudent(d)}
            className={`border-b text-dark dark:text-light dark:border-gray-700 cursor-pointer ${
              matchObjects(d, student)
                ? 'text-white bg-primary'
                : 'bg-lightComponents dark:bg-darkComponents hover:bg-dark/10 dark:hover:bg-dark/75'
            }`}
          >
            {Object.entries(d).map(([k, v], j) =>
              headersArr.includes(k) ? (
                <td
                  key={`${i}${j}`}
                  className={`px-6 py-4 ${
                    k === 'sentiment' &&
                    `capitalize ${
                      v === 'positive'
                        ? 'text-positive'
                        : v === 'negative'
                        ? 'text-negative'
                        : v === 'neutral'
                        ? 'text-neutral'
                        : 'text-total'
                    }`
                  }`}
                >
                  {k === 'completionTime' ? formatDate(v) : v}
                </td>
              ) : null
            )}
          </tr>
        ))}
      </Table>
    </div>
  );
}

// import { formatDate } from '@/utils/functions';
// import React from 'react';
// import Table from './Table';

// export default function StudentsTable({ feedbackArr, addStudent, student }) {
//   const headersArr = ['id', 'completionTime', 'sentiment'],
//     headerTitlesArr = ['ID', 'Date Submitted', 'Feedback Category'];

//   const matchObjects = (obj, source) =>
//     Object.keys(source).every(
//       (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
//     );

//   return (
//     <Table headerTitlesArr={headerTitlesArr}>
//       {feedbackArr.map((d, i) => (
//         <tr
//           key={i}
//           onClick={() => addStudent(d)}
//           className={`border-b text-dark dark:text-light dark:border-gray-700 cursor-pointer ${
//             matchObjects(d, student)
//               ? 'text-white bg-primary'
//               : 'bg-lightComponents dark:bg-darkComponents hover:bg-dark/10 dark:hover:bg-dark/75'
//           }`}
//         >
//           {Object.entries(d).map(([k, v], j) =>
//             headersArr.includes(k) ? (
//               <td
//                 key={`${i}${j}`}
//                 className={`px-6 py-4 ${
//                   k === 'sentiment' &&
//                   `capitalize ${
//                     v === 'positive'
//                       ? 'text-positive'
//                       : v === 'negative'
//                       ? 'text-negative'
//                       : v === 'neutral'
//                       ? 'text-neutral'
//                       : 'text-total'
//                   }`
//                 }`}
//               >
//                 {k === 'completionTime' ? formatDate(v) : v}
//               </td>
//             ) : null
//           )}
//         </tr>
//       ))}
//     </Table>
//   );
// }
