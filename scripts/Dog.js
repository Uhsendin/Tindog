class Dogs {
    constructor(data) {
      Object.assign(this, data);
    }
  

    setMatchStatus(bool) {
      this.hasBeenLiked = bool
      this.hasBeenSwiped = true
  }

    getDogInfoHtml() {
      const { name, avatar, bio, age} = this;
      return `  <img src="${avatar}" alt="" />
      <div class="nope-like-img"></div>
      <div class="dog-info">
      <p>${name}, ${age}</p>
      <p>${bio}</p>
     </div>`
    }
  }
  

  export default Dogs