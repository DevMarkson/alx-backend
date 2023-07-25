# alx-backend - Pagination Project

This repository contains a Python project focused on implementing pagination functionalities for a database of popular baby names. The project consists of three parts, each building on the previous one to add more features and improve the user experience when paginating through the dataset.

## 0. Simple Helper Function

In this initial part, a simple helper function named `index_range` is provided. The function takes two integer arguments: `page` and `page_size`. It returns a tuple containing a start index and an end index corresponding to the range of indexes to return in a list for those specific pagination parameters.

## 1. Simple Pagination

Building upon the simple helper function, the `Server` class is introduced. It helps to paginate a database of popular baby names stored in a CSV file named "Popular_Baby_Names.csv." The class contains a method named `get_page` that allows the user to retrieve specific pages from the dataset based on the given pagination parameters.

## 2. Hypermedia Pagination

In this part, the `get_hyper` method is introduced within the `Server` class. This method is an extension of the previous `get_page` method and returns a dictionary containing various information about the pagination process, such as the current page size, the current page number, the dataset page, the number of the next page, the number of the previous page, and the total number of pages in the dataset.

## 3. Deletion-Resilient Hypermedia Pagination

This final part builds on the previous implementations and introduces the `get_hyper_index` method within the `Server` class. The method allows for pagination while handling potential deletions in the dataset between different pagination queries.

Each part of the project is designed to provide a more efficient and user-friendly way to handle pagination in large datasets, especially when potential deletions can occur between different pagination queries.