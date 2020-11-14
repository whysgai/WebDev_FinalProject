
data = [
    {
        id : "123",
        tags : "Python, Pandas, Textract",
        title : "THis is a title about Python"
    },
    {
        id : "234",
        tags : "Java, AWS, Suicide",
        title : "THis is a title about Javascript"

    },
    {
        id : "345",
        tags : "Javascript, AWS, Heaven",
        title : "THis is a title about AWS"

    },
];

let search_tags = ['tags']; // THe snippet attributes we want to search within, limited to tags right now.

const search = (keyword) => {
    if(keyword.length<1)
        return;

    let results = [];

    for(let i in data){

        for(let u=0;u<search_tags.length;u++){
            let rel = getRelevance(data[i][search_tags[u]], keyword);
            if(rel === 0)
                continue;
            results.push({relevance:rel,entry:data[i]})
        }
    }
    results.sort(compareRelevance);

    for(i=0; i<results.length; i++){
        results[i] = results[i].entry
    }
    console.log(results)
    return results
};

const getRelevance = (value, keyword) => {
    // console.log(value);
    // console.log(keyword);
    value = value.toLowerCase() ;
    keyword = keyword.toLowerCase();

    let index = value.indexOf(keyword) ;
    let word_index = value.indexOf(' '+keyword);

    if(index === 0)
        return 3;
    else if(word_index !== -1)
        return 2 ;
    else if(index !== -1)
        return 1;
    else
        return 0
}

const compareRelevance = (a, b) => {
    return b.relevance - a.relevance
}

// call this function with a keyword to search for
// search("aws");
//
