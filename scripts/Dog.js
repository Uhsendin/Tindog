class Dogs {
    constructor(data) {
      Object.assign(this, data);
    }
  
    getDogInfoHtml() {
      const { name, avatar, bio,} = this;
      return `  <img src="${avatar}" alt="" />
      <div class="dog-info">
      <p>${name}</p>
      <p>${bio}</p>
     </div>`
    }
  }
  

  export default Dogs