import React from "react";

import Style from './Loader.module.scss'

const Loader = () => (
  <div className="flex flex-row justify-center items-center w-full min-h-screen">
    <div className={Style['lds-dual-ring']} />
  </div>
)

export default Loader
