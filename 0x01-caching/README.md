# 0x01-caching

This repository contains Python implementations of different caching systems using inheritance and various caching algorithms. The caching systems are implemented as classes that inherit from the `BaseCaching` class.


## 1. Basic Cache

### Description
The `BasicCache` class is a simple caching system that inherits from `BaseCaching`. It uses a dictionary `self.cache_data` to store key-value pairs without any limit on the number of items it can hold. It provides methods to put items into the cache (`put`) and retrieve items from the cache (`get`).

### Methods
1. `put(self, key, item)`: This method assigns the item value to the given key in the `self.cache_data` dictionary. If either the key or item is `None`, the method does nothing.

2. `get(self, key)`: This method retrieves the value associated with the given key from the `self.cache_data` dictionary. If the key is `None` or if the key doesn't exist in the cache, the method returns `None`.

## 2. FIFO Cache

### Description
The `FIFOCache` class is a caching system that inherits from `BaseCaching` and implements the First-In-First-Out (FIFO) caching algorithm. It uses a dictionary `self.cache_data` to store key-value pairs and has a maximum capacity of `BaseCaching.MAX_ITEMS`. When the capacity is exceeded, the least recently added item is discarded.

### Methods
1. `put(self, key, item)`: This method assigns the item value to the given key in the `self.cache_data` dictionary. If either the key or item is `None`, the method does nothing. If the number of items in the cache exceeds the maximum capacity, the method discards the first item added to the cache using the FIFO algorithm.

2. `get(self, key)`: This method retrieves the value associated with the given key from the `self.cache_data` dictionary. If the key is `None` or if the key doesn't exist in the cache, the method returns `None`.

## 3. LIFO Cache

### Description
The `LIFOCache` class is a caching system that inherits from `BaseCaching` and implements the Last-In-First-Out (LIFO) caching algorithm. It uses a dictionary `self.cache_data` to store key-value pairs and has a maximum capacity of `BaseCaching.MAX_ITEMS`. When the capacity is exceeded, the most recently added item is discarded.

### Methods
1. `put(self, key, item)`: This method assigns the item value to the given key in the `self.cache_data` dictionary. If either the key or item is `None`, the method does nothing. If the number of items in the cache exceeds the maximum capacity, the method discards the last item added to the cache using the LIFO algorithm.

2. `get(self, key)`: This method retrieves the value associated with the given key from the `self.cache_data` dictionary. If the key is `None` or if the key doesn't exist in the cache, the method returns `None`.

## 4. LRU Cache

### Description
The `LRUCache` class is a caching system that inherits from `BaseCaching` and implements the Least Recently Used (LRU) caching algorithm. It uses a dictionary `self.cache_data` to store key-value pairs and has a maximum capacity of `BaseCaching.MAX_ITEMS`. When the capacity is exceeded, the least recently used item is discarded.

### Methods
1. `put(self, key, item)`: This method assigns the item value to the given key in the `self.cache_data` dictionary. If either the key or item is `None`, the method does nothing. If the number of items in the cache exceeds the maximum capacity, the method discards the least recently used item using the LRU algorithm.

2. `get(self, key)`: This method retrieves the value associated with the given key from the `self.cache_data` dictionary. If the key is `None` or if the key doesn't exist in the cache, the method returns `None`.

## 5. MRU Cache

### Description
The `MRUCache` class is a caching system that inherits from `BaseCaching` and implements the Most Recently Used (MRU) caching algorithm. It uses a dictionary `self.cache_data` to store key-value pairs and has a maximum capacity of `BaseCaching.MAX_ITEMS`. When the capacity is exceeded, the most recently used item is discarded.

### Methods
1. `put(self, key, item)`: This method assigns the item value to the given key in the `self.cache_data` dictionary. If either the key or item is `None`, the method does nothing. If the number of items in the cache exceeds the maximum capacity, the method discards the most recently used item using the MRU algorithm.

2. `get(self, key)`: This method retrieves the value associated with the given key from the `self.cache_data` dictionary. If the key is `None` or if the key doesn't exist in the cache, the method returns `None`.

## 6. LFU Cache

### Description
The `LFUCache` class is a caching system that inherits from `BaseCaching` and implements the Least Frequently Used (LFU) caching algorithm. It uses a dictionary `self.cache_data` to store key-value pairs and has a maximum capacity of `BaseCaching.MAX_ITEMS`. When the capacity is exceeded, the least frequently used item is discarded. If there are multiple items with the same usage frequency, the LRU algorithm is used to select the item to discard.

### Methods
1. `put(self, key, item)`: This method assigns the item value to the given key in the `self.cache_data` dictionary. If either the key or item is `None`, the method does nothing. If the number of items in the cache exceeds the maximum capacity, the method discards the least frequently used item using the LFU algorithm. If multiple items have the same frequency, the LRU algorithm is used to select the item to discard.

2. `get(self, key)`: This method retrieves the value associated with the given key from the `self.cache_data` dictionary. If the key is `None` or if the key doesn't exist in the cache, the method returns `None`.

