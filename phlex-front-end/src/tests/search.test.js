import Search from '../service/search';

const photographers = [
    { id: 0,
      fName: 'Tom',
      lName: 'Jake',
      tags: ['Food Pixs', 'restaurant ']
    },
    { id: 1,
        fName: 'Bill',
        lName: 'Raven',
        tags: ['Wedding photos', 'love', 'dog pixs']
    }
];
const searchObj = new Search(photographers);
const tags = [{id:0, tags: ['food', 'pixs', 'restaurant']},{id:1, tags: ['wedding', 'photos', 'love', 'dog', 'pixs']}]
const searchText="   Food#%pixs?/vibrant09colours^     ";
let formattedText= '',
    searchWords,
    tagsIds;

describe('Search class',()=>{
    it('should contain an array of tag objects',()=> {
        expect(searchObj.tags).toEqual(tags);
    });
   
    it('should be able to retrieve search text and format it', ()=>{
        formattedText = "Food pixs vibrant colours";
        expect(searchObj.formatSearchText(searchText)).toEqual(formattedText);
    });
    it('should be able to split search text into an array of words', ()=>{
        searchWords = ["food","pixs","vibrant","colours"];
        expect(searchObj.splitSearchString(searchText)).toEqual(searchWords);
    });
    it('should be able to generate an array of tag objects', () =>{
        expect(searchObj.createTagsBase(photographers)).toEqual(tags)
    });
    it('should be able to create an array of tag ids that match the search tags', () =>{
        tagsIds = [1]
        expect(searchObj.matchTagIds(["photos"])).toEqual(tagsIds)
    });
    it('should be able to return an array of tag objects that match words in the search text', ()=>{
        expect(searchObj.getSearchResult(formattedText)).toEqual(photographers[0]);
    });
});