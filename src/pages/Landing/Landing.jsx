import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ?
        <>
          <h1>{user.name}</h1>
          <h2>Here's what you've got going on:</h2>
        </>
      :
      <h1>Welcome to Devise, login or sign up to get started.</h1>
      }
    </main>
  )
}

export default Landing
