# 계기
회사에서 BI 사이트 만드는데 nextjs를 사용하게 됐다.    
BI 사이트라 ssr의 이점 필요 없다 생각되지만... 풀 스택을 지원하니 코드를 나눌 필요 없이 한 프로잭트에서 관리하는 이점(관리 포인트가 줄어든다는 관점)과 거의 혼자 코딩하는 환경이라 협업을 굳이 생각 안 해도 괜찮아서 프로젝트의 유지보수성은 고려할 필요가 없다 생각한다.    
그래서 공부 안 하고 리액트 지식과 백엔드 개발자의 역량으로 프로젝트를 진행 중    **기태형**이 [**드림코딩**](https://www.youtube.com/@dream-coding)이라는 유튜버가 강의하는 nextjs 강의를 결재했다.    
나도 공유해달라 했는데 해주셨다.    
**개이득** ㅋ 강의를 듣다    
공부 진행 방향은 강의의 모든 내용을 기록하기 보단 기억해야 하는 포인트만 readme에 쓰는 형태로 한다. (react과 next의 차이, nextjs 역사 이런 것만)

# 개념 공부 가즈아~~~~~
## netxjs란?
> The React **Framework** for the Web
1. Full stack
2. file-based routing
3. Search Engine, image, font Optimization
4. Server Side Rendering [**SSR**] 
5. 목적에 따라 렌더링 방식을 선택적으로 결정할 수 있음 (개인적 견해)

## nextjs가 추구하는 6가지 원칙
1. out-of-the-box functionality requiring no setup 
    > nextjs 프로젝트를 생성할 때 환경설정을 겁나 쉽게 
2. JavaScript everywhere
    > js만 사용해서 풀스택 쌉가능 하게
3. automatic code-splitting and server-rendering
    > 개발자가 아무것도 안 해도 최적화 쌉가능 하게    
    >   * code-splitting: 처음부터 프로젝트의 모든 번들링 파일을 주지 않고  사용자가 필요한 부분만 잘라서 제공한다 라는 의미로 이해함 (ssr 이점 중 한 가지 아닌가?)
4. configurable data-fetching
    > 데이터를 어디서(서버냐 클라이언트냐) 어떻게 (한 번만 아니면 주기적으로) 가져 올건지 개발자가 설정할 수 있게
5. anticipating request
    > 사용자의 요청사항을 미리 예상해서 최적화 쌉가능 하게 (html 겁나 만들어 버리기~)
6. simplifying deployment
   > 배포를 겁나 쉽게

## CSR(Client Side Rendering)
### 1. 장점
1. 사용자 친화적이고 빠른 UX 제공 (Single Page Application[SPA])    
    >   * 사용자가 브라우저를 통해 사이트에 첫 방문 시 사이트에 필요한 자원(html, css, js 등등)을 서버로 부터 전부 받아 한 페이에서 모든 메뉴를 이동할 수 있음    

2. 서버 부하가 적음
### 2. 단점
1. TTV(time to view)가 오래 걸림 (사용자가 첫 화면이 나오는 시간이 오래 걸림)    
    >  * FCP(First Contentful paint) 맨 처음 의미 있는 내용이 그려지는걸 의미

2. js 의존적 (브라우저 설정 중 js 활성화 필수)
3. SEO 힘듬
    >  * 맨 처음엔 거의 비어있는 HTML만 있어서 포탈(google, naver 등)의 검색 엔진이 정보를 얻기 어려움
4. 보안에 취약
    >  * 클라이언트에 모든 정보가 있다는 의미는 누구나 코드를 분석해서 정보를 탈취할 수 있다는 의미
5. CDN(Content Delivery Network)에 캐시가 안됨
    >  * 방법이 없는건 아니지만 기본적으론 안됨

## SSG(Static Site Generation)
### 1. 장점
1. CSR의 단점을 보완
    >  * CSR 프로잭트를 빌드할 때 정적 파일로 만들어 버림
### 2. 단점
1. 정적 데이터
    >  * 정적 파일들로 미리 만들기 때문에 동적 데이터를 다뤄야하는 프로젝트엔 적합하지 않음 (사용자별 정보 제공 안됨)

## ISR(Incremental Static Regeneration)
### 1. 장점
1. 정적인 파일에서 동적인 데이터 활용 가능 (SSG 단점 보안)
    >  * 일정 주기로 프로잭트를 다시 빌드해서 데이터를 갱신함
### 2. 단점
1. 실시간 데이터 제공 불가

## SSR(Server Side Rendering)
### 1. 장점
1. 실시간 데이터 제공 가능 (ISR 단점 보안)
    >  * 사용자의 요청에 의한 부분만 빌드해서 제공하기 때문에 요청하는 시점에 맞는 동적 데이터를 제공할 수 있음
2. 보안이 뛰어남
    >  * 클라이언트와 서버로 나눠 프로잭트에 필요한 정보를 구분해서 관리할 수 있기 때문에 민감한 정보를 숨길 수 있음 (db connection 관련 정보를 서버에 보관)
### 2. 단점
1. 서버 과부하 (overhead)
    >  * 사용자의 요청마다 빌드해서 제공하기 때문에 많은 트래픽(traffic)이 몰리면 서버가 힘들어함 (클라우드면 지갑도 힘들어함)
2. CSR, SSG, ISR보다 상대적으로 느림
    >  * 미리 만들어 제공하지 않고 시간이 오래 거리는 데이터 처리 시 끝날 때까지 기다려야 함 
3. CDN 불가
    >  * 미리 만들어 제공하지 않음

## 정리
||SSR|CSR|SSG|ISR|
|:----:|:---:|:---:|:---:|:---:|
|**TTV**|X|O|X|X|
|**SPA**|X|O|O|O|
|**FCP**|O|X|O|O|
|**JS 의존적**|X|O|X|X|
|**SEO**|O|X|O|O|
|**CDN**|X|X|O|O|
|**동적 데이터**|O|O|X|X|


## nextjs Hydration for interaction
1. 뜻
    >  * Hydration 시키다 라는 것은 무언가로 가득 채운다라 이해 하즈아~
2. 의미
    >  * 사용자가 브라우저에 사이트를 요청할 때 필요한 정보를 정적인 파일들만 미리 응답 후 렌더링이 끝나면 동적인 기능을 담당하는 JS(리엑트 컴포넌트 등)를 요청하여 SSG 이점과 CSR 이점을 챙긴다는 의미
3. 방법
    >  * pre-rendering을 통해 정적 파일을 먼저 제공 후 동적 요소들을 제공
4. 단점
    >  * 정적 파일들을 먼저 제공하기 때문에 동적 요소들을 다운 받기 전 까지 동적 기능 사용 불가

## nextjs 개발 시 중요한 포인트
### 1. TTV (Time To View)    
1. 사용자가 요청한 웹 사이트를 얼마나 빠르게 제공할 수 있는 지
### 2. TTI (Time To Interact)
1. 사용자가 요청한 웹 사이트의 정적 파일에 얼마나 빠르게 동적 기능을 제공할 수 있는 지

## nextjs 13 version route
### 1. 이전 버전에선 정적 페이지를 재사용하기 어려웠다.
1. 이전엔 정적 페이지에서 다른 페이지로 이동 시(url 변경) 전부 요청했다.
2. 13버전의 라우팅 시 url에 맞는 각각의 레이아웃을 설정 및 재사용할 수 있어 정적 페이지의 재사용성을 높임
### 2. static routing 폴더 구조 
1. 계층형 폴더 구조로 url로 접근할 수 있음
2. url이 /border/gmae, /border/qna와 같다면 폴더 구조는 다음과 같다. (경로)
    >   / => app 폴더 (Root segment)    
    >   /border => app/border 폴더 (segment)    
    >   /border/game => app/border/game 폴더 (leaf segment)   
    >   /border/qna => app/border/qna 폴더 (leaf segment)
3. 페이지는 url의 leaf segment가 되는 폴더에 page.{js|jsx|tsx} 파일이다.
### 3. file conventions
1. 파일명과 확장자는 정해져있다.
    1. 확장자는 js, jsx, tsx 지원
    2. 파일명
        >   page => leaf segment가 보여줄 페이지   
        >   route => 서버 측에서 접근할 포인트   
        >   layout => 특정 segment에서 공유할 정적 layout    
        >   template => layout파일과 다른점은 동적 layout임 (하위 segment들을 리렌더링 시킴)    
        >   error => 해당 segment의 error ui (리엑트 컴포넌트인 ErrorBoundary 사용)   
        >   global-error => root segment의 error ui (리엑트 컴포넌트인 ErrorBoundary 사용)   
        >   loading => 해당 segment의 loading ui (리엑트 컴포넌트인 Suspense  사용)    
        >   not-fount => 부모 segment에서 자식 segment가 없을 때 보여지는 ui (리엑트 컴포넌트인 ErrorBoundary 사용)
### 4. dynamic routing 폴더 
1.  폴더명을 대괄호 안에 넣는다.
    1. dynamic Segment
        >   /border/gmae과 /border/qna라는 url이 있을 때 app/border/[slug] 
    2. Catch-all Segment
        >   한개 이상의 하위 segment가 있을 때 반응 /[...not-found] => app/[...not-found]    
        >   * 해당 경로에서 page 파일을 만든 후 notFound 함수를 호출하면 프로젝트의 모든 not-found page를 만들 수 있음
    3. Optional Catch-all Segment
        >   현재 segment를 포함하여 모든 segment가 반응 /[[...folderName]] => app/[[...folderName]]
2.  사용 방법
    >   leaf segment의 폴더명이 [slug]일 때 page.tsx 컴포넌트 props에 params 프로퍼티 안에 있는 slug 라는 프로퍼티로 정보를 받을 수 있음 (params.[folderName])
3.  static page 생성
    >   dynamic folder의 page.tsx 컴포넌트에서 generateStaticParams 함수를 정의해서 export 한다.   
    >   * generateStaticParams 함수의 반환 값(return)은 static page를 만들고 싶은 path을 object 형태로 만든 후 배열로 반환 하면 된다. 이 때 object의 key는 dynamic folder명이고 value는 path이다.
    >   * ex) [ { slug: game }, { slug: qna } ]

### 5. Route Groups
1. 폴더명을 소괄호 안에 넣는다.
    >  폴더를 (folderName)으로 만들면 segment에 포함되진 않지만 하위 segment에 공통적인 컴포넌트들(layout, error, template 같은 것들)을 공유할 수 있음

### 6. notfound page
1.  segment별 not-found page
    >   not-found 파일을 만든 후 page 파일이나 자식 segment(폴더)의 page 파일에서 notFound 함수를 호출 (next/navigation 패키지에 있음)
    >   * dynamic routing이 필수적인 것 같음
2.  Global not-found page
    >   Catch-all Segment를 이용하여 만듬
    >   * app/[...not-found] 폴더를 만든 후 page 파일 만들고 notFound 함수를 호출하면 끝
    