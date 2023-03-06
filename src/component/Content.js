import './Content.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Left() {
    return (
        <div className="left">
            <ul>
                <li><a href="/cat1">Cat1</a></li>
                <li><a href="/cat2">Cat2</a></li>
                <li><a href="/cat3">Cat3</a></li>
            </ul>
        </div>
    )
}
function Cat1() {
    return (
        <h1>Cat1</h1>
    )

}
function Cat2() {
    return (
        <h1>Cat2</h1>
    )
}
function Cat3() {
    return (
        <h1>Cat3</h1>
    )
}
function Right() {
    return (
        // <BrowserRouter>
            <div className="right">
                <Routes>
                    <Route path="/cat1" element={<Cat1 />}></Route>
                </Routes>
                <Routes>
                    <Route path="/cat2" element={<Cat2 />}></Route>
                </Routes>
                <Routes>
                    <Route path="/cat3" element={<Cat3 />}></Route>
                </Routes>
            </div>
        // </BrowserRouter>
    )
}

function Content() {
    return (
        <div className="content">
            <Left />
            <Right />
        </div>
    )
}

export default Content;