import axios from 'axios';

export async function getFeedbacks() {
  try {
    const { data } = await axios.get('http://localhost:8080/feedback');
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function addFeedback(data) {
  try {
    await axios({
      method: 'post',
      url: 'http://localhost:8080/feedback',
      data: {
        ...data,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
