import React from 'react'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url)

    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'
    const website = searchParams.get('website') || 'vlnck.tech'

    return new ImageResponse(
      (
        <div tw="h-full w-full flex items-start justify-start border border-blue-500 border-[12px] bg-gray-50">
          <div tw="flex items-start justify-start h-full">
            <div tw="flex flex-col justify-between w-full h-full">
              <h1 tw="text-[80px] p-20 font-black text-left">{title}</h1>
              <div tw="text-2xl pb-10 px-20 font-bold mb-0">{website}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 627,
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
