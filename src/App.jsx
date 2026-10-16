import './App.css'
import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/react'
import StockList from './components/StockList'


function App() {
  const { user } = useUser();

  return (
    <div className="app-container">
      <header className="auth-header">
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
      </header>
      <Show when="signed-in">
        <main className="dashboard-card">
          {user ? (
            <>
              <div className="user-header">
                <UserButton />
              </div>
              <h1>Finora.io</h1>
              <p className="dashboard-subtitle">Track your favorite Stocks.</p>
              <p className="greeting">Hello, {user.firstName || 'Investor'}! <span>👋</span></p>
              <StockList userId={user.id} />
            </>
          ) : (
            <p>Loading User</p>
          )}
        </main>
      </Show>
    </div>
      
  )
}

export default App