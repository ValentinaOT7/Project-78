var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg",
"https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg",
"https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg"];
var names = ["Family Book","Khogendra irengbam","kh.Bidyarani","Ricky irengbam","Valentina irengbam","Irengbam Manglambi"];
var i = 0;
function update()
{
    i++;
    var number_of_family_members = 5;
    if(i > number_of_family_members)
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}