import Header from '../../layout/Header';
import LikeMainIndex from './main/LikeMainIndex';
import HeaderTitle from '../../components/HeaderTitle';

export default function LikesIndex() {
  return (
    <>
      <Header>
        <HeaderTitle title="찜 목록" />
      </Header>
      <LikeMainIndex />
    </>
  );
}
