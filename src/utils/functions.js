import Papa from 'papaparse';

// export const convertToJS = (file) =>
//   new Promise((resolve, reject) => {
//     Papa.parse(file, {
//       header: true,
//       skipEmptyLines: true,
//       complete: (res) => {
//         resolve(res.data);
//       },
//     });
//   });

export const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

export const convertToJS = (file) =>
  new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (value) => {
        const strArr = value.split(' ');

        return strArr.length > 1
          ? `${strArr[0].toLowerCase()}${capitalize(strArr[1])}`
          : value.toLowerCase();
      },
      complete: (res) => {
        resolve(res.data);
      },
    });
  });

export const formatDate = (dateString) =>
  new Date(`${dateString}`).toLocaleDateString('en-US');

export const formatTime = (timeString) =>
  new Date(`${timeString}`).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

export const camelCaseToTitleCase = (str) =>
  str.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1');
