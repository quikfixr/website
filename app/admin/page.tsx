"use client"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebaseClient'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthed(true)
      } else {
        setIsAuthed(false)
        router.replace('/admin/login')
      }
    })
    return () => unsub()
  }, [router])

  if (isAuthed === null) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!isAuthed) {
    return null
  }

  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: 'white', overflow: 'hidden'}}>
      <div style={{position: 'fixed', right: 16, top: 16, zIndex: 50}}>
        <button onClick={() => signOut(auth)} className="bg-gray-900 text-white px-3 py-1 rounded">Sign out</button>
      </div>
      <div style={{width: 198, height: 832, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '4px 0px 8.199999809265137px rgba(0, 0, 0, 0.08)', overflow: 'hidden'}}>
        <div style={{paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, left: 15.50, top: 185, position: 'absolute', background: 'var(--Surface-Brand, #2F27CE)', borderRadius: 70, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
          <div style={{width: 24, height: 24, position: 'relative'}}>
            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', outline: '1.92px var(--Content-Secondary, white) solid', outlineOffset: '-0.96px'}} />
            </div>
          </div>
          <div style={{color: 'var(--Black-&-White-White, white)', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Bookings</div>
        </div>
        <div style={{width: 168, paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, left: 15, top: 251, position: 'absolute', background: 'var(--Surface-Secondary, #F5F5F5)', borderRadius: 70, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
          <div style={{width: 24, height: 24, position: 'relative'}}>
            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
              <div style={{width: 20, height: 20, left: 2, top: 2, position: 'absolute', outline: '1.92px var(--Content-Primary, black) solid', outlineOffset: '-0.96px'}} />
            </div>
          </div>
          <div style={{color: 'var(--Black-&-White-Black, black)', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Confirmed</div>
        </div>
        <div style={{width: 53, height: 53, left: 72, top: 83, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
      </div>
      <div style={{width: 12, height: 843, left: 1268, top: 0, position: 'absolute', background: '#D0D0D0'}}>
        <div style={{width: 9, height: 105, left: 1, top: 9, position: 'absolute', background: 'white', borderRadius: 40}} />
      </div>
      <div style={{width: 1036, left: 214, top: 40, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 29, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 29, display: 'inline-flex'}}>
          <div style={{width: 839, height: 54, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 10, outline: '1px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-1px'}}>
            <div style={{left: 12, top: 7, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 25, display: 'inline-flex'}}>
              <div style={{paddingLeft: 12, paddingRight: 12, paddingTop: 11, paddingBottom: 11, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                <div style={{width: 18, height: 18, position: 'relative'}}>
                  <div style={{width: 18, height: 18, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
                    <div style={{width: 13.50, height: 13.50, left: 2.25, top: 2.25, position: 'absolute', outline: '1.50px var(--Content-Teretiary, #262626) solid', outlineOffset: '-0.75px'}} />
                  </div>
                </div>
              </div>
              <div style={{color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Search</div>
            </div>
          </div>
          <div style={{width: 168, height: 54, position: 'relative', background: 'var(--Surface-Brand, #2F27CE)', borderRadius: 10}}>
            <div style={{left: 58, top: 13, position: 'absolute', color: 'var(--Black-&-White-White, white)', fontSize: 18, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Filters</div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', height: 909, position: 'relative', background: 'white', boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.08)', overflow: 'hidden'}}>
          <div style={{width: 1020.78, height: 108.45, left: 0, top: -53.01, position: 'absolute', background: 'white', overflow: 'hidden'}}>
            <div style={{left: 37.10, top: 67.01, position: 'absolute', color: 'black', fontSize: 20.93, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Name</div>
            <div style={{left: 255.91, top: 67.01, position: 'absolute', color: 'black', fontSize: 20.93, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Contact Info</div>
            <div style={{left: 489, top: 67.01, position: 'absolute', color: 'black', fontSize: 20.93, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Address</div>
            <div style={{left: 925, top: 67.01, position: 'absolute', color: 'black', fontSize: 20.93, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>State</div>
            <div style={{left: 660.22, top: 67.01, position: 'absolute', color: 'black', fontSize: 20.93, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>Review & Rating</div>
          </div>
          <div style={{width: 1036, height: 0, left: 0, top: 57.35, position: 'absolute', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 134.14, left: 254.96, top: 89.69, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3.81, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>+91 7974436723</div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Pratik Verma</div>
          </div>
          <div style={{width: 134.14, left: 254.96, top: 245.71, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3.81, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>+91 7974436723</div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Pratik Verma</div>
          </div>
          <div style={{width: 134.14, left: 254.96, top: 392.21, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3.81, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>+91 7974436723</div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Pratik Verma</div>
          </div>
          <div style={{width: 134.14, left: 254.96, top: 566.31, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 3.81, display: 'inline-flex'}}>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>+91 7974436723</div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Pratik Verma</div>
          </div>
          <div style={{width: 123.67, left: 470.91, top: 89.69, position: 'absolute', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Mana Basti, Raipur C.G</div>
          <div style={{width: 123.67, left: 470.91, top: 245.71, position: 'absolute', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Mana Basti, Raipur C.G</div>
          <div style={{width: 123.67, left: 470.91, top: 392.21, position: 'absolute', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Mana Basti, Raipur C.G</div>
          <div style={{width: 123.67, left: 470.91, top: 566.31, position: 'absolute', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Mana Basti, Raipur C.G</div>
          <div style={{width: 141, padding: 9.51, left: 880, top: 116, position: 'absolute', background: 'var(--Button-Delete-action, #DE1135)', borderRadius: 15.22, justifyContent: 'center', alignItems: 'center', gap: 9.51, display: 'inline-flex'}}>
            <div style={{color: 'var(--Brand-Brand-200, #EAE9FA)', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Pending</div>
            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
              <div style={{width: 12, height: 6, left: 6, top: 9, position: 'absolute', outline: '2px var(--Content-Secondary, white) solid', outlineOffset: '-1px'}} />
            </div>
          </div>
          <div style={{width: 181.70, left: 660.22, top: 89.69, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.81, display: 'inline-flex'}}>
              <div style={{color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>4.7</div>
              <div style={{width: 22.83, height: 22.83, position: 'relative', overflow: 'hidden', borderRadius: 28.54}}>
                <div style={{width: 22.83, height: 22.83, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
                  <div style={{width: 17.93, height: 17.10, left: 2.45, top: 2.50, position: 'absolute', background: 'var(--Symantic-Warning, #F6BC2F)', borderRadius: 0.32, outline: '1.27px var(--Content-Warning, #F6BC2F) solid', outlineOffset: '-0.63px'}} />
                </div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>I Like the instant servive offer by therm</div>
          </div>
          <div style={{width: 181.70, left: 662.13, top: 226.68, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.81, display: 'inline-flex'}}>
              <div style={{color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>4.7</div>
              <div style={{width: 22.83, height: 22.83, position: 'relative', overflow: 'hidden', borderRadius: 28.54}}>
                <div style={{width: 22.83, height: 22.83, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
                  <div style={{width: 17.93, height: 17.10, left: 2.45, top: 2.50, position: 'absolute', background: 'var(--Symantic-Warning, #F6BC2F)', borderRadius: 0.32, outline: '1.27px var(--Content-Warning, #F6BC2F) solid', outlineOffset: '-0.63px'}} />
                </div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>I Like the instant servive offer by therm</div>
          </div>
          <div style={{width: 181.70, left: 660.22, top: 392.21, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.81, display: 'inline-flex'}}>
              <div style={{color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>4.7</div>
              <div style={{width: 22.83, height: 22.83, position: 'relative', overflow: 'hidden', borderRadius: 28.54}}>
                <div style={{width: 22.83, height: 22.83, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
                  <div style={{width: 17.93, height: 17.10, left: 2.45, top: 2.50, position: 'absolute', background: 'var(--Symantic-Warning, #F6BC2F)', borderRadius: 0.32, outline: '1.27px var(--Content-Warning, #F6BC2F) solid', outlineOffset: '-0.63px'}} />
                </div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>I Like the instant servive offer by therm</div>
          </div>
          <div style={{width: 181.70, left: 660.22, top: 566.31, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 3.81, display: 'inline-flex'}}>
              <div style={{color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>4.7</div>
              <div style={{width: 22.83, height: 22.83, position: 'relative', overflow: 'hidden', borderRadius: 28.54}}>
                <div style={{width: 22.83, height: 22.83, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
                  <div style={{width: 17.93, height: 17.10, left: 2.45, top: 2.50, position: 'absolute', background: 'var(--Symantic-Warning, #F6BC2F)', borderRadius: 0.32, outline: '1.27px var(--Content-Warning, #F6BC2F) solid', outlineOffset: '-0.63px'}} />
                </div>
              </div>
            </div>
            <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>I Like the instant servive offer by therm</div>
          </div>
          <div style={{left: 33.30, top: 86.84, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 8.56, display: 'inline-flex'}}>
            <img style={{width: 74.20, height: 81.81, position: 'relative', background: 'black', borderRadius: 7.61}} src="https://placehold.co/74x82" />
            <div style={{width: 81.81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4.76, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 15.22, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>Plumber</div>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Tap fixing</div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 9.51, display: 'inline-flex'}}>
                <div style={{width: 120.34, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                  <div style={{justifyContent: 'center', alignItems: 'flex-end', gap: 5.71, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 4.76, display: 'flex'}}>
                      <div style={{color: 'var(--Content-Brand, #2F27CE)', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>₹420</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{left: 38.05, top: 245.71, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 8.56, display: 'inline-flex'}}>
            <img style={{width: 74.20, height: 81.81, position: 'relative', background: 'black', borderRadius: 7.61}} src="https://placehold.co/74x82" />
            <div style={{width: 81.81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4.76, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 15.22, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>Plumber</div>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Tap fixing</div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 9.51, display: 'inline-flex'}}>
                <div style={{width: 120.34, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                  <div style={{justifyContent: 'center', alignItems: 'flex-end', gap: 5.71, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 4.76, display: 'flex'}}>
                      <div style={{color: 'var(--Content-Brand, #2F27CE)', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>₹420</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{left: 38.05, top: 392.21, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 8.56, display: 'inline-flex'}}>
            <img style={{width: 74.20, height: 81.81, position: 'relative', background: 'black', borderRadius: 7.61}} src="https://placehold.co/74x82" />
            <div style={{width: 81.81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4.76, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 15.22, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>Plumber</div>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Tap fixing</div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 9.51, display: 'inline-flex'}}>
                <div style={{width: 120.34, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                  <div style={{justifyContent: 'center', alignItems: 'flex-end', gap: 5.71, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 4.76, display: 'flex'}}>
                      <div style={{color: 'var(--Content-Brand, #2F27CE)', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>₹420</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{left: 38.05, top: 566.31, position: 'absolute', justifyContent: 'center', alignItems: 'flex-start', gap: 8.56, display: 'inline-flex'}}>
            <img style={{width: 74.20, height: 81.81, position: 'relative', background: 'black', borderRadius: 7.61}} src="https://placehold.co/74x82" />
            <div style={{width: 81.81, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4.76, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 15.22, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>Plumber</div>
              <div style={{alignSelf: 'stretch', color: 'black', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>Tap fixing</div>
              <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 9.51, display: 'inline-flex'}}>
                <div style={{width: 120.34, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                  <div style={{justifyContent: 'center', alignItems: 'flex-end', gap: 5.71, display: 'inline-flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', gap: 4.76, display: 'flex'}}>
                      <div style={{color: 'var(--Content-Brand, #2F27CE)', fontSize: 17.12, fontFamily: 'Poppins', fontWeight: '600', lineHeight: 20.93, wordWrap: 'break-word'}}>₹420</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{width: 1007, height: 0, left: 28.54, top: 210.59, position: 'absolute', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 1007, height: 0, left: 28.54, top: 342.59, position: 'absolute', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 1007, height: 0, left: 28.54, top: 514.59, position: 'absolute', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 1007, height: 0, left: 28.54, top: 676.59, position: 'absolute', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 783.90, height: 0, left: 862, top: -45.40, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 954.19, height: 0, left: 614.56, top: -45.40, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 954.19, height: 0, left: 407.17, top: -45.40, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{width: 953.23, height: 0, left: 220.71, top: -45.40, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: 'top left', outline: '0.95px var(--Border-Transparent, rgba(0, 0, 0, 0.10)) solid', outlineOffset: '-0.48px'}}></div>
          <div style={{padding: 9.51, left: 883, top: 254, position: 'absolute', background: 'var(--Content-Positive, #0E8345)', borderRadius: 15.22, justifyContent: 'center', alignItems: 'center', gap: 9.51, display: 'inline-flex'}}>
            <div style={{color: 'var(--Brand-Brand-200, #EAE9FA)', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Processing</div>
            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
              <div style={{width: 12, height: 6, left: 6, top: 9, position: 'absolute', outline: '2px var(--Content-Secondary, white) solid', outlineOffset: '-1px'}} />
            </div>
          </div>
          <div style={{padding: 9.51, left: 880, top: 388, position: 'absolute', background: 'var(--Button-Pressed, #261FA5)', borderRadius: 15.22, justifyContent: 'center', alignItems: 'center', gap: 9.51, display: 'inline-flex'}}>
            <div style={{color: 'var(--Brand-Brand-200, #EAE9FA)', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Completed</div>
            <div style={{width: 24, height: 24, left: 0, top: 0, position: 'absolute', overflow: 'hidden'}}>
              <div style={{width: 12, height: 6, left: 6, top: 9, position: 'absolute', outline: '2px var(--Content-Secondary, white) solid', outlineOffset: '-1px'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


