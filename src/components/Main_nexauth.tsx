// import { getSession, signIn, signOut, useSession } from 'next-auth/client';
// import { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '~/app/hooks';
// import DynamicWrapper from '~/components/DynamicWrapper';
// import { Faq } from '~/components/Faq';
// import Footer from '~/components/Footer';
// import Hero from '~/components/Hero';
// import Layout from '~/components/Layout';
// import Newsletter from '~/components/Newsletter';
// import Posts from '~/components/Posts';
// import { checkUserLoggedIn } from '~/reducers/authReducers';
// import StaticWrapper from './StaticWrapper';

// export default function Main(initialData) {
//   const [session, loading] = useSession();

//   return (
//     <div className='container'>
//       <h1>Auth Test</h1>

//       <div>
//         {!session && (
//           <>
//             Not signed in <br />
//             <button onClick={() => signIn()}>Sign in</button>
//           </>
//         )}
//         {session && (
//           <>
//             Signed in as {session.user.email} <br />
//             <button onClick={() => signOut()}>Sign out</button>
//           </>
//         )}
//       </div>

//       <h1>Content...</h1>

//       <div>
//         {initialData.journals &&
//           initialData.journals.map((each, index) => {
//             return (
//               <div key={index}>
//                 <h3>{each.Title}</h3>
//                 <p>{each.Journal}</p>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export async function getServerSideProps({ req }) {
//   let headers = {};

//   const session = await getSession({ req });
//   if (session) {
//     headers = { Authorization: `Bearer ${session.jwt}` };
//   }
//   let journals = [];
//   try {
//     let { data } = await axios.get(
//       `${process.env.NEXT_PUBLIC_API_URL}/journals`,
//       {
//         headers: headers,
//       }
//     );
//     journals = data;
//   } catch (e) {
//     console.log('caught error');
//     journals = [];
//   }

//   return { props: { journals: journals } };
// }
