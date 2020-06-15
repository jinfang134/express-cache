import {Cache} from '../CacheModel';

export class StorageCache implements Cache {

  readonly name: string;
  private storage: Storage;

  constructor(name: string, storage: Storage) {
    this.name = name;
    this.storage = storage;
  }

  keys(): string[] {
    throw new Error('Method not implemented.');
  }

  clear(): void {
    this.storage.clear();
  }

  evict(key: string): void {
    this.storage.removeItem(key);
  }

  get<T>(key: string): T {
    const value: string = this.storage.getItem(key);
    if (!value) {
      return undefined;
    }

    return (JSON.parse(value) as T) || null;
  }

  put<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

}
