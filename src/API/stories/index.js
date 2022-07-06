
export const fetchTS = async cb => {
    const result = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', { method: 'GET', headers: { Accept: 'application/json', 'Content-type': 'application/json'}, },);
    const json = await result.json();
    const stories = await Promise.all(
      json.map(async id => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const comments = res.json();
        return comments;
      }),
    );
    cb(stories);
  };