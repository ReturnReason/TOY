import Image from 'next/image';

export default function Img() {
  return (
    <>
      <Image
        src="/images/iu.jpg"
        alt="img"
        width={450}
        height={800}
        quality={20}
        placeholder="blur"
        blurDataURL="/images/iu.jpg"
      ></Image>
      <div style={{ height: '2000px' }}></div>
      <Image
        src="/images/iuiu.jpg"
        alt="img"
        width={1920}
        height={1080}
        quality={100}
        placeholder="blur"
        blurDataURL="/images/iu.jpg"
      ></Image>

      <div>이미지 사이즈를 모르는 경우 fill</div>
      {/* fill 설정 시 부모 사이즈 따라감 */}
      <figure>
        <Image
          src="/images/iuiu.jpg"
          alt="img"
          fill
          quality={100}
          placeholder="blur"
          blurDataURL="/images/iu.jpg"
        ></Image>
      </figure>
    </>
  );
}

/**
 *       width, height로 이미지 크기 조절 quality (기본값 75? 인듯) placeholder
      blur로 설정하면 다운로드 중에는 블러로 설정 lazy load 자동 적용

      소스 파일이 static 하게 import 되어 Next에서 빌드 타임에 최적화 가능
 * 
 */
