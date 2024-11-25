---
title: "Dictionaries in Python 📚"
date: "2024-11-15"
tags: ["Python", "Tutorial", "Programming"]
image: "/images/dictionary.png"
---

# What is a Dictionary in Python?

A dictionary in Python is a built-in data structure that stores data in key-value pairs, where each key is unique and
maps to a specific value.
you can create a dictionary by enclosing key-value pairs in curly braces {}.

```python
my_dict = {
'key1': 'value1',
'key2': 'value2',
'key3': 'value3'
}
```

In this example, we have created a dictionary called my_dict with three key-value pairs.
The keys are 'key1', 'key2', and 'key3', and the corresponding values are 'value1', 'value2', and 'value3'.

# Accessing Values in a Dictionary

To access the value associated with a specific key in a dictionary, you can use the square bracket notation [].

```python
print(my_dict['key1'])
```

This will output the value 'value1'.

You can also use the get() method to access the value associated with a key. If the key does not exist, the get()
method will return None.

```python
print(my_dict.get('key4'))
```

This will output None.

# Modifying Values in a Dictionary

To modify the value associated with a key in a dictionary, you can use the square bracket notation [] and assign a new
value to it.

```python
my_dict['key1'] = 'new_value'
print(my_dict['key1'])
```

This will output 'new_value'.


# Adding a New Key-Value Pair

To add a new key-value pair to a dictionary, you can use the square bracket notation [] and assign a new value to it.

```python
my_dict = {
'key1': 'value1',
'key2': 'value2',
'key3': 'value3'
}
```

You can also use the update() method to add a new key-value pair to a dictionary.

```python
my_dict.update({'key4': 'value4'})
print(my_dict)
```

This will output:

```python
{'key1': 'value1', 'key2': 'value2', 'key3': 'value3', 'key4': 'value4'}
```

# Deleting a Key-Value Pair

To delete a key-value pair from a dictionary, you can use the pop() method.

```python
my_dict = {
'key1': 'value1',
'key2': 'value2',
'key3': 'value3'
}
print(my_dict)
my_dict.pop('key2')
print(my_dict)
```

This will output:

```python
{'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}
{'key1': 'value1', 'key3': 'value3'}
```

# Conclusion

Dictionaries are a powerful data structure in Python that allow you to store and manipulate data in key-value pairs.
By understanding how to create, access, modify, add, and delete key-value pairs in a dictionary, you can effectively
work with data in Python.

Thank you for reading this blog, don't forget to like it and share it to your friends! 😊
