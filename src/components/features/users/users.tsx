import { useAppSelector } from '../../../hooks'

export const Users = () => {
  const { users, error, loading } = useAppSelector((state) => state.users)
  return (
    <>
      {loading && <div>Loading.....</div>}
      {error && <div>{error}</div>}
      {!loading &&
        !error &&
        users.map((user) => <div key={user.id}>{user.name}</div>)}
    </>
  )
}
