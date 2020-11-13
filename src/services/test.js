
data = [
    {
        id : "123",
        tags : "Python, Pandas, Textract",
    },
    {
        id : "234",
        tags : "Python, Pandas, Textract",
    },
    {
        id : "345",
        tags : "Python, Pandas, Textract",
    },
];

let search_tags = ['track','artist','album'];

function search(keyword){
    if(keyword.length<1)
        return;

    let results = [];
    console.log("results: ", results);

    for(let i in data){
        for(let u=0;u<search_tags.length;u++){
            let rel = getRelevance(data[i][search_tags[u]],keyword);
            if(rel === 0)
                continue;
            results.push({relevance:rel,entry:data[i]})
        }
    }
    results.sort(compareRelevance);

    for(i=0; i<results.length; i++){
        results[i] = results[i].entry
    }

    return results
}

function getRelevance(value,keyword){
    console.log(value);
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

function compareRelevance(a, b) {
    return b.relevance - a.relevance
}


search("Textract")
