# ContextFreeTextGenerator
Grammar based Text Generator

 ## Sample Usage
 
 ```
 {
  "origin": ["A"],
  "A": ["abA", "bB"],
  "B": ["cB","c"]
}
```
* Enter a context free grammar rules with start symbol as *origin*
* One of the production rules is selected at random and expanded
* You can specify the recursion depth by modifying *maxDepth* variable

## Demo 
[View Demo](https://aditibaraskar.github.io/ContextFreeTextGenerator)