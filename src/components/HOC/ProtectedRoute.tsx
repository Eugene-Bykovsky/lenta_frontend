import { FC, ReactNode } from 'react'

type TProtectedRoute = {
  authOnly?: boolean
  children: ReactNode
}

export const ProtectedRoute: FC<TProtectedRoute> = ({ children }) => {
  // const location = useLocation()
  // const { isAuth } = useAppSelector((state) => state.forecast)

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (!isAuth) {
  //   return <Navigate to="/login" state={{ from: location }} />
  // }

  return <> {children} </>
}
