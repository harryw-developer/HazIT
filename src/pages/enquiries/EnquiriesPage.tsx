import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { btnSecondary } from '../../lib/ui'

interface Enquiry {
  id: string
  name: string
  email: string
  phone: string
  area: string
  service: string
  message: string
  handled: boolean
  created_at: string
}

export default function EnquiriesPage() {
  const [rows, setRows] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [showHandled, setShowHandled] = useState(false)

  const load = useCallback(async () => {
    const { data } = await supabase.from('enquiries').select('*').order('created_at', { ascending: false })
    setRows((data as Enquiry[]) || [])
    setLoading(false)
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  async function setHandled(e: Enquiry, handled: boolean) {
    await supabase.from('enquiries').update({ handled }).eq('id', e.id)
    await load()
  }
  async function remove(e: Enquiry) {
    if (!window.confirm(`Delete the enquiry from ${e.name || 'this person'}?`)) return
    await supabase.from('enquiries').delete().eq('id', e.id)
    await load()
  }

  const visible = rows.filter((r) => showHandled || !r.handled)
  const newCount = rows.filter((r) => !r.handled).length

  return (
    <div className="text-[13px]">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[12px] text-[#4b4a44]">
          Messages sent from the contact form on your website.{' '}
          {newCount > 0 && <b>{newCount} new.</b>}
        </p>
        <button className={btnSecondary} onClick={() => setShowHandled((v) => !v)}>
          {showHandled ? 'Hide dealt-with' : 'Show all'}
        </button>
      </div>

      {loading ? (
        <div className="bevel-in p-6 text-center text-[#8a867a]">Loading…</div>
      ) : visible.length === 0 ? (
        <div className="bevel-in p-6 text-center text-[#8a867a]">
          {rows.length === 0 ? 'No enquiries yet.' : 'Nothing outstanding — all dealt with.'}
        </div>
      ) : (
        <div className="space-y-2">
          {visible.map((e) => (
            <div key={e.id} className={`bevel-in p-3 ${e.handled ? 'opacity-60' : ''}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className="text-[14px] font-bold">{e.name || 'No name given'}</span>
                  {e.area && <span className="ml-2 text-[12px] text-[#4b4a44]">· {e.area}</span>}
                  {e.service && (
                    <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-blue-800">
                      {e.service}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-[#8a867a]">
                  {new Date(e.created_at).toLocaleString('en-GB')}
                </span>
              </div>

              <div className="mt-1 flex flex-wrap gap-4 text-[12px]">
                {e.phone && (
                  <a className="link95" href={`tel:${e.phone.replace(/\s+/g, '')}`}>
                    {e.phone}
                  </a>
                )}
                {e.email && (
                  <a className="link95" href={`mailto:${e.email}`}>
                    {e.email}
                  </a>
                )}
              </div>

              {e.message && <p className="mt-2 whitespace-pre-wrap">{e.message}</p>}

              <div className="mt-2 flex justify-end gap-3">
                <button className="link95" onClick={() => setHandled(e, !e.handled)}>
                  {e.handled ? 'Mark as new' : 'Mark dealt with'}
                </button>
                <button className="link95 text-red-600" onClick={() => remove(e)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
