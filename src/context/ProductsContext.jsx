import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const AdsListContext = createContext([]);

export const AdsListContextProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
 
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const collectionRef = collection(db, "User")
        const querySnapshot = await getDocs(collectionRef);
        const fetchedAds = [];
        querySnapshot.forEach((doc) => {
          fetchedAds.push({ id: doc.id, ...doc.data() });
        });
        console.log('fetched adss ' , fetchedAds);
        setAds(fetchedAds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAds();
  }, []);


  return (
    <AdsListContext.Provider value={{ads}}>
      {children}
    </AdsListContext.Provider>
  );
};

export const useAdsList = () => useContext(AdsListContext);
