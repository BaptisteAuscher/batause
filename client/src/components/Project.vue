<template>
  <div class="project">  
      <img :src="project.image_link" :alt="project.image_description" class="image">
      <div class="project-name">
          <h3>{{project.title}}</h3>
      </div>
      <div class="project-description">
          <p v-html="project.description" :class="[showDescription ? 'show' : 'hide']"></p>
      </div>
      <p @click="descriptionToggle" class="view-more"  >{{moreOrLess}}</p>
      <div class="links">
            <a :href="project.live" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                <span>Live Project</span>
            </a>
            <a :href="project.github" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>Github Repo</span>
            </a>
      </div>
  </div>
</template>

<script>
export default {
    props : {
        project: Object
    },
    data : () => {
        return {
            moreOrLess: 'Show more ...',
            showDescription: false,
        }
    },
    methods: {
        descriptionToggle () {
            if (this.showDescription) {
                this.showDescription = false;
                this.moreOrLess = 'Show more ...';

            } else {
                this.showDescription = true;
                this.moreOrLess = 'Show less ...';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/__variables.scss';

.project {
    margin: 0 0 30px 50px;
    width: 300px;
    //border: 1px solid $green;
    color: $green;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    background-color: $white;

    .project-name {
        & > h3 {
            margin-top: 10px;
            margin-left: 20px;
            color: $dark-grey;
        }
    }

    .project-description {
        padding: 0 10px;
        & > p {
            line-height: 1.1em;
            color: $dark-grey;
            margin: 5px 0 0 0;
            max-height: 7.7em;
            overflow: hidden;
            text-indent: 20px;
            text-align: justify;
            font-size: .9em;
            transition: all .3s ease-in;

            &.hide {
                max-height: 2.2em;
                overflow: hidden;
            }
        }
    }

    .view-more {
        color: rgba($dark-grey, 0.7);
        margin: 0 10px;
        padding: 0;
        font-size: .9em;
        cursor: pointer;
    }

    .image {
        width: 300px;
        margin: 0;
        padding: 0;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    h3 {
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .links {
        display: flex;
        width: 300px;

        a {
            text-decoration: none;
            color: $green;
            width: 150px;
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px 20px;
            transition: all .3s ease;
            margin-top: 10px;
            
            & > svg {
                stroke: $green;
                width: 15px;
                height: 15px;
            }

            &:hover {
                background-color: rgba($green, 0.2);
            }
        }
    }

    
}
.test {
    width: 20px;
    height: 20px;
    background-color: red;
    transition: height .8s linear;

    &.hide {
        height: 50px;
    }
}
</style>