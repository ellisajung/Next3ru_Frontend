import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request) // 모든 요청에서 세션을 업데이트하여 최신 상태로 유지
}

export const config = {
  matcher: [ // 미들웨어가 실행될 URL 패턴을 지정하는 옵션
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    // 이미지 및 정적 파일 요청을 제외하고, 모든 API 요청과 페이지 요청에서 미들웨어가 실행
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)', 
  ],
}