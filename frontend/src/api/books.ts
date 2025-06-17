import axios from '../lib/axios';

// 책 목록 요청
export async function getBookList() {
  try {
    const res = await axios.get(`/api/books?type={type}(&:id)&page={ }&limit={ }`);
    return res.data;
  } catch (err) {
    console.log('책 목록 GET 요청 실패 : ', err);
    return err;
  }
}
