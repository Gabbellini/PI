import { News } from "../../../domain/entitites/news";
import http from "../http/index";

interface _NewsRepository {
  list(): Promise<Array<News>>;
  get(id: number): Promise<News>;
  edit(news: News): Promise<News>;
  delete(id: number): Promise<News>;
  create(news: News): Promise<News>;
}

class NewsRepository {
  async create(news: News): Promise<News> {
    const response = await http.post("/create/news", news);
    return response.data;
  }

  async list(): Promise<Array<News>> {
    const response = await http.get("/list/news");
    return response.data;
  }

  async get(id: number): Promise<News> {
    const response = await http.get(`/get/news/id/${id}`);
    return response.data;
  }

  async edit(news: News): Promise<News> {
    const response = await http.put(`/update/news/id/${news.ID}`, news);
    return response.data;
  }

  async delete(id: number): Promise<News> {
    const response = await http.delete(`/delete/news/id/${id}`);
    return response.data;
  }
}

export const newsRepository: _NewsRepository = new NewsRepository();
