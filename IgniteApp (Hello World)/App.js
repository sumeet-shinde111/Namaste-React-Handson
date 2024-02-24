const heading = React.createElement("h1",{id:"heading", class:"title",xyz:"ABC"},"This is hello from React!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/* 
In above program

CDN 1: it is core of react which has methods like createElement,useRef,useEffect etc.
print React in devtools to see the methods..

CND 2: It provides things that are require to manupalate dom like createRoot,render etc
 print ReactDOM in devtools to see the methods..

 ----------------------------------------------------------------------------------------

 Code Explanation:

IMP methods: 
    createElement()
    createRoot()
    render()

1) To create a h1 tag and render it on browser we need to first create a h1 and text inside it which is done by using createElement
from js but it uses React.createElement which comes from cdn1.
React.createElement takes 3 arguments: 
    1) tag
    2) object
    3) text that is to be rendered in tag

2) Now to append created element on body but inside a div which has id root use ReactDom.createRoot(get div id root using js)
3) We have created an h1 tag and root as well now we have to append that and render it to do so use render method from
   reactDOM.
   i.e root.render(heading);

4) In createElement (tag, {}, "innerhtml text") the second  parameter "{}"" is object which takes attributes i.e id,class etc.
    const heading = React.createElement("h1",
                                        {id:"heading", class:"title", xyz:"ABC"},
                                        "This is hello from React!!");


*/