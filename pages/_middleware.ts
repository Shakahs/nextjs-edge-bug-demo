// pages/_middleware.ts
import type { NextFetchEvent, NextRequest } from 'next/server'
import {trimEnd} from 'lodash-es'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    return new Response(trimEnd('Hello, world!   '))
}
