function App(){
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [color, setColor] = React.useState('#16a085');

    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex]);
        }
        fetchData();
    }, []);
    
    const getNewQuote = () => {
        let colors=[
                '#16a085',
                '#27ae60',
                '#2c3e50',
                '#f39c17',
                '#e74c3c',
                '#9b59b6',
                '#FB6964',
                '#342224',
                "#472E32",
                "#BDBB99",
                "#77B1A9",
                "#73A857",
            ];
            let randIndex = Math.floor(Math.random() * quotes.length);
            const randColorIndex = Math.floor(Math.random() * colors.length);
            setRandomQuote(quotes[randIndex]);
            console.log(colors[randColorIndex]);
            setColor(colors[randColorIndex]);
        }        
        return (
            <div style={{backgroundColor: color, minHeight:'200vh'}}>
        <div className='container pt-5'>
            <div className='jumbotron'>
                <div className='card'>
                    <div className='card-header'>Inspirational Quotes
                    <div className='card-body'>
                        {randomQuote ? (
                            <>
                            <h5 className='card-text'>  {randomQuote.text||""} </h5>
                            <h5 className='card-title float-right'> - {randomQuote.author||""} </h5>
                            </>
                        ) : (
                            <h2>Loading...</h2>
                        )}
                        <div className="row mt-5 ">
                            <button className='btn btn-primary ml-3' onClick={getNewQuote}>New Quote</button>
                            <a className='btn btn-warning ml-1' target="_blank" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(
                                '"' + (randomQuote.text||"") + '"  -' + (randomQuote.author||"")
                            )}><i className="fa-brands fa-twitter"></i></a>
                            <a className='btn btn-secondary ml-1' target="_blank" href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+
                            encodeURIComponent(randomQuote.text)+ "&content="+ encodeURIComponent(randomQuote.text+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button")}><i className="fa-brands fa-tumblr"></i></a>
                            </div>
                    </div>
                    </div>
                </div>
            </div><div><i>made with 🧡 by shivamsinghydv</i></div>
        </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));