let profiles = [];

async function getData() {
  let res = await fetch(
    "http://localhost:3000/.netlify/functions/app/profiles"
  );
  let data = await res.json();
  profiles = data;
  console.log(profiles);
  try {
    profiles.forEach((profile) => {
      let profileBox = `<div class="profile-box">
                <div class="profile-box-logo"><img src="img/profileImg/${extractFileName(
                  profile.profilePhoto
                )}" alt=""></div>
                <h3 class="profile-heading">${profile.name}</h3>
                <p class="profile-description">${profile.description}</p>
                <a href="#" class="profile-btn">Hire Me</a>
                <div class="profile-box-social">
                    <div class="social-box"><a href="${
                      profile.linkedinId
                    }" target="_blank"><i class='bx bxl-linkedin-square'></a></i></div>
                    <div class="social-box"><a href="./${extractFileName(
                      profile.resume
                    )}" target="_blank"><i class='bx bx-envelope'></i></a></div>   
                </div>
            </div>`;
      console.log(profile.profilePhoto);
      document
        .querySelector(".profile-container")
        .insertAdjacentHTML("beforeend", profileBox);
    });
  } catch (err) {
    console.log(err);
  }
}

getData();

function save() {
  localStorage.setItem("profiles", JSON.stringify(profiles));
}

function clear() {
  profiles = [];
  save();
}
function extractFileName(filePath) {
  const parts = filePath.split("\\");
  return parts[parts.length - 1];
}

if (profiles.length > 0)
  try {
    profiles.forEach((profile) => {
      let profileBox = `<div class="profile-box">
                <div class="profile-box-logo"><img src="img/profileImg/${extractFileName(
                  profile.profilePhoto
                )}" alt=""></div>
                <h3 class="profile-heading">${profile.name}</h3>
                <p class="profile-description">${profile.description}</p>
                <a href="#" class="profile-btn">Hire Me</a>
                <div class="profile-box-social">
                    <div class="social-box"><a href="${
                      profile.linkedinId
                    }" target="_blank"><i class='bx bxl-linkedin-square'></a></i></div>
                    <div class="social-box"><a href="./${extractFileName(
                      profile.resume
                    )}" target="_blank"><i class='bx bx-envelope'></i></a></div>   
                </div>
            </div>`;
      console.log(profile.profilePhoto);
      document
        .querySelector(".profile-container")
        .insertAdjacentHTML("beforeend", profileBox);
    });
  } catch (err) {
    console.log(err);
  }

var name1 = document.getElementById("name1");
var desc = document.getElementById("desc");
var role = document.getElementById("role");
var linkedin = document.getElementById("linkedin");
var profphoto = document.getElementById("profphoto");
var resume = document.getElementById("resume");
function valueadd(e) {
  e.preventDefault();
  var upname = name1.value;
  var updesc = desc.value;
  var uprole = role.value;
  var uplinkedin = linkedin.value;
  var upprofphoto = profphoto.value;
  var upresume = resume.value;
  const newProfile = {
    name: upname,
    description: updesc,
    role: uprole,
    linkedinId: uplinkedin,
    profilePhoto: upprofphoto,
    resume: upresume,
  };
  name1.value =
    desc.value =
    role.value =
    linkedin.value =
    profphoto.value =
    resume.value =
      "";
  fetch("");
  alert("Profile was updated successfully..!");
  e.target.innerHTML = "Profile was updated successfully..!";
  return false;
}
