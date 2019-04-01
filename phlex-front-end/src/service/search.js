class Search {

    constructor(photographersDB, search){
        this.photographers = photographersDB;
        this.tags= this.createTagsBase(photographersDB);
        this.search= this.splitSearchString(search);
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
        
        if (searchWords[0] !== ""){
            let match = [];
        const tags = this.tags
        tags.forEach(tag => {
            for(let word of searchWords) {
                tag.tags.includes(word) && match.push(tag.id)
            }
        });
        return this.unique(match);
        }
        return this.photographers.map(pg => pg.id);
    }

    getSearchResult() {
        const userSearch = this.search;
        const matchedPGs = this.matchTagIds(userSearch)
        const searchResult = this.photographers.filter(photographer => {
            return matchedPGs.includes(photographer.id) && photographer
        });
        return searchResult;
    }

}
export default Search;