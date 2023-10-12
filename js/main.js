let color_theme = true;
const body = document.querySelector("body");
Close__Wrapper_Welcome = () => {
    const wrapper__white_background = document.getElementById("wrapper__white_background");
    const wrapper = document.getElementById("wrapper");
    
    wrapper__welcome.remove();
    wrapper__white_background.style.display = "block"; 
    wrapper.style.display = "flex";

    delete wrapper__welcome;

    delete wrapper__white_background;
} 

setTimeout(() => {
    Close__Wrapper_Welcome();
    Check();
}, 5000);

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  
  // Проверка на планшет iOS
  function isiOSTablet() {
    return /iPad/i.test(navigator.userAgent) && !window.MSStream;
  }
  
  // Проверка на планшет Android
  function isAndroidTablet() {
    return /Android/i.test(navigator.userAgent) && /Mobile/i.test(navigator.userAgent);
  }

function Check() {
    if (isMobileDevice()) {
        if (isiOSTablet()) {
          // Действия, если это планшет iOS
          console.log("Пользователь использует планшет на iOS");
          const wrapper = document.querySelector('#wrapper__white_background').style.display = "none";
          const img = document.querySelector('.wrapper__white_background_animnone');
          img.style.display = "block";
          return true;
        } else if (isAndroidTablet()) {
          // Действия, если это планшет Android
          console.log("Пользователь использует планшет на Android");
          const wrapper = document.querySelector('#wrapper__white_background').style.display = "none";
          const img = document.querySelector('.wrapper__white_background_animnone');
          img.style.display = "block";
          return true;
        } else {
          // Действия, если это мобильный телефон
          console.log("Пользователь использует телефон на Android");
          const wrapper = document.querySelector('#wrapper__white_background').style.display = "none";
          const img = document.querySelector('.wrapper__white_background_animnone');
          img.style.display = "block";
          return true;
        }
      } else {
        // Действия, если это не мобильное устройство
        console.log("Пользователь использует другое устройство (не мобильное)");
        return false;
      }
}

Switch_color = () => {
    const white__theme = document.getElementById('wrapper__white_background');
    const dark__theme = document.getElementById('wrapper__dark_background');

    const white_color_theme = "#FFF";
    const dark_color_theme = "#283943";

    const body = document.querySelector("body");
    const wrapper = document.getElementById("wrapper");

    const color_mode_button = document.getElementById("color__mode_button");

    const color_mode_button_container_white = document.getElementById("color__mode_button_container_white");
    const color_mode_button_container_black = document.getElementById("color__mode_button_container_black")

    const white_color_button_ico = document.getElementById("color__mode_button_container_ico_white");
    const dark_color_button_ico = document.getElementById("color__mode_button_container_ico_black");

    const content__header = document.querySelectorAll("#content__header");
    const content__container = document.querySelectorAll("#content__container");

    switch (color_theme) {
        case false:
            wrapper.animate([
                {backgroundColor: `${dark_color_theme}`},
                {backgroundColor: `${white_color_theme}`}
            ], 
            {
                duration: 200,
                iteration: 1
            })

            if (Check()) {
              body.style.backgroundColor = white_color_theme;

              white__theme.style.display = "none";
              dark__theme.style.display = "none";
  
              color_mode_button.style.justifyContent = "left";
              color_mode_button.style.borderColor = "#30A2A1"
  
              dark_color_button_ico.style.display = "none";
              color_mode_button_container_black.style.display = "none";
              
              color_mode_button_container_white.style.display = "block"
              white_color_button_ico.style.display = "block";

              document.getElementById("wrapper__dark_background_animnone").style.display = "none";
              document.getElementById("wrapper__white_background_animnone").style.display = "block";

              content__header.forEach(el => {
                el.style.color = "#000"
            })

            content__container.forEach(el => {
                el.style.color = "#000"
            })

            color_theme = true;
            break;
            }
            else {
              body.style.backgroundColor = white_color_theme;

              dark__theme.style.display = "none";
              white__theme.style.display = "block";
  
              color_mode_button.style.justifyContent = "left";
              color_mode_button.style.borderColor = "#30A2A1"
  
              dark_color_button_ico.style.display = "none";
              white_color_button_ico.style.display = "block";
  
              color_mode_button_container_white.style.display = "block";
              color_mode_button_container_black.style.display = "none";

              content__header.forEach(el => {
                el.style.color = "#000";
            })

            content__container.forEach(el => {
                el.style.color = "#000";

                color_theme = true;
            })
            break;
            }

        case true:
            wrapper.animate([
                {backgroundColor: `${white_color_theme}`},
                {backgroundColor: `${dark_color_theme}`}
            ], 
            {
                duration: 200,
                iteration: 1
            })

            if (Check()) {
              body.style.backgroundColor = dark_color_theme;

              dark__theme.style.display = "none";
              white__theme.style.display = "none";
  
              color_mode_button.style.justifyContent = "right";
              color_mode_button.style.borderColor = "#C8CB35";
  
              color_mode_button_container_white.style.display = "none";
              white_color_button_ico.style.display = "none";
  
              color_mode_button_container_black.style.display = "block";
              dark_color_button_ico.style.display = "block";

              document.getElementById("wrapper__white_background_animnone").style.display = "none";
              document.getElementById("wrapper__dark_background_animnone").style.display = "block";

              content__header.forEach(el => {
                el.style.color = "#FFF";
            })

            content__container.forEach(el => {
                el.style.color = "#FFF";

            })
            color_theme = false;
            }
            else {
              body.style.backgroundColor = dark_color_theme;

              dark__theme.style.display = "block";
              white__theme.style.display = "none";
  
              color_mode_button.style.justifyContent = "right";
              color_mode_button.style.borderColor = "#C8CB35";
  
              color_mode_button_container_white.style.display = "none";
              white_color_button_ico.style.display = "none";
  
              color_mode_button_container_black.style.display = "block";
              dark_color_button_ico.style.display = "block";

              content__header.forEach(el => {
                el.style.color = "#FFF";
            })

            content__container.forEach(el => {
                el.style.color = "#FFF";
            })
            color_theme = false;
            }
            break;
    }

    delete white__theme;
    delete dark__theme;
    delete white_color_theme;
    delete dark_color_theme;
    delete body;
    delete wrapper;
    delete color_mode_button
    delete color_mode_button_container_white;
    delete color_mode_button_container_black;
    delete white_color_button_ico;
    delete dark_color_button_ico;
    delete content__info_company;
    delete content__info_projects;
    delete content__info_contacts;
    delete content__container;
    delete content__header;
}

const animateElements = document.querySelector("#wrapper__white_background");

// Проходимся по каждому элементу и удаляем соответствующие атрибуты
console.log(animateElements);