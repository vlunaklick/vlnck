import React from 'react'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

const interFontB = fetch(
  'https://firebasestorage.googleapis.com/v0/b/concers-30991.appspot.com/o/fonts%2FInter-Bold.ttf?alt=media&token=7baf5dd5-c30e-412d-8ac6-8c06577961c3'
).then(res => res.arrayBuffer())

const interFontR = fetch(
  'https://firebasestorage.googleapis.com/v0/b/concers-30991.appspot.com/o/fonts%2FInter-Regular.ttf?alt=media&token=fb8b0c26-5e5d-4311-a93a-45926f580b5f'
).then(res => res.arrayBuffer())

export default async function handler(req) {
  try {
    const [interB, interR] = await Promise.all([interFontB, interFontR])

    const { searchParams } = new URL(req.url)

    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'
    const website = searchParams.get('website') || 'vlnck.tech'

    return new ImageResponse(
      (
        <div tw="h-full w-full flex items-start justify-start border border-slate-700 border-[12px] bg-gray-50">
          <div tw="flex items-start justify-start h-full">
            <div tw="flex flex-col justify-between w-full h-full">
              <h1 tw="text-[80px] p-20 font-black text-left">{title}</h1>
              <div tw="text-2xl pb-10 px-20 mb-0">{website}</div>
            </div>
          </div>
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
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
