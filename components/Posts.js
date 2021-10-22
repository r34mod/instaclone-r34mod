import Post from "./Post";

const posts = [
    { 
        id: '1234',
        username: 'r34mod',
        userImg: 'https://static-cdn.jtvnw.net/jtv_user_pictures/566101f6-1ef6-4bc3-ba03-e126f5b17bf2-profile_image-300x300.png',
        img: 'https://www.teahub.io/photos/full/197-1972836_crowned-need-for-speed.jpg',
        caption: "COME ON LIKE THIS"
    },
    { 
        id: '1674',
        username: 'crowned',
        userImg: 'https://yt3.ggpht.com/ytc/AKedOLQgwk0zpuegSlaYu5ta6rFqR169ykhgeszZyee7lw=s900-c-k-c0x00ffffff-no-rj',
        img: 'https://c4.wallpaperflare.com/wallpaper/851/499/723/nfs-2015-crowned-need-for-speed-need-for-speed-2015-car-hd-wallpaper-preview.jpg',
        caption: "COME ON LIKE THIS"
    },
    {
        id: '1583',
        username: 'stance_nation',
        userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWz7m1SoxBCV8TvWS6mo7lK9YkvjVl464LGFt76XU3nuq6d-qb&s',
        img: 'https://drivetribe.imgix.net/Fd9sFDG0RF6uwhZtJWBhpA?w=500&h=303&auto=format,compress&fit=crop&crop=faces',
        caption: "lower than the road"
    }

]
function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post 
                    key={post.id} 
                    id={post.id} 
                    username={post.username}
                    userImg={post.userImg} 
                    img={post.img} 
                    caption={post.caption}/>
            ))}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts
