import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/Provider'
import "../../App.css"

type Props = {}

export const ProtectedRoute = ({children}:any) => {
  const {user,loading} = useAuth()

  if (loading) return <div className="lds-spinner h-screen pt-40"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  if (!user) return <Navigate to ='/login'/>
  return <>{children}</>
}

export default ProtectedRoute