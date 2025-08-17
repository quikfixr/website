"use client"
import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebaseClient'
import { RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [confirmation, setConfirmation] = useState<import('firebase/auth').ConfirmationResult | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/admin')
      }
    })
    return () => unsub()
  }, [router])

  const setupRecaptcha = () => {
    if (!(window as any).recaptchaVerifier) {
      ;(window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      })
    }
    return (window as any).recaptchaVerifier as RecaptchaVerifier
  }

  const requestOtp = async () => {
    setError('')
    setLoading(true)
    try {
      const verifier = setupRecaptcha()
      const e164 = phone.startsWith('+') ? phone : `+91${phone.replace(/\D/g, '')}`
      const c = await signInWithPhoneNumber(auth, e164, verifier)
      setConfirmation(c)
    } catch (e: any) {
      setError(e?.message ?? 'Failed to send OTP')
    } finally {
      setLoading(false)
    }
  }

  const verifyOtp = async () => {
    if (!confirmation) return
    setError('')
    setLoading(true)
    try {
      await confirmation.confirm(otp)
      router.replace('/admin')
    } catch (e: any) {
      setError(e?.message ?? 'Invalid OTP')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-md border rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
        <div id="recaptcha-container" />
        <label className="block text-sm mb-1">Phone Number</label>
        <input
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="e.g. 9876543210 or +919876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {confirmation && (
          <>
            <label className="block text-sm mb-1">OTP</label>
            <input
              className="w-full border rounded px-3 py-2 mb-3"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </>
        )}
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        {!confirmation ? (
          <button
            className="w-full bg-indigo-600 text-white py-2 rounded disabled:opacity-50"
            onClick={requestOtp}
            disabled={loading || !phone}
          >
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        ) : (
          <button
            className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
            onClick={verifyOtp}
            disabled={loading || !otp}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        )}
        <button className="mt-3 w-full text-sm text-gray-600 underline" onClick={() => signOut(auth)}>
          Sign out
        </button>
      </div>
    </div>
  )
}


