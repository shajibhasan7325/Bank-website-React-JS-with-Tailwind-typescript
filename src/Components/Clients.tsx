import React from "react";
import { clients } from "../constants";
import styles from "../style";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {clients.map((clint) => (
          <div
            key={clint.id}
            className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={clint.logo}
              alt="img"
              className=" sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
