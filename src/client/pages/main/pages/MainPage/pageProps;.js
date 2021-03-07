import bannerEnticingBg from '../../../../../assets/images/banners/bg_banner1.png';
import bannerAdvantageBg from '../../../../../assets/images/banners/bg_banner2.png';
import { v4 as uuidv4 } from 'uuid';

export const pageProps = {
    sectionBannerEnticing: {
      bg: bannerEnticingBg,
      title: 'Why team better then solo play?',
      text: 'Create your own team or join to your friends team',
    },
    sectionBannerAdvantage: {
      bg: bannerAdvantageBg,
      title: 'Join useTeam Right now',
      text: 'More than 1000 tournaments every month. Check your skills!',
    },
  };
  
export const InfoListData = [
    {
      id: uuidv4(),
      name: 'PAY LESS FOR INVITE',
      description: 'Team save 20% on each tournament invite',
    },
    {
      id: uuidv4(),
      name: 'GET MORE PRIZE',
      description: 'Team owner get 30% instead 20% when play solo',
    },
    {
      id: uuidv4(),
      name: 'FIND NEW FRIENDS',
      description: 'Every victory is a team work',
    },
  ];
  
// //   export const GetTour = (status, numElem) =>
// //     TournamentsData.filter((el, index) =>
// //       numElem ? index <= numElem && el.status === status : el.status === status,
// //     );
//     export const GetTour = (status, numElem) =>
//     TournamentsData
  

// export const TournamentsData = [
//   {
//     name: 'useTeam',
//     url_for_banner:
//       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606327391/useTeam/tournament1_r2lflx.png',
//       url_for_card:
//       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606327391/useTeam/tournament1_r2lflx.png',
//     description: 'Its your way to become Dota 2 pro-player',
//     status: 'announce',
//     mode: '5x5',
//     prizePool: {
//         currencyValue: 'money',
//         amount: '3000',
//     },
//     championReward: {
//         currencyValue: 'money',
//         amount: '2000',
//     },
//     slots: {
//         total: '32',
//         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
//     },
//     entry: '20',
//     server: 'eu',
//     startTime: '2021-03-15T12:00:00.417+02:00',
//     terms: [
//         {
//             article: 'Rule #1',
//             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
//         },
//         {
//             article: 'Rule #2',
//             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
//         },
//     ],
//     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
//     partners:
//         {
//             title: '1',
//             sub: ['2', '3', '4']
//         }
//     ,
//     stages: [
//         {
//             step: '1/16',
//             reward: {
//                 currencyValue: 'energy',
//                 amount: '20',
//             },
//             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
//             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
//             matches: [
//                 {
//                     id: '1',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '2', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '2',
//                     teams: [
//                         { imgSrc: '3', score: '1' },
//                         { imgSrc: '4', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '3',
//                     teams: [
//                         { imgSrc: '5', score: '1' },
//                         { imgSrc: '6', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '4',
//                     teams: [
//                         { imgSrc: '7', score: '1' },
//                         { imgSrc: '8', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '5',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '10', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '6',
//                     teams: [
//                         { imgSrc: '11', score: '1' },
//                         { imgSrc: '12', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '7',
//                     teams: [
//                         { imgSrc: '13', score: '1' },
//                         { imgSrc: '14', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '8',
//                     teams: [
//                         { imgSrc: '15', score: '1' },
//                         { imgSrc: '16', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '9',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '18', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '10',
//                     teams: [
//                         { imgSrc: '19', score: '1' },
//                         { imgSrc: '20', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '11',
//                     teams: [
//                         { imgSrc: '21', score: '1' },
//                         { imgSrc: '22', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '12',
//                     teams: [
//                         { imgSrc: '23', score: '1' },
//                         { imgSrc: '24', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '13',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '26', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '14',
//                     teams: [
//                         { imgSrc: '27', score: '1' },
//                         { imgSrc: '28', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '15',
//                     teams: [
//                         { imgSrc: '29', score: '1' },
//                         { imgSrc: '30', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '16',
//                     teams: [
//                         { imgSrc: '31', score: '1' },
//                         { imgSrc: '32', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/8',
//             reward: {
//                 currencyValue: 'energy',
//                 amount: '100',
//             },
//             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
//             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
//             matches: [
//                 {
//                     id: '17',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '3', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '18',
//                     teams: [
//                         { imgSrc: '5', score: '1' },
//                         { imgSrc: '7', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '19',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '11', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '20',
//                     teams: [
//                         { imgSrc: '13', score: '1' },
//                         { imgSrc: '15', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '21',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '19', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '22',
//                     teams: [
//                         { imgSrc: '21', score: '1' },
//                         { imgSrc: '23', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '23',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '27', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '24',
//                     teams: [
//                         { imgSrc: '29', score: '1' },
//                         { imgSrc: '31', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/4',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '50',
//             },
//             winners: ['1', '9', '17', '25'],
//             losers: ['5', '13', '21', '29'],
//             matches: [
//                 {
//                     id: '25',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '5', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '26',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '13', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '27',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '21', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '28',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '29', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/2',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '200',
//             },
//             winners: ['1', '17'],
//             losers: ['9', '25'],
//             matches: [
//                 {
//                     id: '29',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '9', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '30',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '25', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: 'FINAL',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '750',
//             },
//             winners: ['1'],
//             losers: ['17'],
//             matches: [
//                 {
//                     id: '31',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '17', score: '0' },
//                     ],
//                 },
//             ],
//         },
//     ]
//   },
// //   {
// //     name: 'Name Tour2',
// //     id: uuidv4(),
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606327396/useTeam/tournament2_rntabh.png',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606327396/useTeam/tournament2_rntabh.png',
// //       description: 'Its your way to become Dota 2 pro-player',
// //       status: 'current',
// //       mode: '5x5',
// //       prizePool: {
// //           currencyValue: 'money',
// //           amount: '3000',
// //       },
// //       championReward: {
// //           currencyValue: 'money',
// //           amount: '2000',
// //       },
// //       slots: {
// //           total: '32',
// //           engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //       },
// //       entry: '20',
// //       server: 'eu',
// //       startTime: '2021-03-15T12:00:00.417+02:00',
// //       terms: [
// //           {
// //               article: 'Rule #1',
// //               description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //           },
// //           {
// //               article: 'Rule #2',
// //               description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //           },
// //       ],
// //       streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //       partners:
// //           {
// //               title: '1',
// //               sub: ['2', '3', '4']
// //           }
// //       ,
// //       stages: [
// //           {
// //               step: '1/16',
// //               reward: {
// //                   currencyValue: 'energy',
// //                   amount: '20',
// //               },
// //               winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //               losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //               matches: [
// //                   {
// //                       id: '1',
// //                       teams: [
// //                           { imgSrc: '1', score: '1' },
// //                           { imgSrc: '2', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '2',
// //                       teams: [
// //                           { imgSrc: '3', score: '1' },
// //                           { imgSrc: '4', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '3',
// //                       teams: [
// //                           { imgSrc: '5', score: '1' },
// //                           { imgSrc: '6', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '4',
// //                       teams: [
// //                           { imgSrc: '7', score: '1' },
// //                           { imgSrc: '8', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '5',
// //                       teams: [
// //                           { imgSrc: '9', score: '1' },
// //                           { imgSrc: '10', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '6',
// //                       teams: [
// //                           { imgSrc: '11', score: '1' },
// //                           { imgSrc: '12', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '7',
// //                       teams: [
// //                           { imgSrc: '13', score: '1' },
// //                           { imgSrc: '14', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '8',
// //                       teams: [
// //                           { imgSrc: '15', score: '1' },
// //                           { imgSrc: '16', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '9',
// //                       teams: [
// //                           { imgSrc: '17', score: '1' },
// //                           { imgSrc: '18', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '10',
// //                       teams: [
// //                           { imgSrc: '19', score: '1' },
// //                           { imgSrc: '20', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '11',
// //                       teams: [
// //                           { imgSrc: '21', score: '1' },
// //                           { imgSrc: '22', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '12',
// //                       teams: [
// //                           { imgSrc: '23', score: '1' },
// //                           { imgSrc: '24', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '13',
// //                       teams: [
// //                           { imgSrc: '25', score: '1' },
// //                           { imgSrc: '26', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '14',
// //                       teams: [
// //                           { imgSrc: '27', score: '1' },
// //                           { imgSrc: '28', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '15',
// //                       teams: [
// //                           { imgSrc: '29', score: '1' },
// //                           { imgSrc: '30', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '16',
// //                       teams: [
// //                           { imgSrc: '31', score: '1' },
// //                           { imgSrc: '32', score: '0' },
// //                       ],
// //                   },
// //               ],
// //           },
// //           {
// //               step: '1/8',
// //               reward: {
// //                   currencyValue: 'energy',
// //                   amount: '100',
// //               },
// //               winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //               losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //               matches: [
// //                   {
// //                       id: '17',
// //                       teams: [
// //                           { imgSrc: '1', score: '1' },
// //                           { imgSrc: '3', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '18',
// //                       teams: [
// //                           { imgSrc: '5', score: '1' },
// //                           { imgSrc: '7', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '19',
// //                       teams: [
// //                           { imgSrc: '9', score: '1' },
// //                           { imgSrc: '11', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '20',
// //                       teams: [
// //                           { imgSrc: '13', score: '1' },
// //                           { imgSrc: '15', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '21',
// //                       teams: [
// //                           { imgSrc: '17', score: '1' },
// //                           { imgSrc: '19', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '22',
// //                       teams: [
// //                           { imgSrc: '21', score: '1' },
// //                           { imgSrc: '23', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '23',
// //                       teams: [
// //                           { imgSrc: '25', score: '1' },
// //                           { imgSrc: '27', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '24',
// //                       teams: [
// //                           { imgSrc: '29', score: '1' },
// //                           { imgSrc: '31', score: '0' },
// //                       ],
// //                   },
// //               ],
// //           },
// //           {
// //               step: '1/4',
// //               reward: {
// //                   currencyValue: 'money',
// //                   amount: '50',
// //               },
// //               winners: ['1', '9', '17', '25'],
// //               losers: ['5', '13', '21', '29'],
// //               matches: [
// //                   {
// //                       id: '25',
// //                       teams: [
// //                           { imgSrc: '1', score: '1' },
// //                           { imgSrc: '5', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '26',
// //                       teams: [
// //                           { imgSrc: '9', score: '1' },
// //                           { imgSrc: '13', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '27',
// //                       teams: [
// //                           { imgSrc: '17', score: '1' },
// //                           { imgSrc: '21', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '28',
// //                       teams: [
// //                           { imgSrc: '25', score: '1' },
// //                           { imgSrc: '29', score: '0' },
// //                       ],
// //                   },
// //               ],
// //           },
// //           {
// //               step: '1/2',
// //               reward: {
// //                   currencyValue: 'money',
// //                   amount: '200',
// //               },
// //               winners: ['1', '17'],
// //               losers: ['9', '25'],
// //               matches: [
// //                   {
// //                       id: '29',
// //                       teams: [
// //                           { imgSrc: '1', score: '1' },
// //                           { imgSrc: '9', score: '0' },
// //                       ],
// //                   },
// //                   {
// //                       id: '30',
// //                       teams: [
// //                           { imgSrc: '17', score: '1' },
// //                           { imgSrc: '25', score: '0' },
// //                       ],
// //                   },
// //               ],
// //           },
// //           {
// //               step: 'FINAL',
// //               reward: {
// //                   currencyValue: 'money',
// //                   amount: '750',
// //               },
// //               winners: ['1'],
// //               losers: ['17'],
// //               matches: [
// //                   {
// //                       id: '31',
// //                       teams: [
// //                           { imgSrc: '1', score: '1' },
// //                           { imgSrc: '17', score: '0' },
// //                       ],
// //                   },
// //               ],
// //           },
// //       ]
// //   },
// //   {
// //     name: 'Name Tour3',
// //     id: uuidv4(),
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398096/useTeam/banner-dota2_z64fyi.png',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398096/useTeam/banner-dota2_z64fyi.png',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     status: 'current',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     name: 'Name Tour4',
// //     id: uuidv4(),
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398101/useTeam/kunkkabloodseeker_s1bzdh.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398101/useTeam/kunkkabloodseeker_s1bzdh.jpg',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading: 'Mars Arena of Universe #5',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398275/useTeam/FYz_jIXNVZWCd6fDqDIRnmotJ5WCoZ-opw1FDdnxrEY_po6tao.png',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606418730/useTeam/FYz_jIXNVZWCd6fDqDIRnmotJ5WCoZ-opw1FDdnxrEY_po6tao.png',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
//   {
//     itemHeading: 'Mars Arena of Universe #6',
//     url_for_banner:
//       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398096/useTeam/dota-2-banner-2_dweulm.jpg',
//     url_for_card:
//       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398096/useTeam/dota-2-banner-2_dweulm.jpg',
//     mode: '5x5',
//     prizePool: {
//         currencyValue: 'money',
//         amount: '3000',
//     },
//     championReward: {
//         currencyValue: 'money',
//         amount: '2000',
//     },
//     slots: {
//         total: '32',
//         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
//     },
//     entry: '20',
//     server: 'eu',
//     startTime: '2021-03-15T12:00:00.417+02:00',
//     terms: [
//         {
//             article: 'Rule #1',
//             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
//         },
//         {
//             article: 'Rule #2',
//             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
//         },
//     ],
//     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
//     partners:
//         {
//             title: '1',
//             sub: ['2', '3', '4']
//         }
//     ,
//     stages: [
//         {
//             step: '1/16',
//             reward: {
//                 currencyValue: 'energy',
//                 amount: '20',
//             },
//             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
//             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
//             matches: [
//                 {
//                     id: '1',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '2', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '2',
//                     teams: [
//                         { imgSrc: '3', score: '1' },
//                         { imgSrc: '4', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '3',
//                     teams: [
//                         { imgSrc: '5', score: '1' },
//                         { imgSrc: '6', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '4',
//                     teams: [
//                         { imgSrc: '7', score: '1' },
//                         { imgSrc: '8', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '5',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '10', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '6',
//                     teams: [
//                         { imgSrc: '11', score: '1' },
//                         { imgSrc: '12', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '7',
//                     teams: [
//                         { imgSrc: '13', score: '1' },
//                         { imgSrc: '14', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '8',
//                     teams: [
//                         { imgSrc: '15', score: '1' },
//                         { imgSrc: '16', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '9',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '18', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '10',
//                     teams: [
//                         { imgSrc: '19', score: '1' },
//                         { imgSrc: '20', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '11',
//                     teams: [
//                         { imgSrc: '21', score: '1' },
//                         { imgSrc: '22', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '12',
//                     teams: [
//                         { imgSrc: '23', score: '1' },
//                         { imgSrc: '24', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '13',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '26', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '14',
//                     teams: [
//                         { imgSrc: '27', score: '1' },
//                         { imgSrc: '28', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '15',
//                     teams: [
//                         { imgSrc: '29', score: '1' },
//                         { imgSrc: '30', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '16',
//                     teams: [
//                         { imgSrc: '31', score: '1' },
//                         { imgSrc: '32', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/8',
//             reward: {
//                 currencyValue: 'energy',
//                 amount: '100',
//             },
//             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
//             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
//             matches: [
//                 {
//                     id: '17',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '3', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '18',
//                     teams: [
//                         { imgSrc: '5', score: '1' },
//                         { imgSrc: '7', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '19',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '11', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '20',
//                     teams: [
//                         { imgSrc: '13', score: '1' },
//                         { imgSrc: '15', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '21',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '19', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '22',
//                     teams: [
//                         { imgSrc: '21', score: '1' },
//                         { imgSrc: '23', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '23',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '27', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '24',
//                     teams: [
//                         { imgSrc: '29', score: '1' },
//                         { imgSrc: '31', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/4',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '50',
//             },
//             winners: ['1', '9', '17', '25'],
//             losers: ['5', '13', '21', '29'],
//             matches: [
//                 {
//                     id: '25',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '5', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '26',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '13', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '27',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '21', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '28',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '29', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/2',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '200',
//             },
//             winners: ['1', '17'],
//             losers: ['9', '25'],
//             matches: [
//                 {
//                     id: '29',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '9', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '30',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '25', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: 'FINAL',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '750',
//             },
//             winners: ['1'],
//             losers: ['17'],
//             matches: [
//                 {
//                     id: '31',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '17', score: '0' },
//                     ],
//                 },
//             ],
//         },
//     ]
//   },
// //   {
// //     itemHeading: 'Name Tour7',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398101/useTeam/kunkkabloodseeker_s1bzdh.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398101/useTeam/kunkkabloodseeker_s1bzdh.jpg',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading: 'Name Tour8',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398099/useTeam/dota2-banner_oug7re.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398099/useTeam/dota2-banner_oug7re.jpg',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading: 'Name Tour Big Fight 9',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/Dota_2_cover_k4bdsr.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/Dota_2_cover_k4bdsr.jpg',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading: 'Name Tour10',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/7_image_n9sprw.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/7_image_n9sprw.jpg',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
//   {
//     itemHeading: 'Universe #11',
//     url_for_banner:
//       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/Dota-2-by-Valve-1280x384_ctgtsm.jpg',
//     url_for_card:
//       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/Dota-2-by-Valve-1280x384_ctgtsm.jpg',
//     description: 'Its your way to become Dota 2 pro-player',
//     mode: '5x5',
//     prizePool: {
//         currencyValue: 'money',
//         amount: '3000',
//     },
//     championReward: {
//         currencyValue: 'money',
//         amount: '2000',
//     },
//     slots: {
//         total: '32',
//         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
//     },
//     entry: '20',
//     server: 'eu',
//     startTime: '2021-03-15T12:00:00.417+02:00',
//     terms: [
//         {
//             article: 'Rule #1',
//             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
//         },
//         {
//             article: 'Rule #2',
//             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
//         },
//     ],
//     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
//     partners:
//         {
//             title: '1',
//             sub: ['2', '3', '4']
//         }
//     ,
//     stages: [
//         {
//             step: '1/16',
//             reward: {
//                 currencyValue: 'energy',
//                 amount: '20',
//             },
//             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
//             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
//             matches: [
//                 {
//                     id: '1',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '2', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '2',
//                     teams: [
//                         { imgSrc: '3', score: '1' },
//                         { imgSrc: '4', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '3',
//                     teams: [
//                         { imgSrc: '5', score: '1' },
//                         { imgSrc: '6', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '4',
//                     teams: [
//                         { imgSrc: '7', score: '1' },
//                         { imgSrc: '8', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '5',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '10', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '6',
//                     teams: [
//                         { imgSrc: '11', score: '1' },
//                         { imgSrc: '12', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '7',
//                     teams: [
//                         { imgSrc: '13', score: '1' },
//                         { imgSrc: '14', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '8',
//                     teams: [
//                         { imgSrc: '15', score: '1' },
//                         { imgSrc: '16', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '9',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '18', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '10',
//                     teams: [
//                         { imgSrc: '19', score: '1' },
//                         { imgSrc: '20', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '11',
//                     teams: [
//                         { imgSrc: '21', score: '1' },
//                         { imgSrc: '22', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '12',
//                     teams: [
//                         { imgSrc: '23', score: '1' },
//                         { imgSrc: '24', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '13',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '26', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '14',
//                     teams: [
//                         { imgSrc: '27', score: '1' },
//                         { imgSrc: '28', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '15',
//                     teams: [
//                         { imgSrc: '29', score: '1' },
//                         { imgSrc: '30', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '16',
//                     teams: [
//                         { imgSrc: '31', score: '1' },
//                         { imgSrc: '32', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/8',
//             reward: {
//                 currencyValue: 'energy',
//                 amount: '100',
//             },
//             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
//             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
//             matches: [
//                 {
//                     id: '17',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '3', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '18',
//                     teams: [
//                         { imgSrc: '5', score: '1' },
//                         { imgSrc: '7', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '19',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '11', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '20',
//                     teams: [
//                         { imgSrc: '13', score: '1' },
//                         { imgSrc: '15', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '21',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '19', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '22',
//                     teams: [
//                         { imgSrc: '21', score: '1' },
//                         { imgSrc: '23', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '23',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '27', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '24',
//                     teams: [
//                         { imgSrc: '29', score: '1' },
//                         { imgSrc: '31', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/4',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '50',
//             },
//             winners: ['1', '9', '17', '25'],
//             losers: ['5', '13', '21', '29'],
//             matches: [
//                 {
//                     id: '25',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '5', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '26',
//                     teams: [
//                         { imgSrc: '9', score: '1' },
//                         { imgSrc: '13', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '27',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '21', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '28',
//                     teams: [
//                         { imgSrc: '25', score: '1' },
//                         { imgSrc: '29', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: '1/2',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '200',
//             },
//             winners: ['1', '17'],
//             losers: ['9', '25'],
//             matches: [
//                 {
//                     id: '29',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '9', score: '0' },
//                     ],
//                 },
//                 {
//                     id: '30',
//                     teams: [
//                         { imgSrc: '17', score: '1' },
//                         { imgSrc: '25', score: '0' },
//                     ],
//                 },
//             ],
//         },
//         {
//             step: 'FINAL',
//             reward: {
//                 currencyValue: 'money',
//                 amount: '750',
//             },
//             winners: ['1'],
//             losers: ['17'],
//             matches: [
//                 {
//                     id: '31',
//                     teams: [
//                         { imgSrc: '1', score: '1' },
//                         { imgSrc: '17', score: '0' },
//                     ],
//                 },
//             ],
//         },
//     ]
//   },
// //   {
// //     itemHeading: 'Name Tour12',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/images_lpfhmn.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/images_lpfhmn.jpg',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading: 'Name Tour13',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/1331783652034_2_se0fh3.webp',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/1331783652034_2_se0fh3.webp',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading: 'Name Tour13',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/1331783652034_2_se0fh3.webp',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/1331783652034_2_se0fh3.webp',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading: 'Name Tour14',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398101/useTeam/kunkkabloodseeker_s1bzdh.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1606398101/useTeam/kunkkabloodseeker_s1bzdh.jpg',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading:  'Name Tour15',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/dota-2-alchemist-facebook-cover-timeline-banner-for-fb_zmuacx.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/dota-2-alchemist-facebook-cover-timeline-banner-for-fb_zmuacx.jpg',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },
// //   {
// //     itemHeading:  'Name Tour15',
// //     url_for_banner:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/dota-2-alchemist-facebook-cover-timeline-banner-for-fb_zmuacx.jpg',
// //     url_for_card:
// //       'https://res.cloudinary.com/dk88eyahu/image/upload/v1609686795/useTeam/dota-2-alchemist-facebook-cover-timeline-banner-for-fb_zmuacx.jpg',
// //     description: 'Its your way to become Dota 2 pro-player',
// //     mode: '5x5',
// //     prizePool: {
// //         currencyValue: 'money',
// //         amount: '3000',
// //     },
// //     championReward: {
// //         currencyValue: 'money',
// //         amount: '2000',
// //     },
// //     slots: {
// //         total: '32',
// //         engaged: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32']
// //     },
// //     entry: '20',
// //     server: 'eu',
// //     startTime: '2021-03-15T12:00:00.417+02:00',
// //     terms: [
// //         {
// //             article: 'Rule #1',
// //             description: 'The first rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //         {
// //             article: 'Rule #2',
// //             description: 'The second rule of Fight Club is: You do not talk about Fight Club'
// //         },
// //     ],
// //     streamSrc: "https://www.youtube.com/embed/1LOiB48itIM",
// //     partners:
// //         {
// //             title: '1',
// //             sub: ['2', '3', '4']
// //         }
// //     ,
// //     stages: [
// //         {
// //             step: '1/16',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '20',
// //             },
// //             winners: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'],
// //             losers: ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32'],
// //             matches: [
// //                 {
// //                     id: '1',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '2', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '2',
// //                     teams: [
// //                         { imgSrc: '3', score: '1' },
// //                         { imgSrc: '4', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '3',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '6', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '4',
// //                     teams: [
// //                         { imgSrc: '7', score: '1' },
// //                         { imgSrc: '8', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '5',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '10', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '6',
// //                     teams: [
// //                         { imgSrc: '11', score: '1' },
// //                         { imgSrc: '12', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '7',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '14', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '8',
// //                     teams: [
// //                         { imgSrc: '15', score: '1' },
// //                         { imgSrc: '16', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '9',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '18', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '10',
// //                     teams: [
// //                         { imgSrc: '19', score: '1' },
// //                         { imgSrc: '20', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '11',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '22', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '12',
// //                     teams: [
// //                         { imgSrc: '23', score: '1' },
// //                         { imgSrc: '24', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '13',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '26', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '14',
// //                     teams: [
// //                         { imgSrc: '27', score: '1' },
// //                         { imgSrc: '28', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '15',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '30', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '16',
// //                     teams: [
// //                         { imgSrc: '31', score: '1' },
// //                         { imgSrc: '32', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/8',
// //             reward: {
// //                 currencyValue: 'energy',
// //                 amount: '100',
// //             },
// //             winners: ['1', '5', '9', '13', '17', '21', '25', '29'],
// //             losers: ['3', '7', '11', '15', '19', '23', '27', '31'],
// //             matches: [
// //                 {
// //                     id: '17',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '3', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '18',
// //                     teams: [
// //                         { imgSrc: '5', score: '1' },
// //                         { imgSrc: '7', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '19',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '11', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '20',
// //                     teams: [
// //                         { imgSrc: '13', score: '1' },
// //                         { imgSrc: '15', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '21',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '19', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '22',
// //                     teams: [
// //                         { imgSrc: '21', score: '1' },
// //                         { imgSrc: '23', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '23',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '27', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '24',
// //                     teams: [
// //                         { imgSrc: '29', score: '1' },
// //                         { imgSrc: '31', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/4',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '50',
// //             },
// //             winners: ['1', '9', '17', '25'],
// //             losers: ['5', '13', '21', '29'],
// //             matches: [
// //                 {
// //                     id: '25',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '5', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '26',
// //                     teams: [
// //                         { imgSrc: '9', score: '1' },
// //                         { imgSrc: '13', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '27',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '21', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '28',
// //                     teams: [
// //                         { imgSrc: '25', score: '1' },
// //                         { imgSrc: '29', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: '1/2',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '200',
// //             },
// //             winners: ['1', '17'],
// //             losers: ['9', '25'],
// //             matches: [
// //                 {
// //                     id: '29',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '9', score: '0' },
// //                     ],
// //                 },
// //                 {
// //                     id: '30',
// //                     teams: [
// //                         { imgSrc: '17', score: '1' },
// //                         { imgSrc: '25', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //         {
// //             step: 'FINAL',
// //             reward: {
// //                 currencyValue: 'money',
// //                 amount: '750',
// //             },
// //             winners: ['1'],
// //             losers: ['17'],
// //             matches: [
// //                 {
// //                     id: '31',
// //                     teams: [
// //                         { imgSrc: '1', score: '1' },
// //                         { imgSrc: '17', score: '0' },
// //                     ],
// //                 },
// //             ],
// //         },
// //     ]
// //   },

// ];

