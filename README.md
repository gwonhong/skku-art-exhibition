## 성균관대학교 미술학과 전시회 아카이브 웹사이트

2023년부터 시작하여, 이후 매년 있을 전시회 작품들을 아카이빙 하는 웹사이트 입니다.

<img width="960" alt="image" src="https://github.com/gwonhong/skku-art-exhibition/assets/75533669/92a26241-1ea7-46e0-a015-d7145348ec64">

감상을 원하는 전시회 - 작품 순으로 클릭하면 해당하는 구글 드라이브 폴더를 보여줍니다.

## 전시회 정보 관리를 위한 파일 구조

### `/src/contact.json`

#### Contact type definition

```TypeScript
export type Contact = {
  [key: string]: string;
};
```

#### JSON file example

```JSON
{
    "이메일" : "test@example.com", 
    "전화번호": "+82-10-xxxx-xxxx", 
    //...
}
```

### `/src/exhibitions.json`

#### Artist, Exhibition type definition

```TypeScript
export type Artist = {
  name: string;
  artworks: string[];
  link: string;
};

export type Exhibition = {
  name: string;
  date: string;
  artists: Artist[];
};

export type Exhibitions = {
  [key: string]: Exhibition;
};
```

#### JSON file example

```JSON
[
    {
        "date": "2023", // 연도가 아닌 날짜로 변경해도 무관. 다만 "."이 들어가지 않는 형식으로 저장할 것(웹 주소에 들어감)
        "name": "전시회 이름",
        "artists": [
            {
                "name": "작가 이름",
                "artworks": ["작품 제목1", "작품 제목2", ...],
                "link": "구글 드라이브 링크"
            },
            //...
        ]
    },
    // 여기에 나열한 순서대로 목록에 나열되므로 원하는 순서대로 전시회 배치
]
```
