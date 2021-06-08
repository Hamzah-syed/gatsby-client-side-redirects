import React, { useState } from "react"
import { navigate } from "gatsby"

const Dashboard = () => {
  const [isAuheticated, setIsAuheticated] = useState<boolean>(false)

  const browser = typeof window !== "undefined" && window
  if (!isAuheticated && browser) {
    navigate("/")
    return (
      <>
        <h1>loading....</h1>
        <button
          className="border p-4 mt-2 mx-2"
          onClick={() => setIsAuheticated(true)}
        >
          authecticate
        </button>
      </>
    )
  }

  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard
