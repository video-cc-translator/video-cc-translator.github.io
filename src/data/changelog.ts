export type ChangelogType = {
  version: string;
  features?: string[];
  fixes?: string[];
};

export const CHANGELOG: ChangelogType[] = [
  {
    version: 'v2.2.2',
    features: ['플랫폼별 자막 번역 On/Off 토글 버튼 추가 (popup)'],
    fixes: [],
  },
  {
    version: 'v2.2.1',
    features: [],
    fixes: ['태국어 번역 오류 현상 수정'],
  },
  {
    version: 'v2.2.0',
    features: ['Udacity 폐쇄 자막 번역 기능'],
    fixes: ['플랫폼별 스토리지 분리', '메뉴 디자인 변경', '코드 개선'],
  },
  {
    version: 'v2.1.1',
    features: [],
    fixes: ['서비스 설명 문구 수정'],
  },
  {
    version: 'v2.1.0',
    features: ['로고 변경'],
    fixes: [],
  },
  {
    version: 'v2.0.5',
    features: [],
    fixes: ['번역 인코딩 변경'],
  },
  {
    version: 'v2.0.4',
    features: [],
    fixes: ['코드 개선'],
  },
  {
    version: 'v2.0.3',
    features: [],
    fixes: ['Window 설치 에러 현상 수정'],
  },
  {
    version: 'v2.0.2',
    features: [],
    fixes: ['코드 개선'],
  },
  {
    version: 'v2.0.1',
    features: [],
    fixes: ['최초 설치기 옵션 설정 부분 개선', 'Chrome extension locales 추가'],
  },
  {
    version: 'v2.0.0',
    features: [
      '전체 디자인 변경 및 코드 재구성',
      'displayUnderVideo 설정 추가',
    ],
    fixes: [],
  },
  {
    version: 'v1.2.0',
    features: ['폰트 색상 변경 기능'],
    fixes: ['자막 드래그 기능 개선'],
  },
  {
    version: 'v1.1.1',
    features: [],
    fixes: ['자막 드래그 기능 개선'],
  },
  {
    version: 'v1.1.0',
    features: ['신규 언어 추가 기능(Option page)'],
    fixes: [],
  },
  {
    version: 'v1.0.1',
    features: [],
    fixes: ['Chrome extension locales 추가'],
  },
  {
    version: 'v1.0.0',
    features: ['첫번째 릴리즈 배포', 'Udemy 폐쇄 자막 번역 기능'],
    fixes: [],
  },
];
