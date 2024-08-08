import React, { useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import { Aesthetics } from "../../json/atom";
import { useParams } from "react-router-dom";
import styles from "../../assets/css/info.module.css";

function InfoCont() {
  const setAesthetics = useAtomValue(Aesthetics);
  const params = useParams();
  const a = params.tel;
  const b = setAesthetics.filter((el) => el.tel === a);

  const mapRef = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(b[0].lat, b[0].lng);

      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17, // 지도 확대 정도
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.TOP_RIGHT,
        },
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  return (
    <div className={styles.cont}>
      <div className={styles.url}>
        <div className={styles.title}>{b[0].title}</div>
        <a href={`${b[0].url}`} target="_blank" rel="noreferrer">
          <p>예약하러 가기</p>
        </a>
      </div>

      <div className={styles.infoCont}>
        <p className={styles.span}>INFO</p>
        <div className={styles.tel}>문의전화 : {b[0].tel}</div>
        <div className={styles.address}>주소 : {b[0].address}</div>
      </div>

      <div>
        <p className={styles.span}>소개</p>
        <div className={styles.info}>{b[0].info}</div>
      </div>

      <div>
        <p className={styles.span}>위치</p>
        <div ref={mapRef} style={{ width: "100%", height: "400px" }} />
      </div>
    </div>
  );
}

export default InfoCont;
