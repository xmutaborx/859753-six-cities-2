export const SORT_OPTION = [
  {type: `popular`, value: `Popular`},
  {type: `lowToHigh`, value: `Price: low to high`},
  {type: `highToLow`, value: `Price: high to low`},
  {type: `rated`, value: `Top rated first`},
];

export const CITIES_LIST = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

export const MAX_CITIES = 6;

export const FEEDBACK_STARS = [
  {id: `5-stars`, value: 5, title: `perfect`},
  {id: `4-stars`, value: 4, title: `good`},
  {id: `3-stars`, value: 3, title: `not bad`},
  {id: `2-stars`, value: 2, title: `badly`},
  {id: `1-star`, value: 1, title: `terribly`},
];

// <li className="favorites__locations-items">
//           <div className="favorites__locations locations locations--current">
//             <div className="locations__item">
//               <a className="locations__item-link" href="#">
//                 <span>CityName</span>
//               </a>
//             </div>
//           </div>
//           <div className="favorites__places">
//             {/* offers.map((it, i) =>
//               <FavoritesCard
//                 cards={it}
//                 key={i}
//               />
//             )*/}
//           </div>
//         </li>
//       </ul>
