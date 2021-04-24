import React, { useState } from 'react'
import Router from 'next/router'
import cookie from 'js-cookie'
import Layout from '../../components/FTlayout'

const SignUp: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
      const body = { name, email, password }
      const res = await fetch(`http://localhost:3000/api/Users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            password,
            name
          }),
        })
        .then((r) => r.json())
        .then((data) => {
        if (data && data.error) {
            setError(data.message);
            //alert(data.message)
        }
        if (data && data.token) {
            //set cookie
            cookie.set('token', data.token, {expires: 2});
            Router.push('/FinanceTracker/Dashboard');
        }
        else{
            console.error("no token with sign up request")
            console.log(data)
        }
    });
  };


  return (
    <Layout>
      <div className="p-12 -flex text-justify">
        <form
          onSubmit={submitData}>
          <h1>Sign up</h1>
          <input
            autoFocus
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            value={name}
          />
          <input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email address"
            type="text"
            value={email}
          />
          <input
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
          />
          <p>{error}</p>
          <input
            disabled={!name || !email || !password}
            type="submit"
            value="Sign up"
          />
          <a className="ml-4" href="#" onClick={() => Router.push('/FinanceTracker')}>
            or Cancel
        </a>
        </form>
      </div>
      <style jsx>{`
      input[type='text'] {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }
      input[type='password'] {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }
      input[type='submit'] {
        margin: 5% 0%;
        background: #ececec;
        border: 0;
        padding: 1rem 1.5rem;
        font-size: 25px;
        font-weight: bold;
      }
      input[type='submit']:enabled{
        background: #0070f3;
    }
    `}</style>
    </Layout>
  )
}

export default SignUp