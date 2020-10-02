import React from 'react';
import App from "next/app";
import MainLayout from '../components/MainLayout';
import '../public/css/global.css';
import '../public/sass/global.scss';
// import Head from "next/head";
// import MainLayout from "../components/layout";

// class MyApp extends App {

//   render() {
//     const { Component , pageProps, router, store } = this.props;
//     console.log(Component);
//     return (
//       <>
//         <Head>
//           <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"
//           />
//         </Head>
//         {/* <Provider store={store}> */}
//           {
//             // <ResponsiveContext.Provider value={{ width: pageProps.deviceWidth }}>
//               <MainLayout>
//                 {/* <Layout> */}
//                   <Component {...pageProps}  />
//                 {/* </Layout> */}
//               </MainLayout>
//             // </ResponsiveContext.Provider>
//           }
//         {/* </Provider> */}
//       </>
//     );
//   }
// }


class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props
  
      return (
          <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
      )
    }
  }


export default MyApp;
