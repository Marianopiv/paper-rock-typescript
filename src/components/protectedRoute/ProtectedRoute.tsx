import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/Provider'

type Props = {}

export const ProtectedRoute = ({children}:any) => {
  const {user,loading} = useAuth()

  if (loading) return <h1>loading</h1>
  if (!user) return <Navigate to ='/login'/>
  return <>{children}</>
}

export default ProtectedRoute