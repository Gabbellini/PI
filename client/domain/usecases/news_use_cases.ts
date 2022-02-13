import { newsRepository } from "../../infraestructure/repository/impl/news_repository";
import { News } from "../entitites/news";

interface _NewsUseCases {
  list(): Promise<Array<News>>;
  get(id: number): Promise<News>;
  edit(news: News): Promise<News>;
  delete(id: number): Promise<News>;
  create(news: News): Promise<News>;
}

class NewsUseCases {
  async create(news: News) {
    return await newsRepository.create(news);
  }

  async list() {
    return await newsRepository.list();
  }

  async get(id: number) {
    return await newsRepository.get(id);
  }

  async edit(news: News) {
    return await newsRepository.edit(news);
  }

  async delete(id: number) {
    return await newsRepository.delete(id);
  }
}

export const newsUseCases: _NewsUseCases = new NewsUseCases();
