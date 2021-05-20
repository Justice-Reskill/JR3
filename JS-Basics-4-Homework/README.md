# JavaScript Basics Homework 4

## Requirements & JavaScript Basics Homework 2 Rubric

| Objective            | Proficient | Revise |
| -------------------- | ---------- | ------ |
| Objects              |            |        |
| Parsing through JSON |            |        |
| For..in loops        |            |        |
| For loops            |            |        |

---

## Instructions/Exercises

1. Create a function that uses a for...in loop to examine the phoneBook Object below and print out the names of all the people who share the phone number "333-333-3333".

```

var phoneBook = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
};
```

2. Google Shopping Product Exercises. For these exercises you will be parsing through JSON. It will be provided to you.

   - Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?
   - Print the title of all items with a backorder availability in inventories.
   - Print the title of all items with more than one image link.
   - Print all “Canon” products in the items (careful with case sensitivity).
   - Print all of the items that have an author name of “eBay” and are brand “Canon”.
   - Print all products with their brand, price, and an image link.

   **Hints**

   - We'll be dealing with large JSON objects quite frequently throughout the course. Use a Chrome extension such as JSONView in order to easily collapse arrays and objects during this assignment. Once the extension is installed, access the JSON file via Github by going to products.json, then clicking Raw right above the file.
   - When in doubt, think about the different functions available for strings, objects, and arrays.
   - Double-check your results, especially with #5
   - Documentation
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
     - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
