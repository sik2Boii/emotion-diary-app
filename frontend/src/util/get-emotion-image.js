// 자주 사용하는 소수의 이미지는 assets 폴더에 저장하면, Vite에서 캐싱을 제공해 성능이 최적화됩니다.
// assets 폴더에 저장된 이미지는 import문을 통해서만 불러올 수 있습니다.
import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

// public 폴더에 저장된 파일은 절대 경로로 직접 접근해야 하며, 빌드 시 최적화가 적용되지 않고 원본 그대로 저장됩니다.

// getEmotionImage 함수
export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
