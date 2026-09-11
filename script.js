const projects = {

    "baby-chair": {

        title: "Baby Chair Mold",

        category: "PLASTIC INJECTION MOLD",

        images: [
            "images/Plastic injection molds/Baby chair/Baby chair.jpg",
            "images/Plastic injection molds/Baby chair/Baby chair1.jpg"
        ],

        videos: []

    },


    "door-stopper": {

        title: "Door Stopper Mold",

        category: "PLASTIC INJECTION MOLD",

        images: [
            "images/Plastic injection molds/Door Stopper/Door_stopper.jpg",
            "images/Plastic injection molds/Door Stopper/Door_stopper1.jpg"
        ],

        videos: [
            "images/Plastic injection molds/Door Stopper/Door_stopper_open_close.mp4",
            "images/Plastic injection molds/Door Stopper/mold_professional_door_stopper.mp4"
        ]

    },


    "plastic-containers": {

        title: "Plastic Containers",

        category: "PLASTIC INJECTION MOLD",

        images: [
            "images/Plastic injection molds/Plastic containers/Plastic containers.jpg"
        ],

        videos: [
            "images/Plastic injection molds/Plastic containers/Plastic containers.mp4",
            "images/Plastic injection molds/Plastic containers/Plastic containers1.mp4"
        ]

    },


    "shampoo-machine": {

        title: "Shampoo Mixing Machine",

        category: "MACHINE DESIGN",

        images: [
            "images/Machines/Shampoo mixing machine/Shampoo mixing machine (1).png",
            "images/Machines/Shampoo mixing machine/Shampoo mixing machine (2).png",
            "images/Machines/Shampoo mixing machine/Shampoo mixing machine (3).png",
            "images/Machines/Shampoo mixing machine/Shampoo mixing machine (4).jpg"
        ],

        videos: []

    },


    "granule-machine": {

        title: "Plastic Granule Recycling Machine",

        category: "MACHINE DESIGN",

        images: [
            "images/Machines/Plastic granule recycling machine/Plastic granule recycling machine (1).jpg",
            "images/Machines/Plastic granule recycling machine/Plastic granule recycling machine (1).png",
            "images/Machines/Plastic granule recycling machine/Plastic granule recycling machine (2).png",
            "images/Machines/Plastic granule recycling machine/Plastic granule recycling machine (3).png",
            "images/Machines/Plastic granule recycling machine/Plastic granule recycling machine (4).png"
        ],

        videos: []

    },


    "cnc-machine": {

        title: "CNC Machine",

        category: "MACHINE DESIGN",

        images: [
            "images/Machines/cnc/cnc (1).jpg",
            "images/Machines/cnc/cnc (1).png",
            "images/Machines/cnc/cnc (2).png",
            "images/Machines/cnc/cnc (3).png",
            "images/Machines/cnc/cnc (4).png"
        ],

        videos: []

    },


    "3d-printer": {

        title: "3D Printer",

        category: "MACHINE DESIGN",

        images: [
            "images/Machines/3d printer/3d printer (1).png",
            "images/Machines/3d printer/3d printer (2).png",
            "images/Machines/3d printer/3d printer (3).png",
            "images/Machines/3d printer/3d printer (4).png"
        ],

        videos: []

    }

};


function openProject(projectId) {

    const project = projects[projectId];

    if (!project) {
        return;
    }


    const modal = document.getElementById("projectModal");

    const modalContent = document.getElementById("modalContent");


    let content = "";

    content += `
        <h2 class="modal-title">
            ${project.title}
        </h2>

        <p class="modal-category">
            ${project.category}
        </p>
    `;


    if (project.images.length > 0) {

        content += `
            <div class="modal-gallery">
        `;


        project.images.forEach(function(image) {

            content += `
                <img
                    src="${image}"
                    alt="${project.title}"
                >
            `;

        });


        content += `
            </div>
        `;

    }


    if (project.videos.length > 0) {

        project.videos.forEach(function(video) {

            content += `
                <div class="modal-video">

                    <video
                        controls
                        preload="metadata"
                    >

                        <source
                            src="${video}"
                            type="video/mp4"
                        >

                        Your browser does not support video playback.

                    </video>

                </div>
            `;

        });

    }


    modalContent.innerHTML = content;

    modal.classList.add("active");

    document.body.classList.add("modal-open");

}


function closeProject() {

    const modal = document.getElementById("projectModal");

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");


    const videos = modal.querySelectorAll("video");

    videos.forEach(function(video) {

        video.pause();

    });

}


document.getElementById("projectModal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {

            closeProject();

        }

    }
);


document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProject();

        }

    }
);


console.log("Abdulrahman Jesri Portfolio loaded successfully.");