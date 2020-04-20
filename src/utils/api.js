import axios from 'axios';

const service = "https://jsonplaceholder.typicode.com";
const usersEndPoint = '/users'
const PostsEndPoint = '/posts'

export async function fetchTestimonialPosts() {
  const url = `${service}${PostsEndPoint}`

  try {
    const response = await axios.get(url);
    console.log("posts", response);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function fetchTestimonialUsers() {

  const url = `${service}${usersEndPoint}`

  try {
    const response = await axios.get(url);
    console.log("users", response);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }

}