<template>
    <div class="container">
        <h1>Projects</h1>
        <div class="project-container">
            <div v-for="project in projects" :key="project.id">
                <Project :project="project">
                </Project>
            </div>
        </div>
    </div>
</template>

<script>
import Project from '@/components/Project';

export default {
    components: {
        Project
    },
    data: () => {
        return {
            projects : [
                {
                    id: 1,
                    title: "Derien",
                    description: "An e-commerce website using PHP (Laravel) for the brand derien&trade;. It is a full-stack application with Stripe&trade; and Paypal&trade; integrated.",
                    live: "https://derienshop.com",
                    github: "https://github.com/BaptisteAuscher/derienshop",
                    image_link: "https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg",
                    image_description: "An Image of the website"
                },
                {
                    id: 2,
                    title: "Batause Map",
                    description: "A VueJs and ExpressJs application which displays a map using Mapbox and mongoDB. This full-stack application is a travel log with a database that associates users and their recent travels around the world.",
                    live: "https://derienshop.com",
                    github: "https://github.com/BaptisteAuscher/derienshop",
                    image_link: "https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg",
                    image_description: "An Image of the website"
                },
                {
                    id: 3,
                    title: "Batause Map",
                    description: "A VueJs and ExpressJs application which displays a map using Mapbox and mongoDB.",
                    live: "https://derienshop.com",
                    github: "https://github.com/BaptisteAuscher/derienshop",
                    image_link: "https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg",
                    image_description: "An Image of the website"
                },
                {
                    id: 4,
                    title: "Batause Map",
                    description: "A VueJs and ExpressJs application which displays a map using Mapbox and mongoDB.",
                    live: "https://derienshop.com",
                    github: "https://github.com/BaptisteAuscher/derienshop",
                    image_link: "https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/code-editoren-t.jpg",
                    image_description: "An Image of the website"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/__variables.scss';

.container {
    width: 80vw;
    margin: 50px auto;

    h1 {
        margin: 0;
        text-align: left;
    }

    .project-container {
        display: flex;
        flex-wrap: wrap;
        justify-self: center;
        margin-top: 50px;
        
        
    }
}
</style>