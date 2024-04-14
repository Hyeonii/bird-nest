import Link from "next/link";

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Home 화면</h1>
      <h3>로그인 전</h3>
      <Link href='/hyeonii'>사용자 메인</Link>
      <Link href='/explore'>검색</Link>
      <br/>
      <h3>로그인</h3>
      <Link href='/login'>로그인</Link>
      <Link href='/signup'>회원가입</Link>
      <br/>
      <h3>로그인 후</h3>
      <Link href='/mypage'>마이페이지</Link>
      <Link href='/new-post'>게시물 작성</Link>
      <br/>
      <h3>기타</h3>
      <Link href='/dasda/asdasd/asd'>not found</Link>
    </div>
  )
}