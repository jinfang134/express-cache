/*
 * Public API Surface of cache
 */

export { CacheConfig, Cacheable, CacheEvict, CachePut } from './lib/CacheDecorator';
export { CacheManager } from './lib/cache-manager/CacheManager';
export { SimpleCacheManager } from './lib/cache-manager/SimpleCacheManager';
export { getCacheManager, EnableCaching } from './lib/CacheInstance';
export { Cache } from './lib/CacheModel';
export { NoOpCache } from './lib/impl/no-op-cache';
export { MemoryCache } from './lib/impl/MemoryCache';
export { DefaultKeyGenerator } from './lib/key-generator/KeyGenerator';
export * from './lib/utils'