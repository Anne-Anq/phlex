import Search from '../service/search';
import getPgs from '../service/pgFakeDb'

const photographers = getPgs();


// [
//     { id: 0,
//       fName: 'Tom',
//       lName: 'Jake',
//       tags: ['Food Pixs', 'restaurant ']
//     },
//     { id: 1,
//         fName: 'Bill',
//         lName: 'Raven',
//         tags: ['Wedding photos', 'love', 'dog']
//     }
// ];
const searchText="   Food#%pixs?/vibrant09colours,white^     ";
const searchObj = new Search(photographers, searchText);
const tags = [
                {"id": 0, "tags": ["food", "pix", "vibrant", "colors"]},
                {"id": 2, "tags": ["pet", "pix", "deg"]},
                {"id": 6, "tags": ["black", "white"]}
            ]

let formattedText= '',
    searchWords,
    tagsIds;

describe('Search class',()=>{
    it('should contain an array of tag objects',()=> {
        expect(searchObj.tags).toEqual(tags);
    });
   
    it('should be able to retrieve search text and format it', ()=>{
        formattedText = "Food pixs vibrant colours white";
        expect(searchObj.formatSearchText(searchText)).toEqual(formattedText);
    });
    it('should be able to split search text into an array of words', ()=>{
        searchWords = ["food", "pixs", "vibrant", "colours", "white"];
        expect(searchObj.splitSearchString(searchText)).toEqual(searchWords);
    });
    it('should be able to generate an array of tag objects', () =>{
        expect(searchObj.createTagsBase(photographers)).toEqual(tags)
    });
    it('should be able to create an array of tag ids that match the search tags', () =>{
        tagsIds = [6]
        expect(searchObj.matchTagIds(["white"])).toEqual(tagsIds)
    });
    it('should return photographers whose tags match words in the search text', ()=>{
        expect(searchObj.getSearchResult()[1].id).toEqual(6);
    });
});