import './Content.css';
function Left(){
    return(
        <div className="left">
            <ul>
                <li><a href="/">Cat1</a></li>
                <li><a href="/">Cat2</a></li>
                <li><a href="/">Cat3</a></li>    
            </ul>
        </div>
    )
}

function Right(){
    return(
        <div className =  "right">
            <p> Right 1</p>
            <p> Right 2</p>
            <p> Right 3</p>
            <p> Right 4</p>
        </div>
    )
}

function Content(){
    return(
        <div className = "content">
            <Left/>
            <Right/>
        </div>
    )
}

export default Content;