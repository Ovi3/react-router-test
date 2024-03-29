/*
使用Routes组件和Route组件的示例
1. Route组件里嵌入Route组件
2. 通过组件动态返回（return）Routes组件

代码参考：https://reactrouter.com/en/main/upgrading/v6-data

*/
import {
    BrowserRouter,
    Route,
    Routes,
    Outlet,
} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="sub1" element={<p>sub1</p>}></Route>
                    <Route path="sub2" element={<p>sub2</p>}></Route>
                    <Route path="sub3">
                        {/* 三层嵌套，且只有一个Route子组件  */}
                        <Route path="inner" element={<h1>innner</h1>} />
                    </Route>
                </Route>
                <Route path="/blog" element={<BlogApp />}></Route>
                <Route path="/users/*" element={<UserApp />} />
                <Route path="*" element={<NotFoundApp />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <>
            <h1>Welcome!</h1>
            <div>
                <Outlet />
            </div>
        </>
    );
}

function BlogApp() {
    return (
        <Routes>
            <Route index element={<h1>Blog Index</h1>} />
            <Route path="posts" element={<h1>Blog Posts</h1>} />
        </Routes>
    );
}

function UserApp() {
    return (
        <Routes>
            <Route index element={<h1>Users Index</h1>} />
            <Route path="1" element={<h1>User 1</h1>} />
            <Route path="2" element={<h1>User 2</h1>} />
        </Routes>
    );
}

function NotFoundApp() {
    return <h2>404 Not Found</h2>;
}
