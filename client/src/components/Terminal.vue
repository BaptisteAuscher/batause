<template>
  <div id="terminal">
      <div class="close-tab">
          <div class="circle red"></div>
          <div class="circle yellow"></div>
          <div class="circle green"></div>
      </div>
      <h1 class="title">Hello <span class="word-to-type">{{ typedValue }}</span></h1>
      <div class="console">
            <p>$</p>
            <div class="typebar"></div>
      </div>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            typedValue: '',
            words: ['Entrepreneurs', 'Content Creators', 'Visionaries'],
            word: '',
            charIndex: 0,
            wordIndex: 0
        }
    },
    methods: {
        type () {
            this.word = this.words[this.wordIndex];
            if (this.charIndex <= this.word.length) {
                this.typedValue = this.word.substring(0, this.charIndex);
                this.charIndex += 1;
                setTimeout(this.type, 85);
            } else {
                setTimeout(this.erase, 2000);
            }
        },
        erase () {
            if (this.charIndex >= 0) {
                this.typedValue = this.word.substring(0, this.charIndex);
                this.charIndex -= 1;
                setTimeout(this.erase, 60);
            } else {
                if (this.wordIndex < this.words.length - 1) {
                    this.wordIndex += 1;
                } else {
                    this.wordIndex = 0;
                }
                setTimeout(this.type, 500);
            }
        }
    },
    created () {
        setTimeout(this.type, 500);
    }
}
</script>

<style lang="scss" scoped>
@import '@/style/__variables.scss';

#terminal {
    width: 400px;
    height: 250px;
    margin: 50px auto;
    border: 1px solid rgba($dark-grey, 0.3);
    border-radius: 5px;
    background-color: $white;

    .close-tab {
        padding: 0;
        margin: 0;
        display: flex;

        .circle{
            margin-left: 5px;
            margin-top: 5px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            cursor: pointer;
        }

        .red {
            background-color: #FF605C;
        }
        .yellow {
            background-color: #FFBD44;
        }
        .green {
            background-color: #00CA4E;
        }
        
    }
}

.word-to-type {
    color: $green;
}

.title {
    text-align: center;
    max-width: 260px;
    margin: 40px auto;
}

.console {
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    p {
        margin: 0;
        text-align: left;
        margin-left: 20px;
        font-size: 1.2em;
        font-weight: bold;  
    }
    .typebar {
        height: 3px;
        width: 12px;
        background-color: $green;
        margin-bottom: 4px;
        margin-left: 6px;
        animation: typebar 1s infinite;

    }
}

@keyframes typebar {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}
</style>