import axios from '../lib/axios';

// 책 '목록' GET
export async function getBookList(type: string, page: number, limit: number) {
  try {
    const res = await axios.get(`/api/books?type=${type}&page=${page}&limit=${limit}`);
    return res.data;
  } catch (err) {
    console.log('책 목록 GET 요청 실패 : ', err);
    return err;
  }
}

// 책 '상세' GET
export async function getBookDetail(isbn13: number) {
  try {
    const res = await axios.get(`/api/books/${isbn13}`);
    return res.data;
  } catch (err) {
    console.log('책 목록 GET 요청 실패 : ', err);
    return err;
  }
}
