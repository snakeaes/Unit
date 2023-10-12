let color_theme = true;
Close__Wrapper_Welcome = () => {
    const wrapper__white_background = document.getElementById("wrapper__white_background");
    const wrapper = document.getElementById("wrapper");
    
    wrapper__welcome.remove();
    wrapper__white_background.style.display = "block"; 
    wrapper.style.display = "flex";

    delete wrapper__welcome;

    delete wrapper__white_background;
} 

setTimeout(Close__Wrapper_Welcome, 5000);

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
            // wrapper.style.background = `url('${white_color_ico_path}')`
            body.style.backgroundColor = white_color_theme;
            // wrapper.style.backgroundRepeat = "no-repeat";
            // wrapper.style.backgroundSize = "cover";
            // wrapper.style.backgroundAttachment = "local";

            white__theme.style.display = "block";
            dark__theme.style.display = "none";

            color_mode_button.style.justifyContent = "left";
            color_mode_button.style.borderColor = "#30A2A1"

            dark_color_button_ico.style.display = "none";
            color_mode_button_container_black.style.display = "none";
            
            color_mode_button_container_white.style.display = "block"
            white_color_button_ico.style.display = "block";

            // content__header.style.color = "#000"
            // content__container.style.color = "#000";

            content__header.forEach(el => {
                el.style.color = "#000"
            })

            content__container.forEach(el => {
                el.style.color = "#000"
            })

            color_theme = true;
            break;
        case true:
            wrapper.animate([
                {backgroundColor: `${white_color_theme}`},
                {backgroundColor: `${dark_color_theme}`}
            ], 
            {
                duration: 200,
                iteration: 1
            })
            // wrapper.style.backgroundImage = `url('${dark_color_ico_path}')`
            body.style.backgroundColor = dark_color_theme;
            // wrapper.style.backgroundRepeat = "no-repeat";
            // wrapper.style.backgroundSize = "cover";
            // wrapper.style.backgroundAttachment = "local";
            dark__theme.style.display = "block";
            white__theme.style.display = "none";

            color_mode_button.style.justifyContent = "right";
            color_mode_button.style.borderColor = "#C8CB35";

            color_mode_button_container_white.style.display = "none";
            white_color_button_ico.style.display = "none";

            color_mode_button_container_black.style.display = "block";
            dark_color_button_ico.style.display = "block";

            // content__header.style.color = "#FFF";
            // content__container.style.color = "#FFF";

            content__header.forEach(el => {
                el.style.color = "#FFF"
            })

            content__container.forEach(el => {
                el.style.color = "#FFF"
            })

            color_theme = false;
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