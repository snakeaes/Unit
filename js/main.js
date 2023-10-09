let color_theme = true;

Close_welcome_window = () => {
    let wrapper_welcome = document.getElementById("wrapper__welcome_window");
    let wrapper = document.getElementById("wrapper");
    wrapper_welcome.remove();
    wrapper.style.display = "flex"
    delete wrapper_welcome;
    delete wrapper;
}

// setTimeout(Close_welcome_window, 13700);

Switch_color = () => {
    let white_color_ico_path = "./assets/svg/background_white.svg"; 
    let dark_color_ico_path = "./assets/svg/background_black.svg";

    let white_color_theme = "#FFF";
    let dark_color_theme = "#283943";

    let wrapper = document.getElementById("wrapper");

    let color_mode_button = document.getElementById("color__mode_button");

    let color_mode_button_container_white = document.getElementById("color__mode_button_container_white");
    let color_mode_button_container_black = document.getElementById("color__mode_button_container_black")

    let white_color_button_ico = document.getElementById("color__mode_button_container_ico_white");
    let dark_color_button_ico = document.getElementById("color__mode_button_container_ico_black");

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
            wrapper.style.background = `url('${white_color_ico_path}')`
            wrapper.style.backgroundColor = white_color_theme;
            wrapper.style.backgroundRepeat = "no-repeat";
            wrapper.style.backgroundSize = "cover";
            wrapper.style.backgroundAttachment = "local";

            color_mode_button.style.justifyContent = "left";
            color_mode_button.style.borderColor = "#30A2A1"

            dark_color_button_ico.style.display = "none";
            color_mode_button_container_black.style.display = "none";
            
            color_mode_button_container_white.style.display = "block"
            white_color_button_ico.style.display = "block";

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
            wrapper.style.backgroundImage = `url('${dark_color_ico_path}')`
            wrapper.style.backgroundColor = dark_color_theme;
            wrapper.style.backgroundRepeat = "no-repeat";
            wrapper.style.backgroundSize = "cover";
            wrapper.style.backgroundAttachment = "local";

            color_mode_button.style.justifyContent = "right";
            color_mode_button.style.borderColor = "#C8CB35";

            color_mode_button_container_white.style.display = "none";
            white_color_button_ico.style.display = "none";

            color_mode_button_container_black.style.display = "block";
            dark_color_button_ico.style.display = "block";

            color_theme = false;
            break;
    }

    delete white_color_ico_path;
    delete dark_color_ico_path;
    delete white_color_theme;
    delete dark_color_theme;
    delete wrapper;
    delete color_mode_button
    delete color_mode_button_container_white;
    delete color_mode_button_container_black;
    delete white_color_button_ico;
    delete dark_color_button_ico;
}