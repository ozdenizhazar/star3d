window.onload = () => {
    const SW = 600
    const SH = 400
    const stars = [];
    const count = 200;

    const screen = document.createElement("div");
    const stl = {
        backgroundColor: "black",
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
        width: SW + "px",
        height: SH + "px",
        margin: "10px auto",
        border: "solid 4px #fff",
        backgroundImage: "url(./andromeda.jpeg)"
    }

    Object.assign(screen.style, stl);
    document.body.append(screen);
    document.body.style.backgroundColor = "#777";

    for (let s = 0; s <= count; s++) {
        let star = document.createElement("div");
        star.x = Math.round(Math.random() * SW);
        star.y = Math.round(Math.random() * SH);
        star.z = Math.round(Math.random() * 100);

        let sts = {
            backgroundColor: "white",
            position: "absolute",
            width: "2px",
            height: "2px",
            borderRadius: "50%"
        }

        Object.assign(star.style, sts);
        stars.push(star);
        screen.append(star);
    }

    setInterval(() => {
        for (let star of stars) {
            star.style.left = SW / 2 + ((SW / 2 - star.x) / star.z) * 50 + "px";
            star.style.top = SH / 2 + ((SH / 2 - star.y) / star.z) * 50 + "px";
            if (star.z > 2) star.z--;
            else star.z = 100;
            star.style.width = 10 - star.z / 10 + "px";
            star.style.height = 10 - star.z / 10 + "px";
            let col = 100 - star.z;
            star.style.backgroundColor = `rgb(${col},${col},${col})`;
        }
    }, 50);
}