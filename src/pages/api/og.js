import React from 'react'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const interFontB = fetch(
  'https://firebasestorage.googleapis.com/v0/b/concers-30991.appspot.com/o/fonts%2FInter-Bold.ttf?alt=media&token=7baf5dd5-c30e-412d-8ac6-8c06577961c3',
).then(res => res.arrayBuffer())

const interFontR = fetch(
  'https://firebasestorage.googleapis.com/v0/b/concers-30991.appspot.com/o/fonts%2FInter-Regular.ttf?alt=media&token=fb8b0c26-5e5d-4311-a93a-45926f580b5f',
).then(res => res.arrayBuffer())

export default async function handler(req) {
  try {
    const [interB, interR] = await Promise.all([interFontB, interFontR])

    const { searchParams } = new URL(req.url)

    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    const subtitle = searchParams.has('subtitle') ? searchParams.get('subtitle')?.slice(0, 100) : ''

    const website = searchParams.get('website') || 'vlnck'

    return new ImageResponse(
      (
        <div tw="h-full w-full flex items-start bg-slate-50 flex-col justify-between px-18 py-12">
          <div tw="flex flex-col">
            <div tw="flex items-center justify-center h-20 w-20">
              <img
                src={'https://vlnck.vercel.app/images/icon-me.png'}
                tw="h-full w-full rounded-full"
              />
            </div>

            <h1 tw="text-[80px] p-20 font-black text-left text-slate-900 m-0 p-0 mt-5">{title}</h1>
            {subtitle && (
              <h2 tw="text-[40px] p-20 font-black text-left text-slate-900 m-0 p-0 mt-5">
                {subtitle}
              </h2>
            )}
          </div>

          <div tw="text-2xl pb-10 px-20 mb-0 text-slate-900 m-0 p-0">{website}</div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
        fonts: [
          {
            name: 'Inter',
            data: interR,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Inter',
            data: interB,
            style: 'normal',
            weight: 700,
          },
        ],
      },
    )
  } catch (e) {
    console.log(`${e.message}`)

    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
