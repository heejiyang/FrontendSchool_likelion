# FE3_Github

폴더 터미널에 드래그앤드롭
mac terminal : ctrl + cmd + v

# CLI와 GUI
- CLI
: Command Line Interface

: 코드로 치는 것/명령어로만 작업

: 회사서버의 90%이상은 리눅스 환경

: FE개발자는 유저(개념) 보다는 개발자이기에 터미널과 같이 백지로 작업.

: 은행-VSC사용못할 경우도 많다.

- GUI
: Graphic User Interface
: 클릭으로 하는 것

# Git과 Github
: code로 협업하는데 필요한 솔루션 제공.

1. Git
: 분산 버전 관리 시스템 (소프트웨어)
: 코드와 코드 변경 내역까지 모두 가지고 올 수 있다.
: 형상관리 툴(Git, SVN, CVS)이라고 부른다.
: GitLab, GitHub, Bitbucket 등 다양한 Git 기반 웹 서비스가 있다.

    - 원격 저장소
    : push까지 완료된 내용들이 있는 저장소 (push까지 완료된 git 파일) 코드의 원본이나 변경 내역 저장하는 중요한 역할

    - 로컬 저장소
    : 내가 작업하는 컴퓨터의 저장소 (내가 작업한 내용이 들어있는 git 파일)

2. GitHub
: 루비 온 레일즈로 만들어진(웹 서비스)
: git을 쉽게 쓰기 위한 gui를 지원하는 서비스.
: git을 클라우드 완경에서 사용할 수 있게 제공하는 공간.
: 저장소의 역할 + 커뮤니티 형성 (오픈소스에 기여)

# Git 설정 : 터미널에서 진행.

-  버전/사용자 정보 확인
```bash
버전 확인
$ git --version

사용자 정보 확인
$ git config --global user.name "heeji"
$ git config --global user.email email@example.com
$ git config --list
```

- 저장소 만들기
```bash
작업할 디렉토리 만들고
$ mkdir git-test
생성한 디렉토리로 이동
$ cd git-test

현재 디렉토리를 git저장소로 만들어 원하는 디렉토리 기준으로 버전관리
해당 폴더 기준으로 .git(로컬 저장소) 생성된다.
한 폴더에 하나의 .git가져야 한다.
$ git init
```

- First commit
```bash
작성하는 순서
$ get clone (처음만 해주면 된다. git폴더까지 다 가져온다.)
$ git pull (내가 이미 git폴더 가지고 있고 작업하고 있는 파일도 있는 상태)
$ 내용수정
$ git add .(파일 추가. git이 관리할 대상의 파일 등록.)
$ git commit -m’커밋 메세지 작성’(버전 만들기. 기능 단위 완성)
$ git push

$ touch 001.html 002.html 003.html (세 html파일 만들어진다.)
. : 수정한 내용 전부다 선택
```

- 상태 확인 ($ git status)
1. Untracked(관리 대상이 아님) : 파일 생성 후 한번도 `git add`하지 않은 상태
2. Tracked(관리 대상임) : git이 관리하는 파일
    1. `Unmodified` : 최근의 커밋과 비교했을 때 바뀐 내용이 없는 상태
    2. `Modified` : 최근 커밋과 비교했을 때 바뀐 내용이 있는 상태
    3. `Staged` : 파일이 수정되고 나서 스테이지 공간에 올라와 있는 상태. `git add` 후의 상태

- 변경사항 확인 ($ git diff)
: add전, commit전 최근 commit한 내용과 현재 폴더의 변경 사항을 확인

- 커밋 히스토리 조회 ($ git log)
: q누르면 밖으로 나온다.

- 무시할 파일 추가 ( .gitignore)
: gitignore파일 안에 적힌 파일은 깃에 추적 안된다.
: gitingnore.io (한번에 올릴때)

```bash
만들어보기.

$mkdir heeji  : 폴더 생성

$cd : 상위 폴더 이동

$cd test : test폴더 이동

$cd heeji

$touch test.html : test.html 파일 생성

$vi test.html : 하얀 창 . 실무에서 vim을 사용

i

ESC

:wq! (q!는 저장안하고 나옴)

--------------------------------

$cat test.html

$cd ..

$rmdir heeji : 지우기
```

```bash
$ git --version
$ git config --global [user.name](http://user.name/) "hojun.lee"
$ git config --global user.email [email@example.com](mailto:email@example.com)
$ git config --list
$ git init
$ ls -al
$ touch [README.md](http://readme.md/)
$ git status
$ git add .
$ git commit -m 'first commit'

수정하고

$ git add .

$ git commit -m 'second commit'
```

```bash
우리가 목표하는 명령어(지금 실습하는 명령어 아닙니다.)
git clone repo주소 .
파일 수정이나 추가
git add .
git commit -m 'hello1'
git push

git pull
파일 수정이나 추가
git add .
git commit -m 'hello2'
git push

git pull
파일 수정이나 추가
git add .
git commit -m 'hello3'
git push

* 1인 작업일 때 : 이미 push 했으니 자고 일어나서 그냥 수정하면 된다.

* 여러명과 작업할 때 : 내가 자는 사이에 누가 수정했을 수도 있으니 pull 한다.
```