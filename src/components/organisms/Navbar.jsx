export default function Navbar() {
    const itemNav = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Course",
            link: "/course",
        },
        {
            name: "About Us",
            link: "/about-us",
        },
        {
            name: "Article",
            link: "/article",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <>

            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {itemNav.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <a class="btn btn-ghost text-xl">mangcoding Store</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        {itemNav.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn">Log In</a>
                    <a class="btn">Register</a>
                </div>
            </div>
        </>
    );
}