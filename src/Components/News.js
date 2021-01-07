import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const News = (props) => {
  const [data, setData] = useState({});
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const docRef = await db
        .collection("fl_content")
        .where("aktywne", "==", true)
        .get();

      setData(docRef.docs[docRef.docs.length - 1].data());
      setDate(
        docRef.docs[docRef.docs.length - 1].data().dataDodania.slice(0, 10)
      );
    };
    fetchData();
  }, []);

  return (
    <>
      <div id="news">
        <h1 className="news">Aktualności</h1>
        <p className="news-date">{date}</p>
        <article className="news">
          <img
            className="news main-image"
            alt={data.tekstobrazka}
            src={data.imageurl}
          />
          <p
            className="news textMain"
            dangerouslySetInnerHTML={{ __html: props.text }}></p>
        </article>
      </div>
    </>
  );
};

export default News;
