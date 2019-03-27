// this service should be called for the search on the landing page.

/** First get an index (object) of all the tags and their corresponding photographers id 
 * this should run everytime the component mounts/updates so as to get a recent index of tags
 */

/** Write a function to loop through the tags object above 
 * and match the words from the search bar with the tags 
 * returning the respective ids if the photographers with matching tags
 * */

/** Write a function to filter the photographers JSON returning only those photographers with matching ids */

/**Pass the returning photographers list to the resultpage */

class Search {

    constructor(photographersDB){
        this.tags= this.createTagsBase(photographersDB);
    }

    formatSearchText(text) {
        const inValid = /[.,/#!$%?\d\s^&*;:{}=\-_`~()]/g,
              extraSpace = / {1,}/g;
        return text.replace(inValid, ' ').replace(extraSpace, ' ').trim();
    }

    splitSearchString(text) {
        if(typeof(text) !== "string") {
            text = text.toString()
        }
        let searchWords =  this.formatSearchText(text.toLowerCase())
        return searchWords.split(' ');
    }

    createTagsBase(data) {
        const tagsBase = data.map((item) => {
            let newTags = item.tags;
            newTags = this.splitSearchString(newTags)
            const tagsObj= {id:item.id, tags:newTags};
            return tagsObj
        });
        return tagsBase;
    }

   unique = (arr) => {
        const uniqueWords=[];
        arr.forEach((item, index) => {
          !uniqueWords.includes(item) && uniqueWords.push(item)
        })
        return uniqueWords;
      }

    matchTagIds(searchWords) {
        let match = [];
        const tags = this.tags
        tags.forEach(tag => {
            for(let word of searchWords) {
                tag.tags.includes(word) && match.push(tag.id)
            }
        });
    return this.unique(match);
    }

    getSearchResult(searchText) {
        console.log(this.splitSearchString(searchText), "<--final result");



    }

}
export default Search;