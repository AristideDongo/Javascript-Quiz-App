import React from 'react'
import "@/app/not-found.css"


export default function notfound() {
  return (
    <div className="">
    <div className="planet">
      <div className="inner">
        <div className="surface"></div>
      </div>
      <div className="ring"></div>
      <div className="moon"></div>
      <span>4</span>
      <span>4</span>
      <div className="stars s1"></div>
      <div className="stars s2"></div>
      <div className="stars s3"></div>
      <div className="stars s4"></div>
    </div>
    <p className="alt">404</p>
    <p className="info">Not-Found</p>
  </div>
  )
}