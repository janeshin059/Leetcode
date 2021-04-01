class Trie { 
  constructor(val = null){
    this.val = val;
    this.children = {};
    this.end = false;
  }

  insert(word){
    let node = this;
    for(let i = 0; i < word.length ; i++){
      if(!node.children[word[i]]) {
      node.children[word[i]] = new Trie(word[i]);
      }
      node = node.children[word[i]];
    }
    node.end = true;
  }
  search(word, skipEnd = false){
    let node = this;
    for(let i = 0; i<word.length; i++){
      if(!node.children[word[i]]){
        return false;
      }else {
        node = node.children[word[i]];
      }
    }
    return skipEnd ? true: node.end;
  }
 startsWith(prefix){
   return this.search(prefix, true);
 }
}