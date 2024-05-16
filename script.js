let post = document.getElementById("firstPost"); 
let postsBox = document.getElementById("postsBox");
let postname = document.getElementById("textposg");
let posttext = document.getElementById("textposd");
let names = ["Adina", "Adilhan", "Danial", "Askar", "Miras", "German", "Leila", "Spartak"];
let posttexts = [
    "Всем привет! Лучший футбольный клуб! Надеемся на победу в этом сезоне",
    "Сегодня был отличный день!",
    "Мне никогда не нравился пере экспрессивный сарказм.",
    "Нажмимай лаййкм пжпжпжпжп!!!!!!",
    "Очень интересно правда?",
    "Здравия желаю, поручик. Листай дальше.",
    "Мой мозг плавиться. И я так и не узнал когда ставится -ться или -тся ААААААААААААААА"
];
let imgurls = [ 
    "https://ir.ozone.ru/s3/multimedia-o/c1000/6562172424.jpg", 
    "https://sun9-48.userapi.com/impg/c857736/v857736574/1edcf9/Wn5tik8AkkA.jpg?size=604x360&quality=96&sign=72b4897889d708d9b499c484ae7c6ee3&type=album", 
    "https://preview.redd.it/%D1%80%D1%83%D0%B1%D1%80%D0%B8%D0%BA%D0%B0-%D1%80%D0%B0%D0%BD%D0%B4%D0%BE%D0%BC%D0%BD%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D0%B8%D0%B7-%D0%BC%D0%BE%D0%B5%D0%B9-%D0%B3%D0%B0%D0%BB%D0%BB%D0%B5%D1%80%D0%B5%D0%B8-v0-qoeah7lk5lzb1.jpg?width=640&crop=smart&auto=webp&s=9f3cd82124a1c82a08f8838ce99c1f10d85da24c", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflhLcxGBmPsdFOdnE3GlK_iyezVeOLUeB0ZSBFLEDx550vS1jWBX8VcOPw3bFIVh4wUs&usqp=CAU", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/BSoD_on_Windows_NT_4_Workstation.png/640px-BSoD_on_Windows_NT_4_Workstation.png", 
    "https://llfalmaty.kz/upload/team_logo/68232_133886_23.jpg" 
];
let avatar = [ 
    "https://img.freepik.com/premium-vector/cartoon-round-avatar-picture-vector-art-illustration_1056-4433.jpg", 
    "https://cdn-icons-png.flaticon.com/512/3665/3665909.png", 
    "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-2.jpg", 
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/491841211.jpg?k=a53a1242bc91427412a9bf1673c2aef161e81b77310a134f8d921b459328b119&o=&hp=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8j27pjkA9sycgOD1UAA-SEcSKe8CKiq6gipdC-yW-euiGRexanqmA5rBHcJxof7cyHo&usqp=CAU", 
    "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png" 
];

    let likeButton = post.getElementsByClassName("likeb")[0];
    likeButton.addEventListener("click", function() {
        this.classList.toggle("liked");
    });


for (let i = 0; i < 100; i++) { 
    let newpost = post.cloneNode(true); 
    let imgpost = newpost.getElementsByClassName("img")[0];
    let imgdude = newpost.getElementsByClassName("ava")[0];
    let likeButton = newpost.getElementsByClassName("likeb")[0];
    imgpost.setAttribute("src", imgurls[i % 6]);
    imgdude.setAttribute("src", avatar[i % 6]); 
    postname.innerHTML = names[i%8];
    posttext.innerHTML = posttexts[i%7];
    likeButton.addEventListener("click", function() {
        this.classList.toggle("liked");
    });

    postsBox.appendChild(newpost); 
}
